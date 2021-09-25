function validarCampo(campo) {
    if (12 >= campo.length >= 6 && campo) {
        return campo.charAt(0) == campo.charAt(0).toUpperCase() 
            && campo.charAt(0) != campo.charAt(0).toLowerCase();
    }
    return false;
}

function validar_contrasena_usuario(nombreCompleto,campoContrasena) {
    let nombreValido = nombreCompleto ? validarCampo(nombreCompleto) : false;
    let contrasenaValida = campoContrasena ? validarCampo(campoContrasena) : false;
    return nombreValido && contrasenaValida;
}


function validar_correo(campoCorreo) {
    expresion = /\w+@\w+\.+[com]/; 
    if (expresion.test(campoCorreo)){
    //if (/^\w+([\.-]?\w+)*@\.(?:|com|es|co|org)+$/.test(campo.value).test(campoContrasena)){
         //alert("La dirección de email " + valor + " es correcta.");
        return true; 

    }else { 
        //alert("La dirección de email es incorrecta."); 
        return false; 

    } 
}

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;


