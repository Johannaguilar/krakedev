jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblNumero","("+aleatorio+")"+" "+"es mayor a 3 GANASTE!!");
    }else{
        cambiarTexto("lblNumero","("+aleatorio+")"+"es menor a 3 PERDISTE:c");
    }
}
lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6;
    console.log(numeroMultiplicado);
    let numeroEntero=parseInt(numeroMultiplicado);
    console.log("-------->"+numeroEntero);
    let valorDado=numeroEntero+1;
    console.log("----------->"+valorDado);
    return valorDado
}
