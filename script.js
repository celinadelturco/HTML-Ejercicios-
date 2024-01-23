function abrirGaleria(imagen) {
    document.getElementById("galeriaEmergente").style.display = "block";
    document.getElementById("imagenSeleccionada").src = imagen.src;
}

function cerrarGaleria() {
    document.getElementById("galeriaEmergente").style.display = "none";
}
function login(){
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username ==="celina" && password === "1234"){
                window.location.href = "index.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        }

