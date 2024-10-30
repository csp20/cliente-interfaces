console.log("javascript");

let creaAnucio = document.getElementById("incluyeAnuncio");

creaAnucio.addEventListener("click", incluirAnuncio);

function incluirAnuncio(){
    //pedir al usuario la direcion de la imagen y el enlace
    let pathImg = prompt("direccion de la imagen","./image/foto1.jpg");
    let URLenlace = prompt("URL del enlace", "https://www.marca.es");

    //crear un div 
    let nuevoHijo = document.createElement("div");

    //creo el enlace
    let enlace = document.createElement("a");
    enlace.href= urlEnlace;
    enlace.textContent =prompt("diem el texto e enlace: ");
    

    //crea l aimagen 
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Imagen alternativa";
    imagen.style.width= "100px";
    imagen.style.height= "100px";

    //agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById(seccionArticles);
    seccion.appendChild(nuevoHijo);

}