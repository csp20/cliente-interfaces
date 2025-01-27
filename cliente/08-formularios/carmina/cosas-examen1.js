let file = document.getElementById("file");
let boton = document.getElementById("boton");
boton.addEventListener("click", comprobarfile);

function comprobarfile() {
    let cacho = file.value.split(".");
    let output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar mensajes anteriores

    let res = document.createElement("div");
    if (cacho[cacho.length - 1] === "png" || cacho[cacho.length - 1] === "jpg" || cacho[cacho.length - 1] === "jpeg") {
        res.textContent = "Muy bien";
        boton.setAttribute("type", "submit");
    } else {
        res.textContent = "Muy mal";
    }

    output.appendChild(res);
}