ana = {
    nombre: "Ana María",
    apellido: "Aguilera",
    edad: 40,
    hijos:1,
    cumplirAnios: function(incremento){
        if(!isNaN(incremento)){
            this.edad += incremento;
        }
    },
    nacimientoHijos: function(numHijos){
        if(!isNaN(numHijos)){
            this.hijos += numHijos;
        }
    }
}