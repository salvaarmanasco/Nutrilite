
// class Producto {
// 	constructor(nombre, precio, descripcion, stock, cantidadVendida) {
// 		if (precio < 0 || stock < 0 || cantidadVendida < 0) throw new Error("Ha habido un error en la creacion del producto")

// 		var _nombre = nombre;
// 		var _stock = stock;
// 		this.cantidadVendida = cantidadVendida;
// 		this.precio = precio;
// 		this.descripcion = descripcion;

// 		console.log('producto creado exitosamente');

// 		this.getName = function() {return _nombre}
// 		this.setName = function(nuevoNombre) {
// 			if(nuevoNombre === '') throw new Error("Debes insertar un nombre")
// 			_nombre = nuevoNombre
// 		}
// 		this.getStock = function() {return _stock}
// 		this.setStock = function(nuevoStock) {
// 			if(nuevoStock < 0) throw new Error("El stock no puede ser negativo")
// 			_stock = nuevoStock
// 		} 
// 		this.compraDeProducto = function(cantidad) {
// 			if(cantidad < 1) throw new Error("No podes comprar menos de 1 producto");
// 			_stock = _stock - cantidad;
// 			this.cantidadVendida = cantidadVendida + cantidad;
// 		}
// 	this.totalRecaudado = function() {
// 		return this.precio * this.cantidadVendida;
// 		}
// 	}
// }
 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var producto1 = new Producto('doble X', 3700, 'multivitaminico natural', 5, 2); 
// var producto2 = new Producto('omega 3', 2000, 'aceite de pescado', 6, 5); 
// var producto3 = new Producto('proteina vegetal', 1900, '100% vegetal', 3, 1); 

// console.log('Stock antes de la compra ' + producto1.getStock());
// console.log('Cantidades vendidas antes de la compra ' + producto1.cantidadVendida);


// producto1.compraDeProducto(5);
// console.log("Compra de producto1");

// console.log('Stock despues de la compra ' + producto1.getStock());
// console.log('Cantidades vendidas despues de la compra ' + producto1.cantidadVendida);

// console.log('La cantidad de dinero facturado es de ' + producto1.totalRecaudado());



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(producto1._nombre);
// console.log(producto1.getName());
// producto1.setName('DOUBLE X');
// console.log(producto1.getName());

// var productosDisponiles = ["DobleX", "Proteina Vegetal", "Omega 3"];
// console.log(productosDisponiles);

// var productosNoDisponibles = ["CalMag D", "C Plus", "Lecitina E"];
// console.log(productosNoDisponibles);

// var todosLosProductos = productosDisponiles.concat(productosNoDisponibles);
// console.log(todosLosProductos);

// var cantidadDeProductos = console.log(todosLosProductos.length);

// var nuevoProductoDisponible = productosDisponiles.push("Daily Plus");
// console.log(productosDisponiles);

// //----------------------------------JQuery---------------------------------------------------//

// $("#numerotarjeta").change(function() {
// 	$ ("#numerotarjeta").css("border", "2px solid green");
// });

// $("#nombretarjeta").change(function() {
// 	$ ("#nombretarjeta").css("border", "2px solid green");
// });

// $("#vencimientotarjeta").change(function() {
// 	$ ("#vencimientotarjeta").css("border", "2px solid green");
// });

// $("#codigoseguridad").change(function() {
// 	$ ("#codigoseguridad").css("border", "2px solid green");
// });

// $("#documentoidentidad").change(function() {
// 	$ ("#documentoidentidad").css("border", "2px solid green");
// });

// $("#botoncompra").click(function() {

// 	numerotarjeta=$('#numerotarjeta').val();
// 	nombretarjeta=$('#nombretarjeta').val();

// 	if(numerotarjeta.length == 8 && nombretarjeta.length > 15) {
// 		alert("El nombre no puede tener mas de 15 letras");
// 	}else if(numerotarjeta.length > 8 && nombretarjeta.length > 15) {
// 		alert("El nombre no puede tener mas de 15 letras");
// 		alert("No puede ingresar mas de 8 digitos");
// 	}else if(numerotarjeta.length < 8 && nombretarjeta.length > 15) {
// 		alert("El nombre no puede tener mas de 15 letras");
// 		alert("No puede ingresar menos de 8 digitos");
// 	} else if (numerotarjeta.length > 8) {
// 		alert("No puede ingresar mas de 8 digitos");
// 	}else if (numerotarjeta.length < 8){
// 		alert("No puede ingresar menos de 8 digitos");
// 	}else if (nombretarjeta.length > 15) {
// 		alert("El nombre no puede tener mas de 15 letras");
// 	} else {
// 		alert("Gracias por tu compra!");
// 	}
// });





// Variables
let baseDeDatos = [
    {
        id: 1,
        nombre: 'DobleX',
        precio: 3900,
        imagen: "https://images.rappi.com/products/2090666822-1564076518073.png?d=136x136"
    },
    {
        id: 2,
        nombre: 'Omega 3',
        precio: 2200,
        imagen: "https://images.rappi.com/products/2090666816-1564076518006.png?d=200x200&e=webp"
    },
    {
        id: 3,
        nombre: 'Proteina Vegetal',
        precio: 2000,
        imagen: "https://images.rappi.com/products/2090666827-1564585043.png?d=136x136&e=webp"
    },
];

let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderItems() {
    for (let info of baseDeDatos) {
        // Estructura
        let miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info['nombre'];
        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        // Precio
        let miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = '$' + info['precio'];
        // Boton 
        let miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', anyadirCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        $items.appendChild(miNodo);
    }
}

function anyadirCarrito() {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(this.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Renderizamos el carrito 
    renderizarCarrito();

}

function renderizarCarrito() {
    // Vaciamos todo el html
    $carrito.textContent = '';
    // Quitamos los duplicados
    let carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach(function (item, indice) {
        // Obtenemos el item que necesitamos de la variable base de datos
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}`;
        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        $carrito.appendChild(miNodo);
    });
}

function borrarItemCarrito() {
    // Obtenemos el producto ID que hay en el boton pulsado
    let id = this.getAttribute('item');
    // Borramos todos los productos
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    for (let item of carrito) {
        // De cada elemento obtenemos su precio
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    // Renderizamos el precio en el HTML
    $total.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
$botonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderItems();
