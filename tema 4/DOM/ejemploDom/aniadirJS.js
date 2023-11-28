/*function anadirElemento(){

    let contenido = document.getElementById("contenido").value;
    if(contenido != ""){
        // Elemento creado
    let elemento = document.createElement("li");

    // Especificar contenido del elemento    
    elemento.innerHTML = `${contenido}`;

    // Le damos estilos
    elemento.classList.add("rojo")

    // Damos atributos extra
    elemento.setAttribute("title", contenido);
    elemento.setAttribute("id",`id${contenido}`)

    // Especificar eventos
        elemento.addEventListener("click",function(){
            this.remove();
        })


    // Recuperar el padre
    let padre = document.getElementById("lista");

    // Añado al padre el hijo
    padre.appendChild(elemento);
    }else{
        alert("Especifica un contenido")
    }
}*/

function anadirElemento(){

    //let contenido = document.getElementById("contenido").value;
    let elemento = document.createElement("li");

    // Especificar contenido del elemento    
    elemento.innerHTML = `${Math.random()}`;

    // Le damos estilos
    elemento.classList.add("rojo")

    // Damos atributos extra
    /*elemento.setAttribute("title", contenido);
    elemento.setAttribute("id",`id${contenido}`);*/

    // Especificar eventos
    elemento.addEventListener("click",function(){
         this.remove();
    });


    // Recuperar el padre
    let padre = document.getElementById("lista");

    // Añado al padre el hijo
    padre.appendChild(elemento);
}

function limpiarLista(){
    let elementos = document.querySelectorAll("ul#lista li");
    elementos.forEach(element=>{element.remove()});

}

function insertarCheckbox(){
    let cantidad = parseInt(document.getElementById('contenido')).value;
    let padre = document.getElementById('contenedor');
    for(let i = 1; i <= cantidad;i++) {
        let value = Math.random();
        let check = document.createElement("input");
        check.setAtributte("value", value);

        let span = document.createElement("span");
        span.innerHTML=value;
        
        

    }
}