from flask import Flask, render_template, request
import requests
import pandas as pd
import dateutil.parser
from datetime import datetime
import pytz

app = Flask(__name__)

cached_flights = {
    "date": None,
    "flights": []
}
cached_launches = {
    "fetched": None,
    "data": []
}

IATA_COORDS = {
    "ATL": (33.6407, -84.4277), "AUS": (30.1944, -97.67), "BNA": (36.1263, -86.6782),
    "BOS": (42.3656, -71.0096), "BWI": (39.1754, -76.6684), "CLT": (35.2140, -80.9431),
    "DEN": (39.8561, -104.6737), "DFW": (32.8998, -97.0403), "DTW": (42.2124, -83.3534),
    "EWR": (40.6895, -74.1745), "FLL": (26.0726, -80.1527), "JAX": (30.4941, -81.6879),
    "LAS": (36.0840, -115.1537), "LAX": (33.9416, -118.4085), "LGA": (40.7769, -73.8740),
    "MCO": (28.4294, -81.3089), "MIA": (25.7959, -80.2871), "MSP": (44.8848, -93.2223),
    "ORD": (41.9742, -87.9073), "PHL": (39.8744, -75.2424), "PHX": (33.4342, -112.0116),
    "RDU": (35.8776, -78.7875), "SAN": (32.7338, -117.1933), "SEA": (47.4502, -122.3088),
    "SFO": (37.6213, -122.3790), "SJC": (37.3639, -121.9289), "SLC": (40.7899, -111.9791),
    "STL": (38.7499, -90.3748), "TPA": (27.9755, -82.5332), "TUS": (32.1161, -110.9411),
    "CUN": (21.0415, -86.8740), "MEX": (19.4361, -99.0719), "GDL": (20.5218, -103.3107),
    "MTY": (25.7783, -100.1070), "BJX": (20.9933, -101.4808), "QRO": (20.6173, -100.1857),
    "YYZ": (43.6777, -79.6248), "YVR": (49.1967, -123.1815), "YUL": (45.4706, -73.7408),
    "AUA": (12.5098, -70.0164), "NAS": (25.0380, -77.4662), "MBJ": (18.5033, -77.9139),
    "KIN": (17.9357, -76.7875), "SJU": (18.4394, -66.0018), "GUA": (14.5833, -90.5274),
    "SAL": (13.4409, -89.0550), "PTY": (8.9731, -79.5556), "SJO": (9.9939, -84.2088),
    "LHR": (51.4700, -0.4543), "FRA": (50.0379, 8.5622), "AMS": (52.3105, 4.7683),
    "CDG": (49.0097, 2.5479), "MAD": (40.4719, -3.5626), "IST": (41.2753, 28.7519),
    "BOG": (4.7016, -74.1469), "LIM": (-12.0219, -77.1143), "SCL": (-33.3929, -70.7858),
    "GRU": (-23.4326, -46.4690), "GIG": (-22.8090, -43.2506)
}

def fetch_launches():
    if cached_launches["fetched"]:
        delta = datetime.now(pytz.utc) - cached_launches["fetched"]
        if delta.total_seconds() < 3600:
            return cached_launches["data"]

    url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        launches = response.json().get("results", [])
        local_tz = pytz.timezone("America/Chicago")

        def format_time_range(utc_start, utc_end):
            dt_start_utc = dateutil.parser.isoparse(utc_start)
            dt_end_utc = dateutil.parser.isoparse(utc_end)
            dt_start_local = dt_start_utc.astimezone(local_tz)
            dt_end_local = dt_end_utc.astimezone(local_tz)
            utc_str = f"{dt_start_utc.strftime('%Y-%m-%d %H:%M')} → {dt_end_utc.strftime('%H:%M')}"
            local_str = f"{dt_start_local.strftime('%Y-%m-%d %I:%M %p').lstrip('0')} → {dt_end_local.strftime('%I:%M %p').lstrip('0')}"
            return f"UTC: {utc_str} | IAH Local: {local_str}"

        parsed = [
            {
                "id": l["id"],
                "name": l["name"],
                "window_start": l["window_start"],
                "window_end": l["window_end"],
                "display": f"{l['rocket']['configuration']['name']} | {l['mission']['name']} ({format_time_range(l['window_start'], l['window_end'])})"
            }
            for l in launches if l.get("rocket") and l.get("mission")
        ]
        cached_launches["data"] = parsed
        cached_launches["fetched"] = datetime.now(pytz.utc)
        return parsed
    except Exception as e:
        print("Launch fetch error:", e)
        return []

def fetch_full_day_flights(date_str):
    headers = {
        "X-RapidAPI-Key": "f5698355camsh0adc2a3c5dc04d6p168bdfjsn835b4e3502ff",
        "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
    }

    params = {
        "withLeg": "true",
        "direction": "Departure",
        "withCancelled": "true",
        "withCodeshared": "true",
        "withCargo": "true",
        "withPrivate": "true",
        "withLocation": "false"
    }

    urls = [
        f"https://aerodatabox.p.rapidapi.com/flights/airports/iata/IAH/{date_str}T00:00/{date_str}T12:00",
        f"https://aerodatabox.p.rapidapi.com/flights/airports/iata/IAH/{date_str}T12:00/{date_str}T23:59"
    ]

    all_flights = []
    for url in urls:
        try:
            response = requests.get(url, headers=headers, params=params)
            response.raise_for_status()
            flights = response.json().get("departures", [])
            all_flights.extend(flights)
        except Exception as e:
            print("Flight fetch error:", e)

    return all_flights

@app.route('/')
def index():
    global cached_flights

    launches = fetch_launches()
    selected_launch_id = request.args.get("launch")

    selected_window_start = selected_window_end = None
    query_date = None

    for launch in launches:
        if launch["id"] == selected_launch_id:
            selected_window_start = dateutil.parser.isoparse(launch["window_start"])
            selected_window_end = dateutil.parser.isoparse(launch["window_end"])
            iah_tz = pytz.timezone("America/Chicago")
            query_date = selected_window_start.astimezone(iah_tz).strftime("%Y-%m-%d")
            break

    if not query_date:
        query_date = datetime.utcnow().strftime("%Y-%m-%d")

    if cached_flights["date"] != query_date:
        cached_flights = {
            "date": query_date,
            "flights": fetch_full_day_flights(query_date)
        }

    flights = cached_flights["flights"]
    rows = []
    map_lines = []
    IAH_LAT, IAH_LON = 29.9902, -95.3368

    for f in flights:
        dep = f.get("departure", {})
        arr = f.get("arrival", {})
        aircraft = f.get("aircraft", {})
        airline = f.get("airline", {})

        utc_str = (
            dep.get("runwayTime", {}).get("utc")
            or dep.get("revisedTime", {}).get("utc")
            or dep.get("scheduledTime", {}).get("utc")
        )
        local_str = (
            dep.get("runwayTime", {}).get("local")
            or dep.get("revisedTime", {}).get("local")
            or dep.get("scheduledTime", {}).get("local")
        )
        arr_utc = arr.get("scheduledTime", {}).get("utc")
        arr_local = arr.get("scheduledTime", {}).get("local")

        if not utc_str:
            continue
        try:
            dep_utc = dateutil.parser.isoparse(utc_str)
        except Exception:
            continue

        if selected_window_start and selected_window_end:
            if not (selected_window_start <= dep_utc <= selected_window_end):
                continue

        row = {
            "Flight Number": f.get("number", "N/A"),
            "Airline": airline.get("name", "N/A"),
            "Status": f.get("status", "N/A"),
            "Departure Terminal": dep.get("terminal", "N/A"),
            "Departure UTC": utc_str,
            "Departure Local": local_str,
            "Arrival Airport": arr.get("airport", {}).get("name", "N/A"),
            "Arrival City": arr.get("airport", {}).get("municipalityName", "N/A"),
            "Arrival UTC": arr_utc,
            "Arrival Local": arr_local,
            "Aircraft Model": aircraft.get("model", "N/A"),
        }
        rows.append(row)

        arrival_iata = arr.get("airport", {}).get("iata")
        if arrival_iata in IATA_COORDS:
            map_lines.append([[IAH_LAT, IAH_LON], list(IATA_COORDS[arrival_iata])])

    df = pd.DataFrame(rows)
    html_table = df.to_html(classes="table table-bordered table-striped", index=False, escape=False)

    return render_template(
        "index.html",
        table=html_table,
        launches=launches,
        selected_launch_id=selected_launch_id,
        map_lines=map_lines
    )

if __name__ == '__main__':
    app.run(debug=True)
