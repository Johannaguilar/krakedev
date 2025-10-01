obtenerAleatorio=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*3;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero+1;
    console.log("----------->"+valorDado);
    return valorDado
}
generarElemento=function(){
    let aleatorio=obtenerAleatorio();
    if(aleatorio>=1 && aleatorio<=3){
        if(aleatorio==1){
            return "PIEDRA" ;
        }
        if(aleatorio==2){
            return "PAPEL" ;
        }
        if(aleatorio==3){
            return "TIJERA" ;
        }
        
    }else{
        return "ERROR";
    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }else if((eleccionJugador1=="PIEDRA"&&eleccionJugador2=="TIJERA")||
            (eleccionJugador1=="PAPEL"&&eleccionJugador2=="PIEDRA")||
            (eleccionJugador1=="TIJERA"&&eleccionJugador2=="PAPEL")){
        return 1;
    }else{
        return 2;
    }
    
}
generarRuta=function(nombre){
    if(nombre=="PIEDRA"){
        return "./img/piedra.png";

    }if(nombre=="PAPEL"){
        return "./img/papel.png";

    }if(nombre=="TIJERA"){
        return"./img/tijera.png";

    }
}
jugarPiedra=function(){
    return "PIEDRA"

}