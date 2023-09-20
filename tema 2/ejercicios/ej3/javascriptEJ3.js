let valor1 = prompt('Escribe tu sueldo')
let valor2 = prompt('Escribe tus años de antigüedad')

const yo = new empleado(valor1,valor2)

function empleado(sueldo_año, año){
    this.sueldo_año = `${sueldo}
    ${año}`;
    this.año = año;

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