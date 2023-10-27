let boton = document.getElementById("boton")

boton.addEventListener("click",cambiarParrafos)

function cambiarParrafos(){
    
function existe(nres,b){
    nres = nres.toLowerCase();
    b = b.toLowerCase();
    return nres.includes(b)
}
// Creación de variables respuesta de usuario

    let us1 = document.getElementById("deporte").value;
    //console.log(us1);
    let us2 = document.getElementById("serie").value;
    //console.log(us2);
    let us3 = document.getElementById("pelicula").value;
    //console.log(us3);

// Creación y asignación de valores

    let res1 = document.getElementById("res1");
    let res2 = document.getElementById("res2");
    let res3 = document.getElementById("res3");

    //console.log(res1.innerHTML == "");
        if(res1.innerHTML != "" && res2.innerHTML != "" && res3.innerHTML != null){
            //console.log("He entrado aquí despues de la primera vez")
            if(!existe(res1.innerHTML,us1)){
                res1.innerHTML += ` ${us1}`;
            }else{
                console.log("No se pudo introducir el deporte. Valor repetido");
            }
            if(!existe(res2.innerHTML,us2)){
                res2.innerHTML += " " + us2;
            }else{
                console.log("No se pudo introducir la serie. Valor repetido");
            }
            if(!existe(res3.innerHTML,us3)){
                res3.innerHTML += " " + us3;
            }else{
                console.log("No se pudo introducir la pelicula. Valor repetido");
            }                                    
        }else{
            //console.log("He entrado aqui la primera vez")
            res1.innerHTML += us1;
            res2.innerHTML += us2;
            res3.innerHTML += us3;
        }          
}

