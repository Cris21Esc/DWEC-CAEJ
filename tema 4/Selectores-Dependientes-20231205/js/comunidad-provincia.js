let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["A Coruña","Lugo","Orense","Pontevedra"]]
]);

let formulario = document.getElementById("id_form");
let aut = formulario["autonomia"];
let prov = formulario["provincia"];
let el = document.createElement("option");
el.value = "";
el.innerHTML = "Selecciona un valor";
aut.appendChild(el);
provincias.forEach((valor,clave)=>{
    let el = document.createElement("option");
    el.value = clave;
    el.innerHTML = clave;
    aut.appendChild(el);
});
aut.addEventListener("click",()=>{
    if(aut.value != ""){
        formulario["submit"].disabled = false;
        prov.disabled = false;
        prov.innerHTML = "";    
        let p = provincias.get(aut.value);
        p.forEach(elem=>{
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerHTML = elem;
            prov.appendChild(opt);
        });
    }else{
        prov.disabled = true;
    }    
});  

