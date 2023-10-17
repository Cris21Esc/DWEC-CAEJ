let valor1 = parseInt(prompt('Escribe tu sueldo'))
let valor2 = parseInt(prompt('Escribe tus años de antigüedad'))

const yo = new empleado(valor1,valor2)

function empleado(sueldo,año){
    this.sueldo_año = `${sueldo}
    ${año}`;
    this.valor = parseInt(calculo(sueldo,año));
}

function calculo(valor1,valor2){
    if(valor1 < 500 && valor2 >= 10)
        return (valor1*3)
    else if(valor1 < 500 && valor2 < 10)
    return (valor1*2)
    else if(valor1 >= 500)
    return valor1
}

console.table(yo)
/*console.log(`Tu nombre es ${nombre}, tu apellido es ${apellido}
             Los valores dados son ${valor1}, ${valor2}, ${valor3}
             -------------------------------------------------------
             El resultado de suma es ${suma}
             El resultado de multiplicar es ${multiplicacion}
             El resultado de dividir es ${division}
`)
alert(`Tu nombre es ${nombre}, tu apellido es ${apellido} y has escrito los siguientes valores: ${valor1}, ${valor2}, ${valor3}`)

*/