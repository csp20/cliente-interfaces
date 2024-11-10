// window.addEventListener("load", cargar);

// function cargar() {
//     enlace.addEventListener("mouseover", avisoEnlace);
//     function avisoEnlace() {
//     let enlace = document.getElementById("enlace");
//     let texto = document.getElementById("texto");
//     texto.innerHTML = enlace.innerHTML;
//     texto.setAttribute(hidden, false);
//   }
// }
window.addEventListener("load", cargar);

function cargar() {
    let enlaces = document.getElementsByClassName("enlace");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("mouseover", mostrarTooltip);
        enlaces[i].addEventListener("mouseout", ocultarTooltip);
    }
}

function mostrarTooltip(event) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "La URL de este enlace es: " + event.target.href;
    tooltip.style.display = "block";
}

function ocultarTooltip() {
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}
