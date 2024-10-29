// Selecciona la tabla y los botones
const tabla = document.getElementById('miTabla');
const botonTamaño = document.getElementById('botonTamaño');
const botonBorde = document.getElementById('botonBorde');
const botonAlineacion = document.getElementById('botonAlineacion');

// Función para cambiar el tamaño de la tabla
botonTamaño.addEventListener('click', () => {
    // Muestra el tamaño actual
    alert(`Tamaño actual - Anchura: ${tabla.offsetWidth}px, Altura: ${tabla.offsetHeight}px`);
    
    // Solicita nuevos valores al usuario
    const nuevaAnchura = prompt('Introduce la nueva anchura (en px):');
    const nuevaAltura = prompt('Introduce la nueva altura (en px):');
    
    // Aplica los nuevos valores a la tabla
    tabla.style.width = nuevaAnchura + 'px';
    tabla.style.height = nuevaAltura + 'px';
});

// Función para cambiar el borde de la tabla
botonBorde.addEventListener('click', () => {
    // Muestra el borde actual
    const estiloBordeActual = window.getComputedStyle(tabla).border;
    alert(`Borde actual: ${estiloBordeActual}`);
    
    // Solicita un nuevo valor de borde al usuario y lo aplica
    const nuevoBorde = prompt('Introduce el nuevo valor para el borde ej "5px solid red"):');
    tabla.style.border = nuevoBorde;
});

// Función para cambiar la alineación de la tabla
let alineaciones = ['center', 'right', 'left']; // Opciones de alineación
let indexAlineacion = 0; // Índice inicial
// Inicializa el contador en 0
let contadorAlineacion = 0;

// Escucha el clic en el botón
botonAlineacion.addEventListener('click', () => {
    // Evalúa el valor del contador para definir la alineación
    if (contadorAlineacion === 0) {
        // Centrado
        tabla.style.marginLeft = 'auto';
        tabla.style.marginRight = 'auto';
        tabla.style.float = '';
    } else if (contadorAlineacion === 1) {
        // Alineación a la derecha
        tabla.style.marginLeft = '';
        tabla.style.marginRight = '';
        tabla.style.float = 'right';
    } else if (contadorAlineacion === 2) {
        // Alineación a la izquierda
        tabla.style.marginLeft = '';
        tabla.style.marginRight = '';
        tabla.style.float = 'left';
    }

    // Incrementa el contador y reinícialo a 0 si supera 2
    contadorAlineacion = (contadorAlineacion + 1) % 3;
});

