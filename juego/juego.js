let puntosUsuario=0;
let puntosComputador=0;


jugar=function(seleccionado){
    let elemento=generarElemento();
    let seleccionComputadora=generarRuta(elemento);
    let ganador=determinarGanador(seleccionado,elemento);
    if(ganador==0){
        mostrarTexto("ganador","EMPATE");
        mostrarImagen("seleccionComputadora",seleccionComputadora);
    }else if(ganador==1){
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("ganador","GANASTE");
        mostrarImagen("seleccionComputadora",seleccionComputadora);
        mostrarTexto("puntosUsuario",puntosUsuario);
    }else{
        puntosComputador=puntosComputador+1
        mostrarTexto("ganador","PERDISTE");
        mostrarImagen("seleccionComputadora",seleccionComputadora);
        mostrarTexto("puntosComputador",puntosComputador);
        
    }
    if(puntosUsuario==5){
        mostrarTexto("ganador","GANADO EL JUEGO");
    }else if(puntosComputador==5){
        mostrarTexto("ganador","COMPUTADOR A VENCIDO");
    }
}
limpiar=function(){
    mostrarTexto("ganador","---");
    mostrarTexto("puntosComputador","");
    mostrarTexto("puntosUsuario","");
    mostrarImagen("seleccionComputadora","");
    puntosComputador=0;
    puntosUsuario=0;
}