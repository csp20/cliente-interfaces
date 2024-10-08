//def funciones
let func = new Function("a","b","return a * b");
let res = func(10,10);
console.log(res);

// funcion autoinvitadas
(function(){
    let msg = "hola";
    console.log(msg);
})();

//funcion anonima

res = function(a,b){return a*b}
console.log(res(10,8));


// notacion flecha -- arrow function

const arrowF =(a,b)=> a*b;
console.log(arrowF(10,8));