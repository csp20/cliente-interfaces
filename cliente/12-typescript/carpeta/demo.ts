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
let arreglo1:number[] = [1,2,3,4];
let arreglo2:Array<number> =[5,6,7,8];
console.log(arreglo1);
console.log(arreglo2);
console.log( typeof arreglo1);
let arreglocadena: string[] =["ts","js","php"];
arreglocadena.push("lelolelole");
console.log(arreglocadena);
let tupla:[string,number] = ["carmina",30];
console.log(tupla[1]);
enum semaforo{"rojo" =3 ,"ambar","verde"};
console.log(semaforo);
semaforo.ambar;
console.log(semaforo);

let nose:any;
nose = "hola";
nose = 30;

//pbject
let casa:Object;

interface Persona{
    nombre:string;
    apellido:string;
    edad:number;
    estado:boolean;
}

let personacarmina:Persona ={
    nombre:"carmina",
    apellido:"cervera",
    edad: 52,
    estado:true,
}

console.log(personacarmina);
console.log(personacarmina.edad);