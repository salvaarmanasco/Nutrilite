
//----------------------------------JQuery---------------------------------------------------//


// $("#botoncontacto").click(function() {
// 	alert("Gracias por enviarnos tu informacion");
// });

// //----------------------------------Ajax---------------------------------------------------//

// $("#botoncontacto").click(function(){ 
//   $.post( "json/datos.json", 
//   { 

//   },
//   function(data, status){

// 	alert("Resultado: " + data + "\n Estado: " + status);

//   });
// });


// function validaForm(){
//     // Campos de texto
//     if($("#nombre").val() == ""){
//         alert("El campo Nombre no puede estar vacío.");
//         $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
//         return false;
//     }
//     if($("#apellido").val() == ""){
//         alert("El campo Apellido no puede estar vacío.");
//         $("#apellido").focus();
//         return false;
//     }
//     if($("#email").val() == ""){
//         alert("El campo email no puede estar vacío.");
//         $("#email").focus();
//         return false;
//     }

//     return true; // Si todo está correcto
// }


// $(document).ready( function() {   // Esta parte del código se ejecutará automáticamente cuando la página esté lista.
//     $("#botoncontacto").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
//         if(validaForm()){                               // Primero validará el formulario.
//             $.post("json/datos.json",$("#formdata").serialize(),function(res){
//                 $("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
//                 if(res == 1){
//                     $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
//                 } else {
//                     $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
//                 }
//             });
//         }
//     });    
// });

function validaForm(){
    // Campos de texto
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").focus();
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").focus();
        return false;
    }

    // Checkbox
    if(!$("#mayor").is(":checked")){
        alert("Debe confirmar que es mayor de 18 años.");
        return false;
    }

    return true; // Si todo está correcto
}


$(document).ready( function() {   // Esta parte del código se ejecutará automáticamente cuando la página esté lista.
    $("#botonenviar").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
        if(validaForm()){                               // Primero validará el formulario.
            $.get("json/datos.json",$("#formdata").serialize(),function(res){
                $("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
                if(res == 1){
                    $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                } else {
                    $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                }
            });
        }
    });    
});


