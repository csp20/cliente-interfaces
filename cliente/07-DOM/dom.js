function inicioDOM(){
    console.log("dom cargau");

    document.body.style.background = 'cyan';
    // document.getElementById
    let titulo = document.getElementById("title");
    console.log(titulo);
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
    console.log(titulo.textContent.length);

    //getElementsByName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    //getElementsBytagName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    
    //document.getElemtsByClassName()
     parrafos = document.getElementsByClassName("parrafos1");
    console.log(parrafos);

    console.log(`numeros de parrafos que tengo: ${parrafos.length}`);
    for (let i = 0; i < parrafos.length; i++) {
        

        if(i == 2){
            parrafos[i].innerHTML = "parrafo cambiado";
        }
        console.log(`parrafo${i+1}: ${parrafos[i]}`);
    }
    //querySelector()
     let parrafo1 = document.querySelector('p.parrafos1');
    console.log(parrafo1);

    parrafo1 = document.querySelector('section.parrafos1');

    parrafo1 = document.querySelector('.projects p');
    console.log(parrafo1);

    //querySelectorAll()
    let elementos = document.querySelectorAll('p.parrafos1');
    console.log(`numeros de parrafos que tengo: ${elementos.length}`);
    for (let i = 0; i < parrafos.length; i++) {
        console.log(`parrafo${i+1}: ${elementos[i]}`);
    }


    // Selecciono el DOM parcialmente.
    let sectionProjects = document.getElementById('proyectos');
    console.log(sectionProjects);
    elementos = sectionProjects.querySelectorAll('p.parrafos1');
    console.log(`Número de elementos que tengo: ${elementos.length}`);
    for (let i=0; i<elementos.length; i++){
        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }
}
let estado = true;
function cambiocolor(cabecera){
    if(estado){
         cabecera.style.color='red';
         estado = false;
    }else{
        cabecera.style.color='black';
        estado = true;
    }
   //cabecera.style.color = cabecera.style.color === 'red' ? 'black' : 'red';
}

//mod titulo 2 


let subtitle =document.getElementById('subtitle');
subtitle.addEventListener('click', cambiosubtitlo);

function cambiosubtitlo(){
let elemento = document.getElementById('subtitle');
elemento.style.color =  elemento.style.color === 'green' ? 'yellow' : 'green';
}



// Declaramos h3title con un id y un evento con click para cambiar su color
// usamoss addEventListener y una funcion con if para establecer el cambio

let titleh3 =document.getElementById('h3title');
titleh3.addEventListener('click', cambiosubtitlo3);
// titleh3.addEventListener('dblclick', cambiosubtitlo3);

function cambiosubtitlo3(){
    let elemento = document.getElementById('h3title');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}
// titleh3.addEventListener('click', cambiosubtitlo3());

let c1 = document.getElementById('caja1');
c1.addEventListener('click', cambioclase1);

let c2 = document.getElementById('caja2');
c2.addEventListener('click', cambioclase2);

function cambioclase1(){
    // c1.style.background= 'black';
    // c1.style.color = 'white';
    if (c1.classList.contains('caja--negra')) {

        c1.classList.remove('caja--negra');
        c1.classList.add('caja--roja');
    }else{
        c1.classList.remove('caja--roja');
        c1.classList.add('caja--negra');
    }
    
}
function cambioclase2(){
    if (c2.classList.contains('caja--negra')) {

        c2.classList.remove('caja--negra');
        c2.classList.add('caja--roja');
    }else{
        c2.classList.replace('caja--roja', 'caja--negra');
    }
}