window.addEventListener("load",function cambiartabla(){
    const celdas = document.querySelectorAll("#mitabla td");
    let colores = ["blue","yellow","red","green"];
    let indice = 0; 
    // Añadimos un evento click a cada celda
    celdas.forEach(celda => {
        celda.addEventListener("click", function() {
            //this.style.backgroundColor = this.style.backgroundColor =="black" ? "white": "black";
            this.style.backgroundColor = colores[indice];
            if (indice == colores.length) {
                indice = 0
            }else{
                indice++;
            }
            
        });
    });
});


   