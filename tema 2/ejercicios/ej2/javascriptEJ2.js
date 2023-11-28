let nombre = prompt('Ahora escribe tu nombre')
let apellido = prompt('Y ahora tu apellido')

let valor1 = prompt('Escribe un primer numero')
let valor2 = prompt('Escribe un segundo numero')
let valor3 = prompt('Escribe un tercer numero')

let suma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3)
let multiplicacion = valor1*valor2*valor3
let division = valor1/valor3



console.log(`Tu nombre es ${nombre}, tu apellido es ${apellido}
             Los valores dados son ${valor1}, ${valor2}, ${valor3}
             -------------------------------------------------------
             El resultado de suma es ${suma}
             El resultado de multiplicar es ${multiplicacion}
             El resultado de dividir es ${division}
`)
alert(`Tu nombre es ${nombre}, tu apellido es ${apellido} y has escrito los siguientes valores: ${valor1}, ${valor2}, ${valor3} \n`)
