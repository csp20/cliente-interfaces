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
