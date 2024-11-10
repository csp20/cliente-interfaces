window.addEventListener("load", cargar);

// function cargar() {
//     let imagen = document.getElementById("foto");
//     imagen.addEventListener("click", ampliar);
//     let gris = document.getElementById("gris");
//     gris.addEventListener("click", cerrar);
// }

// function ampliar() {
//     let gris = document.getElementById("gris");
//     let imagenAmpliada = document.getElementById("imagenAmpliada");
//     let imagen = document.getElementById("foto");

//     gris.style.display = "flex";
//     imagenAmpliada.src = imagen.src;
// }

// function cerrar() {
//     let gris = document.getElementById("gris");
//     gris.style.display = "none";
// }

function cargar() {
    let imagenes = document.getElementsByClassName("imagenes");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", function() {
            ampliar(imagenes[i]);
        });
    }
    
    let gris = document.getElementById("gris");
    gris.addEventListener("click", cerrar);
}

function ampliar(imagen) {
    let gris = document.getElementById("gris");
    let imagenAmpliada = document.getElementById("imagenAmpliada");
    gris.style.display = "flex";
    imagenAmpliada.src = imagen.src;
}

function cerrar() {
    let gris = document.getElementById("gris");
    gris.style.display = "none";
}
