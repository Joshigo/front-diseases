let map = L.map('map').setView([10.4806, -66.9036], 6); // Ubicación inicial en Venezuela

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function agregarPuntoAlMapa(lat, lng, gravedad) {
    let color = (gravedad === "grave") ? "red" : "green";

    let marker = L.circleMarker([lat, lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.8,
        radius: 8
    }).addTo(map);

    marker.bindPopup(`Nivel de gravedad: <strong>${gravedad.toUpperCase()}</strong>`).openPopup();
}
