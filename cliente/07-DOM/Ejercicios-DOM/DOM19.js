window.addEventListener("load", cargar);

function cargar(){

let pulsar = document.getElementById("boton_aniadir");

pulsar.addEventListener("click", aniadir_li);

function aniadir_li(){
    let elemento = document.getElementById("lista");
    let li = document.createElement("li");
    let info = prompt("escribe una cadena");
    li.innerHTML= info;
    elemento.appendChild(li);
}
}