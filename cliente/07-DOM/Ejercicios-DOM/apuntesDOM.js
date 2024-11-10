// Crear varios nuevos elementos <li>
for (var i = 0; i < 5; i++) {
    var nuevoLi = document.createElement('li');
    nuevoLi.textContent = 'Elemento ' + (i + 1);
    document.getElementById('miLista').appendChild(nuevoLi);
}
// Crear un DocumentFragment
var fragmento = document.createDocumentFragment();

// Añadir varios nodos al fragmento
for (var i = 0; i < 5; i++) {
    var nuevoLi = document.createElement('li');
    nuevoLi.textContent = 'Elemento ' + (i + 1);
    fragmento.appendChild(nuevoLi);
}

// Añadir el fragmento al DOM
document.getElementById('miLista').appendChild(fragmento);

// Seleccionar un nodo existente
var nodoExistente = document.getElementById('miNodo');

// Mover el nodo a un nuevo padre
var nuevoPadre = document.getElementById('nuevoPadre');
nuevoPadre.appendChild(nodoExistente);

// Crear un nuevo nodo de texto
var nuevoTexto = document.createTextNode('Este es un texto nuevo.');

// Añadir el nodo de texto a un elemento existente
var parrafo = document.getElementById('miParrafo');
parrafo.appendChild(nuevoTexto);

//elimina el nodo
var nodo = document.getElementById('miNodo');
nodo.remove();

// Selecciona los elementos
var miDiv = document.getElementById('miDiv');
var otroDiv = document.getElementById('otroDiv');

// Accede al contenido del primer elemento
var contenido = miDiv.innerHTML;

// Transfiere el contenido al segundo elemento
otroDiv.innerHTML = contenido;

//Selecciona todos los elementos con un nombre de etiqueta específico.
var elementos = document.getElementsByTagName('div');

//Selecciona el primer elemento que coincide con un selector CSS
var elemento = document.querySelector('.miClase');

//selecciona todos los elemento del mismo tipo y crea un array
var elementos = document.querySelectorAll('.miClase');

//Selecciona todos los elementos con un atributo name específico. Devuelve una colección de nodos.
var elementos = document.getElementsByName('miNombre');

//Selecciona el nodo padre de un elemento.
var nodoPadre = elemento.parentNode;

//CREAR TABLA 
window.addEventListener('load', function() {
    // Selecciona el contenedor donde se insertará la tabla
    var contenedor = document.getElementById('tablaContenedor');

    // Crea la tabla y sus elementos
    var tabla = document.createElement('table');
    var tbody = document.createElement('tbody');

    // Define el número de filas y columnas
    var filas = 4;
    var columnas = 4;

    // Crea las filas y las celdas
    for (var i = 0; i < filas; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < columnas; j++) {
            var celda = document.createElement('td');
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }

    // Añade el cuerpo de la tabla a la tabla
    tabla.appendChild(tbody);

    // Añade la tabla al contenedor
    contenedor.appendChild(tabla);

    // Aplica algunos estilos a la tabla
    tabla.style.width = '100%';
    tabla.style.borderCollapse = 'collapse';
    tabla.querySelectorAll('td').forEach(function(celda) {
        celda.style.border = '1px solid black';
        celda.style.padding = '8px';
        celda.style.textAlign = 'center';
    });
});
