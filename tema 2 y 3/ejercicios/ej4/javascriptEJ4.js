let num = parseInt(prompt("Escribe tu número"))

function calculo(n){
    let res = "";
    for(i=n;i>=1;i--){
        if(i%2!=0){
            res += `${i}`;
            if(i!=1)
            res+=", ";
        }
    }
    return res;
}

let tabla = [
    ["Entrada", num],
    ["Salida", calculo(num)]
];

console.table(tabla);
