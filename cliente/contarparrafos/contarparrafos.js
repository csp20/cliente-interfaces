// opción 2
// El objeto window representa la ventana que contiene un documento DOM; 
// la propiedad document apunta al DOM document cargado en esa ventana.
// https://developer.mozilla.org/es/docs/Web/API/Window
// Window.innerHeight: Obtiene la altura del area de contenido del navegador incluyendo, 
// si es interpretado, la barra de deslizado.
// window.innerWidth: Obtiene el ancho del area de contenido de la ventana del navegador,
// si es interpretado, la barra de deslizado vertical.
// Window.location: Obtiene/fija la location, o URL actual, del objeto de la ventana.
// Window.navigator: Returns a reference to the navigator object.
// Window.sessionStorage: Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
// Window.localStorage: Retorna una referencia al objeto almacenamiento local usado para
// almacenar datos que pueden ser de accedidos por el origen que los creo.

/**
 
 *
  a) contar número de enlaces de la página
  b) Indicar a qué enlace apunta el penúltimo enlace de la página.
  c) Indicar cuantos enlaces apuntan a la url: http://prueba
  d) Número de enlaces del 3er párrafo.
 */


// opcion 1  de carga
// document.addEventListener("DOMContentLoaded", domCargado);
// function domCargado{
//     alert("DOM cargado.");

//     let texto ="";

//     if (window.navigator.cookieEnabled) {
//         texto = "Cookies habilitadas";
//     }else{
//         texto = "Cookies deshabilitadas";
//     }
//     alert(texto);
//     //alert(window.location);
//     alert(`tamaño de ventana, altura: ${window.innerHeight}, anchura:  ${window.innerWidth}`);

// }

//opcion2 de carga

window.addEventListener("load",contarEnlaces);

function contarEnlaces(){
    //escribimos en el div la informacion 
    //creamos una variable nfo en la que metemos el elemento por su id
    let info = document.getElementById("informacion");

    //a) num enlaces Array
    // creamos var numenlaces y metemos el elemento por su tagname o etiqueta
    let numEnlaces = document.getElementsByTagName("a");
    console.log(numEnlaces);
    //en la variable info vemos su html interno y escribimos el num total de enlaces
    info.innerHTML = "El número de enlace es: "+ numEnlaces.length;

    //B) coger el npenultimo enlace 
    info.innerHTML += "<br>"+ "la direccion del penultimo enlace es: "+ numEnlaces[numEnlaces,length-2].href;
    //C) num de enlaces que apuntan a http://prueba
    let contador =0;
    for (let i = 0; i <numEnlaces; i++) {
        if (numEnlaces[i].href=='http://prueba/') {
            contador++;
        }
    }
    info.innerHTML += "<br>"+ "El num num de enlaces que apuntan a http://prueba es: "+ contador;
    //D) num de enlaces del 3er parrafo
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName;("a".length);

    info.innerHTML += "<br>" + "el num enlaces del 3er parrafo es: "+ enlaces.length;
}


