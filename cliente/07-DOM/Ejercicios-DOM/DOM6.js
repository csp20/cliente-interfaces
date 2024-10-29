// Selecciona todos los botones
let botones = document.querySelectorAll("button");

// Agrega un evento de clic a cada botón
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Cambia el fondo de la página al valor del botón
    document.body.style.backgroundColor = boton.value;
  });
});
