var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    //Acceder Formulario
    formulario = document.getElementById("idFormulario");

    //Input Nombre
    texto = formulario["texto"].value;
    console.log(`Campo texto: %c${texto}`,color_css);

    //Input Contraseña
    contra = formulario["contra"].value;
    console.log(`Campo contra: %c${contra}`,color_css);

    //Input numero
    numero = formulario["numero"].value;
    console.log(`Campo numero: %c${numero}`,color_css);

    //Input color
    color = formulario["color"].value;
    console.log(`Campo numero: %c${color}`,color_css);

    //Input fecha
    fecha = formulario["fecha"].value;
    console.log(`Campo numero: %c${fecha}`,color_css);
    
    //Input radio

    let radios = document.getElementsByName("radio");
    let radiosA = document.querySelectorAll("input[name='radio']");
    let radiosD = formulario["radio"];

    radiosA.forEach(elemento =>{
        if(elemento.checked){

        }

    });

    //Input select
    let lista = formulario["idLista"];
    let idSeleccionado = lista.selectedIndex;
    let opcionSeleccionado = lista.options[idSeleccionado];

    console.log(`Campo seleccionado: %c${opcionSeleccionado.innerHTML}/${opcionSeleccionado.value}`,color_css);
    console.log(`Campo Select: %c${lista.value}`,color_css);

    //Input Datalist

    let inputLista = formulario["peli-preferida"];
    console.log(`Campo Datalist: %c${inputLista.value}`,color_css);

    /*
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Contenido: `);
    //console.log(`Usando Event : %c${e.target.value}`,color_css);*/
    
    
    e.preventDefault();
}


