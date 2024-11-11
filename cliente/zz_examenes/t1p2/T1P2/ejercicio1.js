window.addEventListener("load", cargar);

function cargar(){

let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", aniadir_li);

let borrar = document.getElementById("btnBorrar");
borrar.addEventListener("click", borrar_li);

 let li = document.createElement("li");

function aniadir_li(){
    let elemento = document.getElementById("listaDinamica");
   
    let info = prompt("escribe una pagina web");
    li.innerHTML= info;
    let info2 = prompt("insertala en el enlace");
    ("src", "https://www."+info2+".com");
    li.setAttribute("src", "https://www."+info2+".com");
    
    elemento.appendChild(li);
}

function borrar_li(){
    let elemento = document.getElementById("listaDinamica");
    elemento.removeChild(li);
}
}