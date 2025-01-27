let edad = document.getElementById("edad");
edad.addEventListener("blur", comprobaredad);

function comprobaredad() {
    let edadValor = parseInt(edad.value, 10); // Convertir a número
    if (edadValor <= 17 && edadValor !="") {
        alert("eres menor de edad");
    } else {
        alert("eres mayor de edad");
        let boton = document.getElementById("enviar");
        boton.removeAttribute("disabled");
        boton.disabled = false;
    }
}

