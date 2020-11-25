
//----------------------------------JQuery---------------------------------------------------//


$("#botoncontacto").click(function() {
	alert("Gracias por enviarnos tu informacion");
});

//----------------------------------Ajax---------------------------------------------------//

$("#botoncontacto").click(function(){ 
  $.post( "json/datos.json", 
  { 
   nombre:
   apellido:
   email:
   comentario:
  },
  function(data, status){

	alert("Resultado: " + data + "\n Estado: " + status);

  });
});
