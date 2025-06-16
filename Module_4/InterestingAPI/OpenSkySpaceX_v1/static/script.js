let map;
let flightLines = [];

window.onload = () => {
  map = L.map("map").setView([25, -85], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  fetchLaunches();
  fetchAirports();
};

function fetchLaunches() {
  fetch("/api/launches")
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("launchSelect");
      data.forEach(l => {
        const opt = document.createElement("option");
        opt.value = JSON.stringify(l);
        opt.textContent = `${l.name} (${l.date})`;
        select.appendChild(opt);
      });

      select.onchange = updateDetailsAndFetchFlights;
    });
}

function fetchAirports() {
  fetch("/api/airports")
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("airportSelect");
      data.forEach(code => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = code;
        select.appendChild(opt);
      });

      select.onchange = updateDetailsAndFetchFlights;
    });
}

function updateDetailsAndFetchFlights() {
  const launchSel = document.getElementById("launchSelect");
  const airportSel = document.getElementById("airportSelect");
  const launchData = launchSel.value ? JSON.parse(launchSel.value) : null;
  const airport = airportSel.value;

  if (!launchData || !airport) return;

  document.getElementById("details").innerHTML = `
    <strong>Mission:</strong> ${launchData.name}<br>
    <strong>Date:</strong> ${launchData.date}<br>
    <strong>Launchpad:</strong> ${launchData.pad}<br>
    <strong>Window:</strong> ${launchData.window_start} to ${launchData.window_end}
  `;

  fetchFlights(launchData.date, airport, launchData.window_start, launchData.window_end);
}

function fetchFlights(date, airport, start, end) {
  // Clear old lines
  flightLines.forEach(l => map.removeLayer(l));
  flightLines = [];

  const url = `/api/flights?date=${date}&airport=${airport}&window_start=${start}&window_end=${end}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.forEach(flight => {
        const from = [flight.from.lat, flight.from.lon];
        const to = [flight.to.lat, flight.to.lon];
        const line = L.polyline([from, to], { color: "cyan" }).addTo(map);
        flightLines.push(line);
      });
    });
}
