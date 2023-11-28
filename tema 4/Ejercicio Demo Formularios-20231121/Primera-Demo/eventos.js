var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

let boton = document.getElementById("idEnviar")
boton.addEventListener("click", validarInformacion);

let formulario=document.getElementById("idFormulario")


function validarInformacion(e){    


     this.disabled = true;
   
    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){
        
        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false;
    }    
}

function validarAPIHTML(e){

    console.log("Pendiente de implementar")
    
    return true
}

function validarJS(e){
    
    return validarNombre() && validarEdad()
}

function validarEdad(){

    //console.log(formulario["idEdad"])
    console.log("Pendiente de programar, validar Edad")
    return true
}

function validarNombre(){

    console.log("Pendiente de programar, validar nombre")
    return true
}
