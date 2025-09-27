productoValido=function(campo,idComponenteError){
    let hayErrores=false;
    let numeroCaracteres=campo.length;
    if(numeroCaracteres>10){
        mostrarTexto(idComponenteError,"DEBE SER MENOR A 10");
        hayErrores=true;
    }
    if(numeroCaracteres==0){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
        hayErrores=true;
    }else if(!isNaN(campo)==true){
        mostrarTexto(idComponenteError,"DEBE INGRESAR EL NOMBRE DE UN PRODUCTO");
        hayErrores=true;
    

    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError,"");
    }
    
    return !hayErrores;
}
esCantidadValida=function(campo,idComponenteError){
    let hayErrores=false;
    let esEntero=Number.isInteger(campo);
    if(esEntero==false){
        mostrarTexto(idComponenteError,"DEBE SER UN NUMERO ENTERO");
        hayErrores=true;
    }
    if(campo>100){
        mostrarTexto(idComponenteError,"DEBE SER UN NUMERO ENTRE 1 Y 100");
        hayErrores=true;
    }
    if(isNaN(campo)){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
        hayErrores=true;
    }
    
    
    return !hayErrores;
}
esPrecioValido=function(campo,idComponenteError){
    let hayErrores=false;
    if(campo<=0 || campo>50){
        mostrarTexto(idComponenteError,"DEBE SER UN NUMERO ENTRE 1 Y 50");
        hayErrores=true;
    }
    if(isNaN(campo)){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
        hayErrores=true;
    }
    return !hayErrores;
}