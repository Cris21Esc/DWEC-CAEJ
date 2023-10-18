class Productos{
    constructor(nombre,categoria,unidades,precio){
        this._nombre = nombre;
        this._categoria = categoria;
        this._unidades = unidades;
        this._precio = precio;
        this._importe = 0;
    }
    
    calcularImporte(){
        this._importe = this._unidades * this._precio;
    }

    get getInfo(){
        this.calcularImporte();
        return `Nombre: ${this._nombre}, Unidades: ${this._unidades} x Precio: ${this._precio}€ = Importe: ${this._importe}` ;
    }
    valueOf(){
        return this._precio;
    }
    toString(){
        return `Nombre: ${this._nombre}, Unidades: ${this._unidades} x Precio: ${this._precio}€ = Importe: ${this._importe}` ;
    }
    static confirmacion(){
        alert("Funciona la confirmacion de Productos");
    }   
}

class Televisores extends Productos{
    constructor(nombre,categoria,unidades,precio,tamaño){
        super(nombre,categoria,unidades,precio);
        this._tamaño = tamaño;
    }
    get getInfo(){
        return `Nombre: ${this._nombre}, Tamaño: ${this._tamaño}m`;
    }
    toString(){
        return `${super.toString},Tamaño: ${this._tamaño}`;
    }
    valueOf(){
        return this._precio;
    }
    static confirmacion(){
        alert("Funciona la confirmacion de Televisores");
    }

}

class arrayProductos{
    constructor(){
        this._array = [];
    }
    añadir(producto){
        this._array.push(producto);
    }
    toString(){
        res = "";
        for(let i = 0; i<this._array.length;i++){
            res += this._array[i] + " ";
        }
        return res;
    }
}