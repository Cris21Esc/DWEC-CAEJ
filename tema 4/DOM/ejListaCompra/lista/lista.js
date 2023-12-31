let campo=document.getElementById("articulo")
let boton = document.getElementById("idAnadir");
boton.addEventListener("click",anadirElemento);

campo.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        boton.click();
    }
});

let elementos=[];

let ultimoElemento;

let repetido = false;

guardarElementosHtml();

function anadirElemento(){

    let input = document.getElementById("articulo");

    ultimoElemento = input.value;

    if(!elementos.includes(input.value)){
        elementos.push(input.value)

        Swal.fire(
            'elemento insertado',
            'Acepta para continuar',
            'success'
          );
          repetido = false;
    }
    else{
        //alert("El elemento esta repetido");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El elemento existe!',
            footer: '<a href="">¿Volver a intentarlo?</a>'
          });
          repetido = true;
    }


    // Borrar elementos de la lista
    borrarLista()

    //Añadir lista completa
    dibujarLista()
}

function guardarElementosHtml(){

    let li = document.querySelectorAll("#lista li");

    li.forEach(elemento => {
        elementos.push(elemento.innerHTML);
    })
}

function borrarLista(){
    
    let hijos = document.querySelectorAll("#lista li");
    hijos.forEach(elemento =>
        elemento.remove());

    /*let lista = document.getElementById("lista");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
        elementos.length = 0;
    }*/
    

}
function dibujarLista(){

    elementos.sort();
    let padre = document.getElementById("lista");
    elementos.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        //añadimos el evento a los li
        li.addEventListener("dblclick",eliminarLi);

        //añadir clase verde si es ultimo elemento
        if(element === ultimoElemento && repetido=== false){
            li.classList.add("rojo");
        }

        padre.appendChild(li);
    });
}



function eliminarLi(){

    let valor=this.innerHTML;
    

    elementos = elementos.filter(elemento => elemento !== valor);   
    
    this.remove();
}

let boton2 = document.getElementById("idLimpiar");
boton2.addEventListener("click",limpiar)
function limpiar(){ 
    document.getElementById("articulo").value = "";
    elementos = [];
    borrarLista();

}
