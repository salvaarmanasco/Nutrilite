



class Producto {
	constructor(nombre, precio, descripcion, stock, cantidad_vendida) {
		if (precio < 0 || stock < 0 || cantidad_vendida < 0) throw new Error("Ha habido un error en la creacion del producto")

		var _nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.stock = stock;
		this.cantidad_vendida = cantidad_vendida;

		console.log("producto creado exitosamente");

		this.getName = function() {return _nombre}
		this.setName = function(nuevoNombre) {
			if(nuevoNombre === '') throw new Error("Debes insertar un nombre")
			_nombre = nuevoNombre
		}
	}
	compraDeProducto(cantidad) {
		if(cantidad < 1) throw new Error("No podes comprar menos de 1 producto");
		this.stock = this.stock - cantidad;
		this.cantidad_vendida = this.cantidad_vendida + cantidad;
	}
	totalRecaudado(){
		return this.precio * this.cantidad_vendida;
	}
}

var producto1 = new Producto('doble X', 3700, 'multivitaminico natural', 5, 2); 

console.log('Stock antes de la compra ' + producto1.stock);
console.log('Cantidades vendidas antes de la compra ' + producto1.cantidad_vendida);

producto1.compraDeProducto(2);
console.log("Compra de producto1");

console.log('Stock despues de la compra ' + producto1.stock);
console.log('Cantidades vendidas despues de la compra ' + producto1.cantidad_vendida);

console.log('La cantidad de dinero facturado es de ' + producto1.totalRecaudado());

console.log(producto1._nombre);
console.log(producto1.getName());
producto1.setName('omega 3');
console.log(producto1.getName());