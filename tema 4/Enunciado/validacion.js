var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

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

function validarAPIHTML(e){
    console.log("Pendiente de implementar");
    return true;
}

function validarJS(e){

    let formulario = document.getElementById("idFormulario");

    if((validarNombre(formulario["nombre"].value) && validarEdad(formulario["edad"].value))){
        console.log("Validado correctamente");
        return true;
    }else{
        console.log("Validación incorrecta");
        return false;
    }

}

function validarNombre(nombre){
    let zonaError = document.getElementById("idErrorNombre");
    
    if(nombre == ""){
        zonaError.innerHTML = "Introduce un valor";
        return false;
    }

    if(nombre.length > 5 && nombre.length < 30){
        return true;
    }else{
        zonaError.innerHTML = "El nombre debe contener entre 5 y 30 caracteres";
        return false;
    }
    
}

function validarEdad(edad){
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