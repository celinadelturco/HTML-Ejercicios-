function abrirGaleria(imagen) {
    document.getElementById("galeriaEmergente").style.display = "block";
    document.getElementById("imagenSeleccionada").src = imagen.src;
}

function cerrarGaleria() {
    document.getElementById("galeriaEmergente").style.display = "none";
}