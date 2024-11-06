console.log("cargado");
let listadoPrincipal = document.querySelectorAll("li");

 //CORREGIIIIIIIIIIIIIIR FOTO ISMA 
let pulsado0 = false;
let pulsado1= false;
let pulsado2= false;

listadoPrincipal[0].onclick = function (){
    if (!pulsado0) {
        pulsado0=true;
        
        if (pulsado1) {
             listadoPrincipal[1].lastChild.remove();
             pulsado1=false;
        }
        if (pulsado2) {
            listadoPrincipal[2].lastChild.remove();
            pulsado2=false;
        }
        
        pulsado1 = false;
        pulsado2 = false;

        let datosInicio = ["Portada", "Acerca de mi", "Mis fotos"];
        let listaInicio = document.createElement("ul");
        for (let i = 0; i < datosIniciolength; i++) {
            let item = document.createElement("li");
            item.innerHTML = datosInicio[i];
            listaInicio.appendChild(item); 
        }
        listadoPrincipal[0].appendChild(listaInicio);
    }else{
        listadoPrincipal[0].lastChild.remove();
        pulsado2 = false;
    }
   //control + Y pa lante
};