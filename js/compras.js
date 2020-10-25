class Producto {

	constructor(nombre, precio, descripcion, stock, cantidad_vendida){
		if (precio < 0) console.log("ERROR", "El precio no puede ser menor a 0")


		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.stock = stock;
		this.cantidad_vendida = cantidad_vendida;
	}
}

var producto1 = new Producto('doble X', 3700, 'multivitaminico natural', 5, 2) 