//incluimos y definimos funciones a exportar

function saludar(nombre){
    return `hola,${nombre}`;
}

function despedida(nombre){
    return `adiooos,${nombre}`;
}
export function despedidas(){
    return `hasta otra,${nombre}`;
}
//exporto funciones
//export {saludar, despedida};
export * from './saludos.js';
