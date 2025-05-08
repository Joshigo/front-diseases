document.addEventListener("DOMContentLoaded", function () {
    const edadInput = document.getElementById("edad");
    const cedulaInput = document.getElementById("cedula");
    const mensaje = document.getElementById("mensajeCedula");

    edadInput.addEventListener("input", function () {
        if (parseInt(edadInput.value) < 10) {
            cedulaInput.disabled = true;
            cedulaInput.value = "";
            mensaje.textContent = "No disponible para menores de 10 años";
        } else {
            cedulaInput.disabled = false;
            mensaje.textContent = "";
        }
    });
});
