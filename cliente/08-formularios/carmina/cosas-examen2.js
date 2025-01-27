let hijos = document.getElementById("hijos");

hijos.addEventListener("change", creahijos);

function creahijos(){
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar elementos anteriores

    for (let i = 0; i < hijos.value; i++) {
        let label = document.createElement("label");
        label.textContent = `Hijo ${i + 1}: `;
        let input = document.createElement("input");
        input.type = "text";
        input.name = `hijo${i + 1}`;

        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement("br")); // Salto de línea
    }
}