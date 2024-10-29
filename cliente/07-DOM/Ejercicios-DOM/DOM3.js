// Selecciona el div y los botones
let divContador = document.getElementById('contador');
let btnSumar = document.getElementById('btnSumar');
let btnRestar = document.getElementById('btnRestar');

// Escuchador de eventos para sumar
btnSumar.addEventListener('click', () => {
    // Incrementa el número mostrado en el div en 1
    let valorActual = parseInt(divContador.textContent);
    divContador.textContent = valorActual + 1;
});

// Escuchador de eventos para restar
btnRestar.addEventListener('click', () => {
    // Decrementa el número mostrado en el div en 1
    let valorActual = parseInt(divContador.textContent);
    divContador.textContent = valorActual - 1;
});