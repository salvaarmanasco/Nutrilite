



class Producto {
	constructor(nombre, precio, descripcion, stock, cantidad_vendida) {
		if (precio < 0 || stock < 0 || cantidad_vendida < 0) throw new Error("Ha habido un error en la creacion del producto")

		var _nombre = nombre;
		var _stock = stock;
		var _cantidad_vendida = cantidad_vendida;
		this.precio = precio;
		this.descripcion = descripcion;

		console.log('producto creado exitosamente');

		this.getName = function() {return _nombre}
		this.setName = function(nuevoNombre) {
			if(nuevoNombre === '') throw new Error("Debes insertar un nombre")
			_nombre = nuevoNombre
		}
		this.getStock = function() {return _stock}
		this.setStock = function(nuevoStock) {
			if(nuevoStock < 0) throw new Error("El stock no puede ser negativo")
			_stock = nuevoStock
		} 
		this.getCantidadVendida = function() {return _cantidad_vendida}
		this.compraDeProducto = function(cantidad) {
			if(cantidad < 1) throw new Error("No podes comprar menos de 1 producto");
			_stock = _stock - cantidad;
			_cantidad_vendida = _cantidad_vendida + cantidad;
		}
		this.totalRecaudado = function() {
		return this.precio * _cantidad_vendida;
		}
	}
}

var producto1 = new Producto('doble X', 3700, 'multivitaminico natural', 5, 2); 
var producto2 = new Producto('omega 3', 2000, 'aceite de pescado', 6, 5); 
var producto3 = new Producto('proteina vegetal', 1900, '100% vegetal', 3, 1); 

console.log('Stock antes de la compra ' + producto1.getStock());
console.log('Cantidades vendidas antes de la compra ' + producto1.getCantidadVendida());

producto1.compraDeProducto(2);
console.log("Compra de producto1");

console.log('Stock despues de la compra ' + producto1.getStock());
console.log('Cantidades vendidas despues de la compra ' + producto1.getCantidadVendida());

console.log('La cantidad de dinero facturado es de ' + producto1.totalRecaudado());

console.log(producto1._nombre);
console.log(producto1.getName());
producto1.setName('DOUBLE X');
console.log(producto1.getName());