var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

let formulario = document.forms["idFormulario"];

document.getElementById("idEnviar").addEventListener ("click", validarInformacion);

function validarInformacion(e){

    this.disabled = true;
    
    //Limpiar span error
    let spanList = document.querySelectorAll("span");
    spanList.forEach(element => {
        element.innerHTML = "";
    });


    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){
        
       return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false;
    }
}

/* VALIDACION MEDIANTE API */
 
function validarAPIHTML(e){
    return validarNombreHTML();
}


function validarNombreHTML(){
    let inputNombre = formulario.elements["nombre"];
    let zonaError = document.getElementById("idErrorNombre");
    if(inputNombre.validity.valueMissing){
        zonaError.innerHTML = "No puedes dejar el campo en blanco";
    }
}


/* VALIDACION MEDIANTE JS*/

function validarJS(e){

    if(validarEmail(formulario["email"].value) /*&& validarInteres(formulario["edad"].value)*/){
        console.log("Validado correctamente");
        return true;
    }else{
        console.log("Validación incorrecta");
        return false;
    }

}

function validarEmail(email){
    let zonaError = document.getElementById("idEmailError");
    let regexp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(email == ""){
        zonaError.innerHTML = "Introduce un valor";
        return false;
    }

    if(!regexp.test(email)){
        zonaError.innerHTML = "El email debe tener la estructura de 'valor@dominio', seguido de '.com' o '.es' como corresponda";
        return false;
    }
    return true;
    
}

function validarInteres(edad){
    let zonaError = document.getElementById("idErrorEdad");

    if(isNaN(parseInt(edad))){
        zonaError.innerHTML = "Introduce un valor";
        return false;
    }

    if(edad >= 18 && edad <= 99){
        return true;
    }else{
        zonaError.innerHTML = "Especifica un valor comprendido entre 18 y 99";
        return false;
    }
}