let tabla = document.getElementById('generaTabla');

tabla.addEventListener('click', creotabla);

function creotabla() {
    let tam = recogerNum("dime tam de la matrix");
    let secciontabla = document.getElementById('secciontabla');
    let nuevatabla = document.createElement('table');
    let tablaBody = document.createElement('tbody');
    tabla.style.width = '100%';
    nuevatabla.setAttribute('border', 1);

    for (let i = 0; i < tam; i++) {
        let filas = Document.createElement('tr');

        for (let i = 0; i < tam; i++) {
            let celda = document.createElement('td');
            let textoCelda = document.createTextNode(`fila: ${i + 1}, columna: ${j + 1}`)

            celda.appendChild(textoCelda)
            //añadir un manejador eventos pa cambiar el color al hacer click
            // en la celda oportuna
            celda.onclick = function () {
                cambiarcolorcelda(this);
            };
            filas.appendChild(celda); //añado celda a la fila q construyo
        }
        tablaBody.appendChild(filas);
    }
    nuevatabla.appendChild(tablaBody);
    secciontabla.appendChild(nuevatabla);
}
function cambiarcolorcelda(celda){
    celda.style.backgroundColor = celda.style.backgroundColor === 'blue' ? 'green': 'blue';
}

function recogerNum(mensaje) {
    let a;
    do {
        a = prompt(mensaje);
        a = Number(a);
        if (isNaN(a)) {
            alert("Los datos introducidos son incorrectos");
        }
    } while (isNaN(a));
    return a;
}