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
function cambiosubtitlo(){
    let elemento = document.getElementById('subtitle');
elemento.style.color =  elemento.style.color === 'orange' ? 'pink' : 'orange';

}


//opcion 1 llamada a eventos desde js
// elemento.onclick = cambiosubtitlo(elemento);
let titleh3 =document.getElementById('h3subtitle');
titleh3.addEventListener('click', cambiosubtitlo());