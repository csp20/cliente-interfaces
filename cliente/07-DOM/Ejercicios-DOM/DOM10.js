window.addEventListener("load", cambiarfondo);

function cambiarfondo(){
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let cuerpo = document.getElementById("cuerpo");
    div1.addEventListener("mouseover",cambiar);
    div2.addEventListener("mouseover",cambiar);
    div3.addEventListener("mouseover",cambiar);
    cuerpo.addEventListener("mouseout",cambiarablanco);

    function cambiar() {
        document.body.style.backgroundColor =  this.style.backgroundColor;
        

    } 
    function cambiarablanco(){
        
        if (document.body.style.backgroundColor ==  this.style.backgroundColor) {
            document.body.style.backgroundColor = "white";
        }
    }
}