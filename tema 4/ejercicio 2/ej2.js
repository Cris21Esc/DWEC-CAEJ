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

}