window.addEventListener("load", cambiarCSS);

function cambiarCSS(){
    let texto1 = document.getElementById("uno");
     texto1.addEventListener("click",cambiar);

    function cambiar(){
        if (texto1.id === "uno") {
            texto1.id = "dos";
        }else{
            texto1.id = "uno";
        }
    }
}