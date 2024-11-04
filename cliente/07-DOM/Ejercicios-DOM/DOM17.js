// let btncorrer = document.getElementById("correr");
// btncorrer.addEventListener("click", iniciarcarrera);

// function iniciarcarrera(){
//     let corredores = document.querySelectorAll("div");
//     //let timer;
//     // timer = setInterval(function(){
//     let div1 = corredores[0] ;
//     let div2 = corredores[1] ;
//     let div3 = corredores[2] ;
//     let div4 = corredores[3] ;

//     // let velocidades = calcularvelocidad();
//     // for (let i = 0; i < 10; i++) {
//         div1.style.left = getRandomEnteros(0, 500) + "px";
//         div2.style.left = getRandomEnteros(0, 500) + "px";
//         div3.style.left = getRandomEnteros(0, 500) + "px";
//         div4.style.left = getRandomEnteros(0, 500) + "px";
//     // }
    
    
//     //  },50);
// }
//     // Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
// // function getRandomEnteros(min, max) {
// //     console.log(Math.random() * (10 - 1 + 1) + 1);
// //     return Math.random() * (10 - 1 + 1) + 1;
// // }
// function getRandomEnteros(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let btnreiniciar = document.getElementById("reiniciar");
// btnreiniciar.addEventListener("click", reiniciar);

// function reiniciar(){
//   // Recargar la página
//     location.reload();

    
    
// }

// function calcularVelocidades() {
//     let velocidades = [];
//     for (let i = 1; i <= 4; i++) {
//       velocidades.push(Math.random() * 5 + 1);
//     }
//     return velocidades;
//   }

 let btncorrer = document.getElementById("correr");
btncorrer.addEventListener("click", iniciarcarrera);

function iniciarcarrera() {
    let corredores = document.querySelectorAll("div");

    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let interval = setInterval(() => {
        moveDiv(div1);
        moveDiv(div2);
        moveDiv(div3);
        moveDiv(div4);
    }, 100); // Mueve las cajas cada 100 milisegundos

    setTimeout(() => clearInterval(interval), 8000); // Detiene el movimiento después de 8 segundo
}

function moveDiv(div) {
    let leftahora = parseInt(div.style.left) || 0;
    div.style.left = (leftahora + getRandomEnteros(1, 15)) + "px";
}

// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let btnreiniciar = document.getElementById("reiniciar");
btnreiniciar.addEventListener("click", reiniciar);

function reiniciar(){
  // Recargar la página
    location.reload();
}