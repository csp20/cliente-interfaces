//matrices
/*
function recogerNum(mensaje){
    let A = prompt(mensaje);

    while(isNaN(A)){
        alert("mete un valor correcto");
        A = prompt(mensaje);
    }
    return (A)
}



function creaypintamatriz(fila,columna){
    let matriz= new Array(fila); //genero las columnas

    for (let k = 0; k < fila; k++) {
        matriz[k]= new Array(columna);
    }
    let valor =0;
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = valor;
            valor++;
            
        }
        console.log(matriz[i]);
        valor=0;
    }

}
let columna=recogerNum("dime el tam de la fila: ");
let fila = recogerNum("dime el tam de la columna: ");

creaypintamatriz(columna,fila)


//let matriz =[];




autos= [["bmw1", "bmw2","bmw3"],["audi1", "audi2"],["volvo"]];
console.log(autos);
console.log(autos.length);
console.log(autos[0].length);
console.log(autos[1].length);
console.log(autos[2].length);


function pintamatriz(autos){
    let resultado="";

    //relleno los valores
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < columna; j++) {
            resultado += autos[i][j] + ",";
        }
        console.log( resultado);
    }
}
*/
//pedir num filas y num columnas
//verificar num y mayor 0 
//pedir un valor numerico por cada fila
//y multiplicar el valor pedido 
//pintar en consola


// function cogernum() {
//     let num1 = prompt("escriber un num");
//     num1 = Number(num1);
//     while (isNaN(num1) || num1 < 0) {
//         alert = "no es un valor correcto";
//         num1 = prompt("mete un numero superior a 0");
//     }
//     return (num1);
// }
/*
let num1 = cogernum();
let num2 = cogernum();
let resultado = "";
let matriz = new Array(num2);
let num3 = 0;


for (let i = 0; i < num1; i++) {
    num3 = cogernum();
    matriz[i] = new Array(num1);

    for (let j = 0; j < num2; j++) {
        matriz = (j + 1) * num3;
        if (matriz > 0 && matriz < 10) {
            resultado = "0" + matriz + ",";
        } else {
            resultado = matriz + ",";
        }
        
        console.log(resultado);
        if (j=num2) {
            console.log("\n");
        }
    }

}
    */




/*// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(1));
// Salids: 0
  
console.log(Math.random());
// Salida: un número de 0 a <1
// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
} */

  
    
//let matriusca = [];
n_filas = cogernum();
n_columnas = cogernum();

crearMatriz(n_filas,n_columnas);

function crearMatriz(n_filas,n_columnas){
    let matriusca = new Array(n_filas);
    for (i = 0; i < n_filas; i++) {
        matriusca[i]=new Array(n_columnas);
      for (j = 0; j < n_columnas; j++) {
        matriusca[i][j]=Math.floor(Math.random() * (100));
      }
     
      //console.log(matriusca[i][j]);
    }
    
    console.log(matriusca);
}

function cogernum() {
    let num1 = prompt("escriber un num");
    num1 = Number(num1);
    while (isNaN(num1) || num1 < 0) {
        alert = "no es un valor correcto";
        num1 = prompt("mete un numero superior a 0");
    }
    return (num1);
}

