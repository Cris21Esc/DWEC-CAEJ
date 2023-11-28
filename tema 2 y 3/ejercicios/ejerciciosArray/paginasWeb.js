
 /*EJ1*/ 
/*let saludar =()=>{alert("Hola, te estoy vigilando")};
let idInterv=setInterval(saludar,7000);/

/*EJ2*/
/*let cuenta =10.00;
let descontar=()=>{
    if(cuenta>=0){
        console.log(cuenta.toFixed(2));
        cuenta-=0.01;
    }
    else{
        alert("Te ha llegado la hora");
    }
}
let idTimeout=setInterval(descontar,10);*/

/*EJ3*/
/*let fecha =()=>{
    let fechahoy = new Date();
    console.log(`${fechahoy.getHours()}:${fechahoy.getMinutes()}:${fechahoy.getSeconds()}`);
}
let mostrar = setInterval(fecha,1000);*/

/*EJ4*/

/*let fecha =()=>{
    let fecha2 = new Date('2023/09/30');
    let fecha1 = new Date()
    
    let resta = fecha2.getTime() - fecha1.getTime()
    console.log(`Dias: ${Math.floor(resta/(1000*60*60*24))}, Horas: ${Math.floor(resta/(1000*60*60))}, Minutos: ${Math.floor(resta/(1000*60))}, Segundos: ${Math.floor(resta/(1000))}`)
}
let mostrar = setInterval(fecha,1000);*/

/*EJ5*/
/*let socios = [];
do{
    socios=prompt("Especifica los socios").split(",");

}while(socios.length<3);

console.log(`numero de socios: ${socios.length}`);

console.log(`socios por orden: ${socios.sort().join("<-*->")}`);

let JDH =()=>{
    socios.pop();
    console.log(`socios por orden: ${socios.sort().join("<-*->")}`);
}
while(socios.length>=0){let mostrar = setInterval(JDH,1000);}*/

/*Ejercicio 4.2*/
/*
let numAlum = parseInt(prompt("¿cuantos alumnos vas a adjuntar?"));
let clase =[];
let media = 0.0;
function Alumno(nombre,nota){
    this.nombre = nombre;
    this.nota = nota;
}
for(let i = 0; i<numAlum;i++){
    let nombre = prompt("Dime el nombre del alumno");
    let nota = parseFloat(prompt("Dime la nota del alumno"));
    let nuevoAlumno = new Alumno(nombre, nota);
    clase.push(nuevoAlumno);
    media += nuevoAlumno.nota;
}

clase.forEach(alumno => {
    console.table(alumno)
});
console.log(`La media es ${media/parseFloat(clase.length)}`)
*/
/*Ejercicio 4.3*/

let alumnos = new Map();
let numNombres = parseInt(prompt("¿Cuantas personas vas a añadir?"));
let media = 0;
function entradaAlumnos(){
    for(let i = 0; i<numNombres;i++){    
    let nombre = prompt(`Escribe el nombre de la persona número ${i+1} a añadir"`);
    let años = parseInt(prompt(`Escribe los años de la persona número ${i+1}`));
    alumnos.set(nombre,años);
    }
    alumnos.forEach(años => {
        media += años;
    });
}
function mostrarAlumnos(){
    alumnos.forEach((años,nombre)=>{console.log(`El nombre es ${nombre} y su edad es ${años}`)});
}
function mostrarMedia(){
    console.log(`La media es ${(media/alumnos.size)}`)
}
function existeAlumno(){
    
    switch(alumnos.has(prompt("Escribe que alumno quieres buscar"))){
        case true: console.log("El alumno existe");
        break;
        case false: console.log("El alumno no existe");
        break;
    }
}
function borrarAlumno(){
    alumnos.delete(prompt("Escribe el alumno a borrar"));
    mostrarAlumnos();
}