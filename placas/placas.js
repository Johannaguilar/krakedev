validarPlaca=function(){
    let valorCaja=recuperarTexto("placa");
    let erroresEstructura=validarEstructura(valorCaja);
    let Provincia=obtenerProvincia(valorCaja);
    let TipoVehiculo=obtenerTipoVehiculo(valorCaja);
    if(erroresEstructura==null){
        mostrarTexto("erroresValidacion","");
        mostrarTexto("provincia","");
        mostrarTexto("Vehiculo","");
        mostrarTexto("validarPlacaMensaje","ESTRUCTURA VALIDA");
        if(Provincia!=null){
            mostrarTexto("provincia",Provincia);

        }else{
            mostrarTexto("provincia","PROVINCIA INCORRECTA");
        }
    if(TipoVehiculo!=null){
        mostrarTexto("Vehiculo",TipoVehiculo);

    }else{
        mostrarTexto("Vehiculo","VEHICULO INCORRECTO");
    }
    }else{
        mostrarTexto("erroresValidacion",erroresEstructura);
        mostrarTexto("validarPlacaMensaje","ESTRUCTURA INCORRECTA");
        if(Provincia!=null){
            mostrarTexto("provincia",Provincia);

        }else{
            mostrarTexto("provincia","PROVINCIA INCORRECTA");
        }
        if(TipoVehiculo!=null){
            mostrarTexto("Vehiculo",TipoVehiculo);
        }else{
            mostrarTexto("Vehiculo","VEHICULO INCORRECTO");
        }
    }

}