let boton = document.getElementById("insertar");
boton.addEventListener("click",anadirElementos);

let elementos = [];

cargarHTML();

function anadirElementos(){
    let input = document.getElementById("articulo");

    elementos.push(input.value);

    // Borrar la lista
    borrarLista();

    // Dibujar la lista
    dibujarLista();
}

function cargarHTML(){
    let lista = document.getElementById("lista");
    lista.forEach(element => {
        elementos.push(element.value);
    });
    

}

function borrarLista(){
    alert("borro");
    let lista = document.getElementById("lista");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
        elementos.length = 0;
    }    
}

function dibujarLista(){
    alert("dibujo");
    elementos.sort();
    let padre = document.getElementById("lista");
    elementos.forEach(element =>{
        let li = document.createElement("li");
        li.innerHTML = element;
        padre.appendChild(li);
    })
}