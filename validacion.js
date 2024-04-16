// Función para validar el formulario
function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Verificar que los campos no estén vacíos
    if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Verificar formato del email
    var emailFormato = /\S+@\S+\.\S+/;
    if (!emailFormato.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true; // El formulario es válido
}