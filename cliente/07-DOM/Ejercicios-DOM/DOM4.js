window.addEventListener("load", pasarFotos);

function pasarFotos() { 
    let numfotos = document.getElementsByTagName("img");
    let indice = 0;
    let boton_avanzar = document.getElementById('boton_avanzar'); 
    let boton_retroceder = document.getElementById('boton_retroceder'); 
    // Mostrar la primera imagen 
    numfotos[indice].hidden = false;
    //realizar el evento click;
    boton_avanzar.addEventListener("click", fotosiguiente); 
    boton_retroceder.addEventListener("click", fotoprevia); 
    
    function actualizarbotones() { 
    boton_retroceder.disabled = indice === 0; 
    boton_avanzar.disabled = indice === numfotos.length - 1; 
    } 
    function fotoprevia() { 
        if (indice > 0) { 
        numfotos[indice].hidden = true; 
        indice--; 
        numfotos[indice].hidden = false; 
        actualizarbotones();
        } 
    } 
    function fotosiguiente() { 
        if (indice < numfotos.length - 1) {
         numfotos[indice].hidden = true; 
         indice++; 
         numfotos[indice].hidden = false; 
         actualizarbotones();
         
         }
    }

}

 