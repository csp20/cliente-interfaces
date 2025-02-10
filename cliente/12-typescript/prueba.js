"use strict";
//abrir power shell
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
//en git bash
//tsc "nombrearchivo.ts"
//
//declaracion de variables 
let nombre = "John";
const edad = 30;
var activo = true;
// if else
if (edad > 18) {
    console.log("Adulto");
}
else {
    console.log("Menor de edad");
}
// switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de la semana");
        break;
    case "viernes":
        console.log("Fin de la semana");
        break;
    default:
        console.log("Día intermedio");
}
// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//funcion simple
function saludo(nombre) {
    return `Hola, ${nombre}`;
}
//funcion flecha
const saludoFlecha = (nombre) => {
    return `Hola, ${nombre}`;
};
// clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let persona1 = new Persona("John", 30);
console.log(persona1.saludar());
/**Ejercicio 1: Declaración de Variables y Tipos
Declara tres variables: un número, una cadena de texto y un booleano.
Asigna valores a las variables y muestra esos valores en la consola.



Ejercicio 2: Estructuras de Control y Bucles
Escribe una función que reciba un número como parámetro.
Utiliza un bucle for para imprimir los números del 1 al número recibido.
Si el número es divisible por 3, imprime "Fizz". Si es divisible por 5, imprime "Buzz". Si es divisible por ambos, imprime "FizzBuzz".

Ejercicio 3: Clases y Objetos
Crea una clase llamada Coche con las propiedades marca, modelo y año.
Añade un método que devuelva una cadena con la descripción del coche.
Crea dos instancias de la clase Coche con diferentes valores y
muestra la descripción de cada coche en la consola. */ 
