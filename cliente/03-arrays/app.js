let autos= ["bmw", "audi", "volvo"];
console.log(autos);
console.log(typeof autos);

let item = new Array(1,6);
console.log(item);
let items = new Array(6);
console.log(items);

let pets = new Array("perro", "gato", "raton");
console.log(pets);
console.log(pets.length);
console.log(pets [0]);

let len = pets.length;

for ( i = 0; i < len; i++) {
   console.log(pets[i]);
    
}
//añade al final
pets.push("rana","toro");
pets.push("loro");
console.log(pets);

//añade  donde digas
items[4]="leon";
console.log(items);

//elimina el ultimo
console.log(pets.pop());
console.log(pets);

// elimina el primero
console.log(pets.shift());
console.log(pets);

//añade al `primero`
console.log(pets.unshift("perro"));
console.log(pets);

// num 1 elige posicion num 2 cantidad a borrar y 3 par añadir (opcional) 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // insertando en la posición 1 con el 0
console.log(months);
months.splice(1, 1, 'May'); //intercambia con el 1 
console.log(months);

let eliminados = months.splice(3);

console.log(eliminados)
console.log(months)

//ordenacionde arrays 
console.log(months.reverse());
console.log(months.sort());


// partes de una palabra frase o vectores  ... delimitados por separadoir
let cadena = "javascript es un lenguaje de prograamcion";
let vector = "12,34,45,6,7,9";

cadena.replace("java","ecma");
console.log(cadena.replace("java","ecma"));

let palabras= cadena.split(" ");
let numeros = vector.split(",");
console.log(palabras);
console.log(numeros);


//busqueda de un aposicion
let posicion = months.indexOf("May");
console.log(posicion);

//slice cort pero no elimina 
console.log(months.slice(1));
console.log(months);

console.log(months.slice(-1));
console.log(months);



