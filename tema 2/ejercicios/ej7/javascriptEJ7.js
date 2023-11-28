let anio = parseInt(prompt("Escribe un año a valorar si es bisiesto o no"))


function esBisiesto(anyo){
    switch(anyo){
        case anyo%4==0:
            return 1;
        case (anyo.ToString().charAt((anyo.ToString.length)-1)=="0" && anyo.ToString().charAt((anyo.ToString.length)-2)=="0"):
            return 1;
        default:
            return 0;
    }
}

console.log(esBisiesto(anio))