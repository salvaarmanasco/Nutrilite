
$(".boton-precios").on("click", getPrices);

function getPrices() {
  $.ajax({
    url: 'json/productos.json',
    success: function(respuesta) {

      var listaPrecios = $("#lista-precios");
      $.each(respuesta.data, function(index, elemento) {
        listaPrecios.append(
            '<div>'
          +     '<p>' + elemento.nombre + '</p>'
          +     '<p>' + elemento.precio_al_contado + '</p>'
          +     '<p>' + elemento.precio_x3_unidades + '</p>'
          +     '<p>' + elemento.precio_dolares_unidad + '</p>'
          +     '<img src=' + elemento.avatar + '></img>'
          + '</div>',
            '<div>'
        );    
      });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}
