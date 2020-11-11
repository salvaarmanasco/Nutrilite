
class Producto {
	constructor(nombre, precio, descripcion, stock, cantidadVendida) {
		if (precio < 0 || stock < 0 || cantidadVendida < 0) throw new Error("Ha habido un error en la creacion del producto")

		var _nombre = nombre;
		var _stock = stock;
		this.cantidadVendida = cantidadVendida;
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
		this.compraDeProducto = function(cantidad) {
			if(cantidad < 1) throw new Error("No podes comprar menos de 1 producto");
			_stock = _stock - cantidad;
			this.cantidadVendida = cantidadVendida + cantidad;
		}
	this.totalRecaudado = function() {
		return this.precio * this.cantidadVendida;
		}
	}
}
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var producto1 = new Producto('doble X', 3700, 'multivitaminico natural', 5, 2); 
var producto2 = new Producto('omega 3', 2000, 'aceite de pescado', 6, 5); 
var producto3 = new Producto('proteina vegetal', 1900, '100% vegetal', 3, 1); 

console.log('Stock antes de la compra ' + producto1.getStock());
console.log('Cantidades vendidas antes de la compra ' + producto1.cantidadVendida);


producto1.compraDeProducto(5);
console.log("Compra de producto1");

console.log('Stock despues de la compra ' + producto1.getStock());
console.log('Cantidades vendidas despues de la compra ' + producto1.cantidadVendida);

console.log('La cantidad de dinero facturado es de ' + producto1.totalRecaudado());



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(producto1._nombre);
console.log(producto1.getName());
producto1.setName('DOUBLE X');
console.log(producto1.getName());

var productosDisponiles = ["DobleX", "Proteina Vegetal", "Omega 3"];
console.log(productosDisponiles);

var productosNoDisponibles = ["CalMag D", "C Plus", "Lecitina E"];
console.log(productosNoDisponibles);

var todosLosProductos = productosDisponiles.concat(productosNoDisponibles);
console.log(todosLosProductos);

var cantidadDeProductos = console.log(todosLosProductos.length);

var nuevoProductoDisponible = productosDisponiles.push("Daily Plus");
console.log(productosDisponiles);

//---------------------------------------DOM---------------------------------------------------//

var compra = document.getElementById('compra');

var inputNombreTarjeta = document.createElement('input');
var inputNumeroTarjeta = document.createElement('input');
var inputVencimientoTarjeta = document.createElement('input');
var inputCodSeguridadTarjeta = document.createElement('input');
var inputDocumento = document.createElement('input');

inputVencimientoTarjeta.id = 'vencimientoTarjeta';
inputVencimientoTarjeta.placeholder = 'Ingrese el vencimiento de la tarjeta';

inputCodSeguridadTarjeta.id = 'codigoTarjeta';
inputCodSeguridadTarjeta.placeholder = 'Ingrese el codigo de la tarjeta';

inputDocumento.id = 'documento';
inputDocumento.placeholder = 'Ingrese su numero de DNI';

compra.appendChild(inputVencimientoTarjeta);
compra.appendChild(inputCodSeguridadTarjeta);
compra.appendChild(inputDocumento);


//----------------------------------Eventos---------------------------------------------------//

window.onload = () => {
	document.getElementById('forms').addEventListener('submit', alertTarjeta);
}


function alertTarjeta(evento){
	numerotarjeta=$('#numerotarjeta').val();
	nombretarjeta=$('#nombretarjeta').val();

	if(numerotarjeta.length == 8 && nombretarjeta.length > 15) {
		alert("El nombre no puede tener mas de 15 letras");
	}else if(numerotarjeta.length > 8 && nombretarjeta.length > 15) {
		alert("El nombre no puede tener mas de 15 letras");
		alert("No puede ingresar mas de 8 digitos");
	}else if(numerotarjeta.length < 8 && nombretarjeta.length > 15) {
		alert("El nombre no puede tener mas de 15 letras");
		alert("No puede ingresar menos de 8 digitos");
	} else if (numerotarjeta.length > 8) {
		alert("No puede ingresar mas de 8 digitos");
	}else if (numerotarjeta.length < 8){
		alert("No puede ingresar menos de 8 digitos");
	}else if (nombretarjeta.length > 15) {
		alert("El nombre no puede tener mas de 15 letras");
	} else {
		return true;
	}
}