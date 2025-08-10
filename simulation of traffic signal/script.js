async function fetchTrafficData() {
    try {
        const response = await fetch("http://192.168.69.53:5000");
        const data = await response.json();
        document.getElementById("traffic-info").innerHTML = <h2>Traffic Data</h2><pre>${JSON.stringify(data.traffic, null, 2)}</pre>;
        document.getElementById("air-quality-info").innerHTML = <h2>Air Quality</h2><pre>${JSON.stringify(data.air_quality, null, 2)}</pre>;
        document.getElementById("signal-status").innerHTML = <h2>Signal Status</h2><pre>${JSON.stringify(data.signals, null, 2)}</pre>;
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

setInterval(fetchTrafficData, 1000);