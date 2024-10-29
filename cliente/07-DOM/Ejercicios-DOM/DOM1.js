// Seleccionar elementos del DOM
const enlace = document.getElementById('miEnlace');
const botonMostrar = document.getElementById('botonMostrar');
const botonCambiar = document.getElementById('botonCambiar');

 // Función para mostrar URL y texto
 botonMostrar.addEventListener('click', () => {
    alert(`URL: ${enlace.href}\nTexto: ${enlace.textContent}`);
});
// Función para cambiar URL y texto
botonCambiar.addEventListener('click', () => {
    enlace.href = "https://www.bing.com";  // Nueva URL
    enlace.textContent = "He cambiado";    // Nuevo texto
});