window.addEventListener("load", cambiarimagen);

function cambiarimagen(){
    let foto1 = document.getElementById("foto1");
    let foto2 = document.getElementById("foto2");
    foto1.addEventListener("mouseover",cambiar);
    foto2.addEventListener("mouseover",cambiar);

    function cambiar() {
        if (foto1.hidden == true) {
            foto1.hidden = false;
            foto2.hidden = true;
        }else{
            foto1.hidden = true;
            foto2.hidden = false;
        }
        // if (indice > 0) { 
        // numfotos[indice].hidden = true; 
        // indice--; 
        // numfotos[indice].hidden = false; 
        // actualizarbotones();
        // } 
    } 
}