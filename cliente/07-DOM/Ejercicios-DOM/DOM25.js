// <!-- Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM. -->

// <!-- Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento. -->

console.log("estoy");

let btnagregarAntes = document.getElementById("btnagregarAntes");
 btnagregarAntes.addEventListener("click",agregarAntes);

function agregarAntes(){
    let primerElem = document.getElementById("primerElemento");
    
    //creamos un li y lo metemos en la class tarea para poder controlarlo
    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nueva tarea delante del 1er elemento";
    primerElem.before(nuevoElem);
}

let btnagregarDespues = document.getElementById("btnagregarDespues");
btnagregarDespues.addEventListener("click",agregarDespues);

function agregarDespues(){
    let segundoElem = document.getElementById("primerElemento");
    
    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nueva tarea justo detras del 1er elemento";
    segundoElem.after(nuevoElem);
}

let btnagregarelprimero= document.getElementById("btnagregarelprimero");
btnagregarelprimero.addEventListener("click", agregarelprimero);

function agregarelprimero(){
    //aqui atacamos al ul
    let tercerElem = document.getElementById("listaTareas");

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nueva tarea justo arriba del todo";
    tercerElem.prepend(nuevoElem);
}


let btnagregaralfinal= document.getElementById("btnagregaralfinal");
btnagregaralfinal.addEventListener("click", agregaralfinal);

function agregaralfinal(){
    //aqui atacamos al ul y añadimos al final de esa lista 
    let cuartoElem = document.getElementById("listaTareas");

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nueva tarea  al final del todo";
    cuartoElem.append(nuevoElem);
}

let btnreemplazarElementos= document.getElementById("btnreemplazarElementos");
btnreemplazarElementos.addEventListener("click", reemplazarElementos);

function reemplazarElementos(){
    //
    let quintoElem = document.getElementById("listaTareas");

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nueva tarea  de 0";
    nuevoElem.id = "primerElemento";
    quintoElem.replaceChildren(nuevoElem);
    
}

let btnreemplazarElprimeremento= document.getElementById("btnreemplazarElprimeremento");
btnreemplazarElprimeremento.addEventListener("click", reemplazarElprimeremento);

function reemplazarElprimeremento(){
    //
    let sextoElem = document.getElementById("primerElemento");

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "Nuevo elemento 6";
    nuevoElem.id = "primerElemento";
    sextoElem.replaceWith(nuevoElem);
    
}

let btneliminarElemento= document.getElementById("btneliminarElemento");
btneliminarElemento.addEventListener("click", eliminarElemento);

function eliminarElemento(){
    //
    let septimoElem = document.getElementById("primerElemento");

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "";
    nuevoElem.id = "primerElemento";
    septimoElem.replaceWith(nuevoElem);
    
}

let btnreemplazarlistaElemento= document.getElementById("btnreemplazarlistaElemento");
btnreemplazarlistaElemento.addEventListener("click", reemplazarlistaElemento);

function reemplazarlistaElemento(){
    //
    let octavoElem = document.querySelectorAll("tarea")

    let nuevoElem = document.createElement("li");
    nuevoElem.classList.add("tarea");
    nuevoElem.textContent= "";
    nuevoElem.id = "primerElemento";
    octavoElem.replaceChildren(nuevoElem);
    
}