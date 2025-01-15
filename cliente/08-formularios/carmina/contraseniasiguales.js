document.getElementById("repitecontrasenia").addEventListener("input",activarSubmit);
document.getElementById("contrasenia").addEventListener("input",activarSubmit);
        function activarSubmit(){
            let contrasenia = document.getElementById("contrasenia").value;
            let repitecontrasenia = document.getElementById("repitecontrasenia").value;
            let submit = document.getElementById("enviar");
            if (contrasenia == repitecontrasenia ) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        }