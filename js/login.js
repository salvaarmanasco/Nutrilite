


$(document).ready(function(){
	$("#login").submit(function(){

		var datosFormulario=$(this).serialize();

		$.get("php/login.php", datosFormulario, procesarDatos);

		return false;

	});

	function procesarDatos(datos_devueltos) {
		if(datos_devueltos=="autorizado"){
			$("#contenidos_externos").html("<p> Usuario correcto. Bienvenido de nuevo! </p>");
		}else{
			$("#contenidos_externos").html("<p> Usuario invalido </p>");
		}
	}
});	