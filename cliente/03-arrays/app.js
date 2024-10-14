//formas d crear array
let autos= ["bmw", "audi", "volvo"];
console.log(autos);
//typeof te dice el tipo de variable es
console.log(typeof autos);

let item = new Array(1,6);
console.log(item);
let items = new Array(6);
console.log(items);

//otra forma de crear array 
let pets = new Array("perro", "gato", "raton");
//forma de imprimir
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

//reemplazar 
cadena.replace("java","ecma");
console.log(cadena.replace("java","ecma"));

let palabras= cadena.split(" ");
let numeros = vector.split(",");
console.log(palabras);
console.log(numeros);


//busqueda de un aposicion desde inicio hasta fin
let posicion = months.indexOf("May");
console.log(posicion);


//busqueda de una posicion desde fin hasta inicio
//lasindexof
const numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // Devuelve 3
console.log(numbers.lastIndexOf(7)); // Devuelve -1 (no encontrado)
console.log(numbers.lastIndexOf(2, 2)); // Devuelve 0 (busca hacia atrás desde el índice 2)

//slice cort pero no elimina 
//corta hacia adelante a partir del num que se indique y hace un nuevo array 
console.log(months.slice(1));
console.log(months);

console.log(months.slice(-1));
console.log(months);


//buscar elementos con find 
let array0 = [1, 2, 3, 4, 5];
let element = array0.find(element => element > 3); // Devuelve 4

//verificar si incluye un elemento
let array2 = [1, 2, 3, 4, 5];
let exists = array2.includes(3); // Devuelve true

//eliminar repetidos 
let array3 = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = array3.filter((element, index) => array3.indexOf(element) === index); 
// Devuelve [1, 2, 3, 4, 5]

//hecho con set 
let array4 = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray2 = [...new Set(array4)]; // Devuelve [1, 2, 3, 4, 5]


//ejemplo de como buscar repetidos y almacenarlos aparte
let array = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8];
let repetidos = [];
let contador = {};

for (let i = 0; i < array.length; i++) {
  let elemento = array[i];
  if (contador[elemento]) {
    contador[elemento]++;
  } else {
    contador[elemento] = 1;
  }
}

for (let elemento in contador) {
  if (contador[elemento] > 1) {
    repetidos.push(Number(elemento));
  }
}

console.log(repetidos); // Devuelve [3, 5, 7]

