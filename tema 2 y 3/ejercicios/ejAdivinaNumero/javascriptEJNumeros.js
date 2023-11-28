/**
 * 
 * @param {*} max 
 * @returns un valor aleatorio entre 0 y máximo
 */
let max = parseInt(prompt("Escribe hasta que numero vamos a adivinar"));
if(isNaN (max)===false){
    let jugar=true;
    let partidas=0;
    let historial=[];
    let aleatorio;
    let num;
    let getRandomInt = (n)=>{return Math.floor(Math.random()*n)}
    do{
        partidas++;
        if(partidas>1){
            max = parseInt(prompt("Escribe hasta que numero vamos a adivinar"));
            historial=[];
        }
        aleatorio = getRandomInt(max);
        num = prompt("Escribe tu valor");        
        while(aleatorio!=num && num != "cancelar"){
            switch(num>aleatorio){
                case true:
                    console.log(`tu numero es mayor al aleatorio`);
                    historial.push(num);
                    break;
                case false:
                    console.log(`tu numero es menor al aleatorio`);
                    historial.push(num);
                    break;
            }
            num=prompt("Adivina de nuevo")
        }
        console.log("Estos han sido tus intentos")
        console.table(historial)
        jugar=confirm("¿Quieres jugar de nuevo?")
    }while(jugar==true)
    if(num=="cancelar") console.log(`Has perdido. El numero era ${aleatorio}`);
    if(aleatorio===parseInt(num))console.log(`Has ganado. Total de partidas: ${partidas}`)
    
}else{
    alert("Fin del juego")
}

