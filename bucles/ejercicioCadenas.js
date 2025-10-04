ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadena=function(cadena){
    //0123
    //Juan
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter"+caracter+"posicion"+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter"+caracter+"posicion"+posicion);
    }
}
ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    cadenaInvertida(mensaje);
}
cadenaInvertida=function(cadena){
    let caracter;
    let cadenaInvertida="";
    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        cadenaInvertida+=caracter;
        console.log("caracter"+caracter+"posicion"+posicion);
        console.log(cadenaInvertida);
    }
    mostrarTexto("cadenaInvertida",cadenaInvertida);
}
buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena,length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}
contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i)
        if(esMayuscula(letra)){
            
        }

    }
    
}