window.addEventListener("load", cargar);

function cargar(){
    
    boton[0].addEventListener("click",pintarC);

    let botonnumeros= document.getElementById("marcaNumeros");
    botonnumeros.addEventListener("click",marcaDeNumeros);

    let botonoperador= document.getElementById("marcaOperadores");
    botonoperador.addEventListener("click",marcaDeOperadores);

    function pintarC(){
        let boton = document.getElementById("modificado");
        boton[0].style.backgroundcolor= "red";

    }
    function marcaDeNumeros(){
        let num = document.getElementsByClassName("numero");
        for (let i = 0; i < array.length; i++) {
            num[i].style.backgroundcolor = "red";
            
        }
    }
    function marcaDeOperadores(){
        let operador = document.getElementsByClassName("operador");
        for (let i = 0; i < array.length; i++) {
            operador[i].style.backgroundcolor = "yellow";
            
        }
    }
}