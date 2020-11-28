// $("#boton-precios").on("click", getPrices);

// function getPrices() {
//   $.get('https://reqres.in/api/users', function(respuesta) {

//     var listaPrecios = $("#lista-precios");

//     $.each(respuesta.data, function(index, elemento) {
//       listaPrecios.append(
//           '<div>'
//         +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
//         +     '<img src=' + elemento.avatar + '></img>'
//         + '</div>'
//       );    
//     });

//   });
// }


$("#boton-usuarios").on("click", getUsers);

function getUsers() {
  $.get('https://reqres.in/api/users', function(respuesta) {

    var listaUsuarios = $("#lista-usuarios");

    $.each(respuesta.data, function(index, elemento) {
      listaUsuarios.append(
          '<div>'
        +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
        +     '<img src=' + elemento.avatar + '></img>'
        + '</div>'
      );    
    });

  });
}