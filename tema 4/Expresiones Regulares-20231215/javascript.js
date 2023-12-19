// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del evento (enviar el formulario)
    validar();
}, false);

let formulario = document.forms["idFormulario"];

function validar(){
    let r;
    let texto = formulario["texto"].value;
    let valorExp = formulario["expresiones"].value;
    console.log(valorExp);
    let error = document.getElementById("idTextoError");
    switch(valorExp){
        case "apartado1":
            r = /^a/i
            if(r.test(texto)){
                error.innerHTML = "Valido\n";
            }else{
                error.innerHTML = "Invalido";
            }
            break;
        case "apartado2":
            r = /a$/i
            break;
        case "apartado3":
            r = /^a/i
            break;
        case "apartado4":
            r = /^a/i
            break;
        case "apartado5":
            r = /^a/i
            break;            
        case "apartado6":
            r = /^a/i
            break;
        case "apartado7":
            r = /^a/i
            break;
        case "apartado8":
            r = /^a/i
            break;
        case "apartado9":
            r = /^a/i
            break;
        case "apartado10":
            r = /^a/i
            break;
        case "apartado11":
            r = /^a/i
            break;
        case "apartado12":
            r = /^a/i
            break;
        case "apartado13":
            r = /^a/i
            break;
        case "apartado14":
            r = /^a/i
            break;
        case "apartado15":
            r = /^a/i
            break;
        case "apartado16":
            r = /^a/i
            break;
    }

}