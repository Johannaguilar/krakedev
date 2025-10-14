
validarCedula=function(cedula){
    let erroresCedula=false;

    let dijito;
    for(i=0;i<cedula.length;i++){
        dijito=cedula.charAt(i);
        if(esDijito(dijito)==false){
            erroresCedula=true;
        }
    }
    if(erroresCedula==true){
        mostrarTexto("lblErrorCedula","DEBEN SER 10 DIJITOS");
    }
    if(erroresCedula==false){
        mostrarTexto("lblErrorCedula","");
    }
    if(cedula.length<10||cedula.length>10){
        erroresCedula=true;
    }//
    if(cedula==""){
        erroresCedula=true;
        mostrarTexto("lblErrorCedula","DEBEN SER 10 DIJITOS");
    }
    if(erroresCedula==true){
        mostrarTexto("lblErrorCedula","DEBEN SER 10 DIJITOS");
    }
    if(erroresCedula==false){
        mostrarTexto("lblErrorCedula","");
    }
    
    
    return erroresCedula;

}
validarNombre=function(nombre){
    let erroresNombre=false;
    let caracter;
    for(i=0;i<nombre.length;i++){
        caracter=nombre.charAt(i);
        if(esMayuscula(caracter)==false){
            erroresNombre=true;
        }
    }
    if(nombre.length<3){
        erroresNombre=true;
    }
    if(nombre==""){
        erroresNombre=true;
        mostrarTexto("lblErrorCedula","DEBEN SER 10 DIJITOS");
    }
    if(erroresNombre==true){
        mostrarTexto("lblErrorNombre","ALMENOS 3 CARACTERES Y TODAS MAYUSCULAS");
    }
    if(erroresNombre==false){
        mostrarTexto("lblErrorNombre","");
    }
    return erroresNombre

}
validarApellido=function(apellido){
    let erroresApellido=false;
    let caracter;
    for(i=0;i<apellido.length;i++){
        caracter=apellido.charAt(i);
        if(esMayuscula(caracter)==false){
            erroresApellido=true;
        }
    }
    if(apellido.length<3){
        erroresApellido=true;
    }
    if(apellido==""){
        erroresApellido=true;
        mostrarTexto("lblErrorCedula","DEBEN SER 10 DIJITOS");
    }
    if(erroresApellido==true){
        mostrarTexto("lblErrorApellido","ALMENOS 3 CARACTERES Y TODAS MAYUSCULAS");
    }
    if(erroresApellido==false){
        mostrarTexto("lblErrorApellido","");
        
    }
    return erroresApellido;

}
validarSueldo=function(sueldo){
    let erroresSueldo=false;
    if(isNaN(sueldo)){
        erroresSueldo=true;
    }
    if(sueldo<400||sueldo>5000){
        erroresSueldo=true;
    }
    if(erroresSueldo==true){
        mostrarTexto("lblErrorSueldo","DEBE SER UN NUMERO ENTRE 400 Y 5000");
    }
    if(erroresSueldo==false){
        mostrarTexto("lblErrorSueldo","");
    }
    return erroresSueldo;

    
}