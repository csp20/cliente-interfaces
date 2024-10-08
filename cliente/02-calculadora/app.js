function recogerNum(mensaje){
    let A = prompt(mensaje);

    while(isNaN(A)){
        alert("mete un valor correcto");
        A = prompt(mensaje);
    }
    return (A)
}

function sumar(A,B){
    let c = Number (A) +Number (B);
    alert(`La suma es ${Number(c)}`);
}
function restar(A,B){
    let c = Number (A) - Number (B);
    alert(`La resta es ${Number(c)}`);
}
function dividir(A,B){
    let c = Number (A) / Number (B);
    alert(`La division es ${Number(c)}`);
}
function multiplicar(A,B){
    let c = Number (A) * Number (B);
    alert(`La multiplicacion es ${Number(c)}`);
}
function calc(){
    let A = recogerNum("Dime el numero A:")
    let B = recogerNum("Dime el numero B:")
    let sign = prompt("Dime el valor que quieres hacer:")
    
    var i =0;

while(i==0){
    switch (sign) {
    case "+":
        sumar(A,B);
        i=1;
        break;
    case "-":
        restar(A,B);
        i=1;
        break;
    case "/":
        dividir(A,B);
        i=1;
        break;
    case "*":
        multiplicar(A,B);
        i=1;
        break;

    default:
        alert("has metioun valor mal");
        sign = prompt("mete el signo (+ , -, /, *)")
        break;
    }
}
}

function sumar_ventana(){
    let a = recogerNum("dime el num a ");
    let b = recogerNum("dime el num b ");
    sumar(a,b);
}