document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let sintomasSeleccionados = Array.from(document.querySelectorAll(".sintoma:checked"))
                                     .map(sintoma => sintoma.value);
    
    let gravedad = determinarGravedad(sintomasSeleccionados);
    
    navigator.geolocation.getCurrentPosition(function(position) {
        agregarPuntoAlMapa(position.coords.latitude, position.coords.longitude, gravedad);
    });

    alert("Registro exitoso. Nivel de gravedad: " + gravedad);
});

function determinarGravedad(sintomas) {
    let sintomasGraves = ["shock", "sangrado"];
    let sintomasModerados = ["fiebre", "dolorCabeza", "dolorOjos", "dolorArticulaciones"];

    if (sintomas.some(s => sintomasGraves.includes(s))) return "grave";
    if (sintomas.some(s => sintomasModerados.includes(s))) return "moderado";
    
    return "leve";
}
