from flask import Flask, render_template, jsonify, request
import requests
import pandas as pd
from datetime import datetime

app = Flask(__name__)

AERODATABOX_HOST = "aerodatabox.p.rapidapi.com"
AERODATABOX_KEY = "f5698355camsh0adc2a3c5dc04d6p168bdfjsn835b4e3502ff"
AERODATABOX_BASE = f"https://{AERODATABOX_HOST}/flights/airports/iata"
SPACEDEV_LAUNCH_URL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10"

HEADERS = {
    "X-RapidAPI-Key": AERODATABOX_KEY,
    "X-RapidAPI-Host": AERODATABOX_HOST
}

REGION_BOX = {
    "minLat": 9.0,
    "maxLat": 37.0,
    "minLon": -100.0,
    "maxLon": -70.0
}

IATA_AIRPORTS = [
    "IAH", "MIA", "MSY", "CUN", "SJU", "SXM", "PTY", "HAV", "TPA", "NAS"
]


def point_in_region(lat, lon):
    return REGION_BOX["minLat"] <= lat <= REGION_BOX["maxLat"] and REGION_BOX["minLon"] <= lon <= REGION_BOX["maxLon"]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/airports")
def get_airports():
    return jsonify(IATA_AIRPORTS)


@app.route("/api/launches")
def get_launches():
    try:
        res = requests.get(SPACEDEV_LAUNCH_URL)
        launches = res.json().get("results", [])
        return jsonify([{
            "id": l["id"],
            "name": l["name"],
            "date": l["net"].split("T")[0],
            "pad": l["pad"]["name"],
            "window_start": l["window_start"],
            "window_end": l["window_end"]
        } for l in launches])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/flights")
def get_flights():
    date_str = request.args.get("date")
    airport = request.args.get("airport")
    window_start = request.args.get("window_start")
    window_end = request.args.get("window_end")

    if not (date_str and airport and window_start and window_end):
        return jsonify({"error": "Missing parameters"}), 400

    try:
        ws = datetime.fromisoformat(window_start.replace("Z", "+00:00"))
        we = datetime.fromisoformat(window_end.replace("Z", "+00:00"))
    except:
        return jsonify({"error": "Invalid datetime format"}), 400

    results = []

    for span in [("00:00", "12:00"), ("12:00", "23:59")]:
        url = f"{AERODATABOX_BASE}/{airport}/{date_str}T{span[0]}/{date_str}T{span[1]}"
        print(f"Querying: {url}")
        try:
            r = requests.get(url, headers=HEADERS)
            if r.status_code != 200:
                continue
            flights = r.json().get("departures", [])
            for f in flights:
                dep_time = f.get("departure", {}).get("scheduledTimeUtc")
                if not dep_time:
                    continue
                dep_dt = datetime.fromisoformat(dep_time.replace("Z", "+00:00"))
                if ws <= dep_dt <= we:
                    dep = f.get("departure", {}).get("location", {})
                    arr = f.get("arrival", {}).get("location", {})
                    if dep and arr:
                        if point_in_region(dep.get("lat", 0), dep.get("lon", 0)) or point_in_region(arr.get("lat", 0), arr.get("lon", 0)):
                            results.append({
                                "number": f.get("number", "N/A"),
                                "from": dep,
                                "to": arr,
                                "time": dep_time
                            })
        except Exception as e:
            print(f"Error: {str(e)}")

    df = pd.DataFrame(results)
    print("\n--- Filtered Flights ---")
    print(df.to_string(index=False))

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
