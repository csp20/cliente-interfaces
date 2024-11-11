window.addEventListener("load", cargar);

function cargar(){

    let aniadir = document.getElementById("btnAgregarDivImagen");
    aniadir.addEventListener("click", agregarfto)

    function agregarfto(){
        let titulo = document.createElement("h2");
        titulo.innerHTML= prompt(" escribe el titulo");
        let imagen = document.createElement("img");
        imagen.innerHTML= prompt(" escribe el la url de la foto");
        let sitio = document.createElement()
    }
}