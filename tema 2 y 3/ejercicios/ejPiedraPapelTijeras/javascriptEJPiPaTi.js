let jugados = 0;
let ganados = 0;
let perdidos = 0;
let resolveGame = (jugada,elige)=>{
    if (((jugada == "piedra") && (elige == "piedra"))|| ((jugada == "papel") && (elige == "papel")) || ((jugada == "tijera") && (elige == "tijera"))) {
        alert(jugada + "-" + elige + ": Empate");
    }
    else if (((jugada == "piedra") && (elige == "papel")) || ((jugada == "papel") && (elige == "tijera")) || ((jugada == "tijera") && (elige == "piedra")) ) {
        alert(jugada + "-" + elige + ": Gana PC");
        perdidos++;
    }
    else if (((jugada == "piedra") && (elige == "tijera")) || ((jugada == "papel") && (elige == "piedra")) ||((jugada == "tijera") && (elige == "papel"))) {
        alert(jugada + "-" + elige + ": Gana Jugador");
        ganados++;
    }
    jugados ++;
}
do {
    var player = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    var aleatorio = Math.floor((Math.random() * 3) + 1);
    var oppo = "";
    if (aleatorio == 1) {
        oppo = "piedra";
    }
    else if (aleatorio == 2) {
        oppo = "papel";
    }
    else {
        oppo = "tijera";
    }
    resolveGame(player,oppo);
} while (confirm("Jugar de nuevo"));
document.write(`Partidas jugadas: ${jugados}, Partidas ganadas: ${ganados}, Partidas perdidas: ${perdidos}, Partidas empatadas: ${jugados-ganados-perdidos}`);