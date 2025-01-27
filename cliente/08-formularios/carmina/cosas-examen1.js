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
/* 
let fichero = document.getElementById("fichero");
let boton = document.getElementById("enviar");

boton.addEventListener("click",function(){
let extensiones =["jpg","png"];
let extension = fichero.value.split(".")[1];
    if(!extensiones.includes(extension)){
    alert("extension erronea");
    }else{
    boton.setAttribute("type","submit");
    }
})
*/