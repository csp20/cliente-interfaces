/*
let mensaje:string = "hola";
console.log(mensaje);
let numero:number = 120;
console.log(numero);
let esviernes:boolean = false;
console.log(esviernes);
let real:number = 1.43;
let binario:number = 0b101;
console.log(typeof binario);
let suma:number = real + binario + numero;
console.log(suma);
let comparacion:boolean;
comparacion = real>2;
console.log(comparacion);
let octal:number=0o45;
console.log(octal);
let cadena1:string = "hola";
let cadena2:string = 'capullo';
let cadena3:string = `el num es ${suma}`;
let supercadena:string = cadena1 + cadena2 + cadena3;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(supercadena);
*/
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [5, 6, 7, 8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
var arreglocadena = ["ts", "js", "php"];
arreglocadena.push("lelolelole");
console.log(arreglocadena);
var tupla = ["carmina", 30];
console.log(tupla[1]);
var semaforo;
(function (semaforo) {
    semaforo[semaforo["rojo"] = 3] = "rojo";
    semaforo[semaforo["ambar"] = 4] = "ambar";
    semaforo[semaforo["verde"] = 5] = "verde";
})(semaforo || (semaforo = {}));
;
console.log(semaforo);
semaforo.ambar;
console.log(semaforo);
var nose;
nose = "hola";
nose = 30;
//pbject
var casa;
var personacarmina = {
    nombre: "carmina",
    apellido: "cervera",
    edad: 52,
    estado: true,
};
console.log(personacarmina);
console.log(personacarmina.edad);
