    let errores="";

ejecutarValidacion=function(){
        let password=recuperarTexto("txtCadena");
        let validacion=validarPassword(password);
        if(validacion==""){
            mostrarTexto("contraseña","PASSWORD CORRECTO");
        }else{
            mostrarTexto("contraseña",errores);
        }
    }


validarPassword=function(password){
    let hayErrorClave=false;
    let hayErrorMayuscula=false;
    let hayErrorDijito=false;
    let hayErrorSimbolos=false;
    let clave=validarClave(password);
    let mayuscula=contieneMayusculas(password);
    let dijito=contieneDijito(password);
    let caracterEspecial=contieneCaracterEspecial(password);
    for(errores;errores!="";errores=""){

    }
    if(clave==false){
    errores+="LA CLAVE DEBE TENER 8 A 16 CARACTERES/";
    hayErrorClave=true;
    }else{
        errores+="";
    hayErrorClave=false;
    }
    if(mayuscula==false){
        errores+="LA ClAVE DEBE TENER AL MENOS UNA MAYUSCULA/";
    hayErrorMayuscula=true;
    }else{
        errores+="";
    hayErrorMayuscula=false;
    }
    if(dijito==false){
        errores+="LA CLAVE DEBE CONTENER ALMENOS UN DIJITO/";
    hayErrorDijito=true;
    }else{
        errores+="";
    hayErrorDijito=false;
    }
    if(caracterEspecial==false){
        errores+="LA CLAVE DEBE CONTENER ALMENOS UNO DE ESTOS SIMBOLOS, (*), (-), (_)/";
    hayErrorSimbolos=true;
    }else{
        errores+="";
    hayErrorSimbolos=false;
    }
    
    if(hayErrorClave==true||hayErrorDijito==true||hayErrorMayuscula==true||hayErrorSimbolos==true){
        return errores;
    }else{
        return "";
    }

}
contieneMayusculas=function(cadena){
    let letra;
    let hayMayusculas=false;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i)
        if(esMayuscula(letra)==true){
            hayMayusculas=true
        }

    }
    if(hayMayusculas==false){
        return hayMayusculas;
    }else{
        return hayMayusculas;
    }

}
contieneDijito=function(cadena){
    let dijito;
    let hayDijito=false;
    for(let i=0;i<cadena.length;i++){
        dijito=cadena.charAt(i)
        if(esDijito(dijito)==true){
            hayDijito=true
        }

    }
    if(hayDijito==false){
        return hayDijito;
    }else{
        return hayDijito;
    }
}
contieneCaracterEspecial=function(cadena){
    let esCaracterEspecial;
    let hayCaracterEspecial=false;
    for(let i=0;i<cadena.length;i++){
        esCaracterEspecial=cadena.charAt(i)
        if(caracterEspecial(esCaracterEspecial)==true){
            hayCaracterEspecial=true
        }

    }
    if(hayCaracterEspecial==false){
        return hayCaracterEspecial;
    }else{
        return hayCaracterEspecial;
    }
}