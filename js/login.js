
var productos = [];
function hacerGet(){
	$.get("json/productos.json",
	function(data, status){
		console.log(data);
		// alert("Resultado: " + data + "\n Estado: " + status);
		productos = data;
		console.log(productos);
	});
}