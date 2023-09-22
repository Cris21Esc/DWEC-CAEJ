let n = parseInt(prompt("Escribe el numero maximo de *"));
res = "";
for(i = 1;i<=n;i++){
    for(j =0;j<i;j++)
        res+="*"
res+="\n"
}
console.log(res)