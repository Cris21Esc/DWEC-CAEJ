let formulario = document.getElementById("idFormulario");
formulario["idEnviar"].addEventListener("click", validarInformacion);

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
{
    function validarAPIHTML(e){
        return (validarNombreHTML() && validarApellidosHTML() && validarEdadHTML());
    }
    
    
    function validarNombreHTML(){
        let inputNombre = formulario["idNombre"];
        let zonaError = document.getElementById('idNombreError');
        if(inputNombre.validity.valueMissing){
    
            errorText = "No puedes dejar el campo en blanco";
            inputNombre.focus();
            inputNombre.setCustomValidity(errorText);
            zonaError.innerHTML = inputNombre.validationMessage;
            return false;
    
        }else if(inputNombre.validity.tooShort){
    
            errorText = "Texto demasiado corto";
            inputNombre.focus();
            inputNombre.setCustomValidity(errorText);
            zonaError.innerHTML = inputNombre.validationMessage;
            return false;
        }
        else if(inputNombre.validity.tooLong){
    
            errorText = "Texto demasiado largo";
            inputNombre.focus();
            inputNombre.setCustomValidity(errorText);
            zonaError.innerHTML = inputNombre.validationMessage;
            return false;
        }
        return true;
    }
    
    function validarApellidosHTML(){
        let inputApellidos = formulario["idApellidos"];
        let zonaErrorApellidos = document.getElementById("idApellidosError");
        if(inputApellidos.validity.valueMissing){
    
            errorText = "No puedes dejar el campo en blanco";
            inputApellidos.focus();
            inputApellidos.setCustomValidity(errorText);
            zonaErrorApellidos.innerHTML = inputApellidos.validationMessage;
            return false;
            
        }else if(inputApellidos.validity.tooShort){
    
            errorText = "Texto demasiado corto";
            inputApellidos.focus();
            inputApellidos.setCustomValidity(errorText);
            zonaErrorApellidos.innerHTML = inputApellidos.validationMessage;
            return false;
            
        }else if(inputApellidos.validity.tooLong){
    
            errorText = "Texto demasiado largo";
            inputApellidos.focus();
            inputApellidos.setCustomValidity(errorText);
            zonaErrorApellidos.innerHTML = inputApellidos.validationMessage;
            return false;
            
        }
        return true;
     }
    
    function validarEdadHTML(){
        let inputEdad = formulario["idEdad"];
        let zonaErrorEdad = document.getElementById("idEdadError");
        if(inputEdad.validity.valueMissing){
    
            errorText = "No puedes dejar el campo en blanco";
            inputEdad.focus();
            inputEdad.setCustomValidity(errorText);
            zonaErrorEdad.innerHTML = inputEdad.validationMessage;
            return false;
    
        }else if(inputEdad.validity.rangeOverflow){
    
            errorText = "Valor demasiado alto";
            inputEdad.focus();
            inputEdad.setCustomValidity(errorText);
            zonaErrorEdad.innerHTML = inputEdad.validationMessage;
            return false;
    
        }else if(inputEdad.validity.rangeUnderflow){
    
            errorText = "Valor demasiado bajo";
            inputEdad.focus();
            inputEdad.setCustomValidity(errorText);
            zonaErrorEdad.innerHTML = inputEdad.validationMessage;
            return false;
    
        }
        return true;
    }
    
}
 

/* VALIDACION MEDIANTE JS */

function validarJS(e){

    if((validarEmail(formulario["email"].value) && validarFecha(formulario["fechaNacimiento"].value) && validarIntereses())){
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


function validarFecha(fecha){
    let fechaFormat = new Date(fecha);
    let fechaHoy = new Date();
    let fechaHoyStr = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth()+1}-${fechaHoy.getDate()}`;
    console.log(parseInt(fechaHoy.getDate()));
    console.log(parseInt(fechaFormat.getDate()));
    console.log(parseInt(fechaHoy.getDate()) < parseInt(fechaFormat.getDate()));
    let zonaError = document.getElementById("idFechaNacimientoError");

    if(fecha == ""){
        zonaError.innerHTML = "Debes introducir tu fecha de nacimiento";
        return false;
    }

    if(fecha.length > 10){
        zonaError.innerHTML = "La fecha debe estar en formato DD/MM/AAAA";
        return false;
    }

    if(fechaHoy.getDate() < fechaFormat.getDate() || (fechaHoy.getMonth()+1) < (fechaFormat.getMonth()+1) || fechaHoy.getFullYear() < fechaFormat.getFullYear()){
        zonaError.innerHTML = "La fecha introducida no puede ser superior a la fecha actual";
        return false;
    }

    if(fecha == fechaHoyStr){
        zonaError.innerHTML = "La fecha introducida no puede ser igual a la fecha actual";
        return false;
    }    
    return true;

}

function validarIntereses(){
    let interes = new Set(["deportes","musica","viajes","y-mas"]);
    let valorInteres = formulario.querySelectorAll("input[type='checkbox']");
    let span = document.getElementById("idInteresesError");
    let seleccionado = false;

    let error = "";

    valorInteres.forEach(check => {
        if(check.checked === true){
            seleccionado = true;
            if(interes.has(check.value) === false){
                error += `El valor: ${check.value} no existe`
            }
        }

    });

    if(error!==""){
        span.innerHTML=error;
        return false;
    }

    if(seleccionado === false){
        span.innerHTML="Debes seleccionar un interés...";
        return false;
    }

    return true;
}
