// alert("Hola mundo. Fichero JS")

// 'use strict';

// Activamos Quoka con ctrl+shit+p

console.log("Hola Mundo");

// nombre = "José Miguel";
console.log(nombre);
// alert(nombre);

var nombre;
let a= 3;
let b= '2';
let c= a + b;
console.log(c);
console.log(typeof a);
console.log(typeof b);
let ok = true;
console.log(typeof ok);
console.log(a + nombre);
nombre= 'José Miguel';
console.log(a + nombre);
console.log(typeof nombre);

if (b>a){
    console.log("");
} else{
    console.log("");
}
// Quokka ctrl + shift + p

let objeto1 = Symbol(" mi id");
console.log(typeof objeto1);
console.log(objeto1);

/* 6-11 buenos dias
    12- 18 buenas tardes
        19-5 buenas noches */

let horaDia = 11;
let mensaje = "";

if (horaDia >= 6 && horaDia < 12) {
    mensaje = "Buenos días.";
} else if (horaDia >= 12 && horaDia < 18) {
    mensaje = "Buenas tardes.";
} else if (horaDia >= 18 && horaDia <= 24 || horaDia >= 1 && horaDia < 6) {
    mensaje = "Buenas noches.";
} else {
    mensaje ="Franja horaria incorrecta.";
}

console.log("Son las " + horaDia + " horas, " + mensaje);



let y = 2;
let z = "2";
if (y == z){
    console.log("son iguales")
}else if (y === z){
    console.log("son iguales pero no identicos")
} else {
    console.log("no son iguales")
}


//Operador Ternario
// El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
// Se usa para tomar una decisión basada en una // expresión que se evalúa como true o false
// Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
// y rápido de escribir.
let resultado = (a>b) ? "verdadero": "falso";
console.log(resultado)

let minumero = "18";
console.log(minumero)

if (isNaN(minumero)){
    console.log("no es un num");
}
minumero = Number(minumero);
console.log(minumero)


let mistring = String(minumero);
console.log(mistring)


let contador =0;
while (contador<3){
    console.log(contador++);
    
}

let cont =0;
do{
    console.log(cont++);
}while(cont <4);

for(let conta =0; conta <5 ;conta ++){
    console.log(conta);
}
let mes =11;
let estacion= "desconocida"
switch(mes)
{
    case 1: case 2: case 12:
        estacion="invierno";
        break;
    case 3: case 4: case 5:
        estacion="primavera";
        break;
    case 6: case 7: case 8:
        estacion="verano";
        break;
    case 9: case 10: case 11:
        estacion="otoño";
        break;
    default:
    estacion= "no existe";
 }
for(let i=0; i<=2; i++){
    for(let k=0; k<=3; k++){
    console.log("c1:  "+ i + " c2:  "+ k)
        if(k==2){
            //break 
            i=3;
            k=4;
        }
    }

}

let objeto ={
    nombre: "jose",
    apellido: "perez",
    edad: 47
}
console.log(typeof objeto);
console.log(objeto);

let marcaCoches = ["bmw","audi","ford","seat"];
console.log(marcaCoches);

for ( let i=0; i< marcaCoches.length; i++){
    console.log(marcaCoches[i])
}

//definir clase
class persona {
    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;

    }
    tostring(){
        return`${this.nombre} ${this.apellidos} edad: ${this.edad}`;
    }
}
console.log(persona);
console.log(typeof persona);

let persona1 = new persona( "juan", "perez",23);
console.log(persona1);
console.log(persona1.tostring());

let persona2 = new persona(objeto.nombre , objeto.apellido , objeto.edad);
console.log(persona2.tostring());

//function
var aa = 4;
var bb = 5;
function mifunction(xx,yy){
    console.log("suma: "+ (xx + yy));
    console.log("suma: " + (aa + bb));
    console.log( ` suma: ${aa + bb}`);
    return (xx+yy);
}
let result = mifunction(8,4);
console.log(result);

console.log(typeof mifunction);


