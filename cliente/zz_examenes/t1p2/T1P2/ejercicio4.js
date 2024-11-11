window.addEventListener("load", cargar);

function cargar(){
    let tabla = document.getElementById("btnGenerarTabla");
    tabla.classList.add("tabla");
    tabla.addEventListener('click', function() {
        // Selecciona el contenedor donde se insertará la tabla
        var contenedor = document.getElementById('seccionTabla');
    
        // Crea la tabla y sus elementos
        var tabla = document.createElement('table');
        var tbody = document.createElement('tbody');
    
        // Define el número de filas y columnas
        var filas = cogernum();
        var columnas = cogernum();
    
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
    
    });

    function cogernum() {
        let num1 = prompt("escriber un num");
        num1 = Number(num1);
        while (isNaN(num1) || num1 < 0 && num1<11) {
            alert = "no es un valor correcto";
            num1 = prompt("mete un numero superior a 0 y inferior a 11");
        }
        return (num1);
    }
    
}