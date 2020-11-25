
//----------------------------------JQuery---------------------------------------------------//


$("#botoncontacto").click(function() {
	alert("Gracias por enviarnos tu informacion");
});

//----------------------------------Ajax---------------------------------------------------//

$("#botoncontacto").click(function(){ // Asociamos la llamada AJAX a un click en un boton
  $.post( "json/datos.json", //nombre del archivo en el servidor que procesa la llamada
  { //array con parámetros que se envían en la llamada
    nombre: "Juan Perez", 
    ciudad: "Buenos Aires"
  },
  function(data, status){
//función que se ejecuta cuando la llamada regresa del servidor
alert("Resultado: " + data + "\n Estado: " + status);
// se reciben dos parámetros, el primero es la información devuelta del servidor (podría ser un JSON), y el segundo es el estado de la operación: success o error
  });
});
