calcularValorDescuento=function(monto,porcentajeDescuento,subtotal){
    return (monto * porcentajeDescuento )/100;
}
calcularIVA=function(monto){
    return (monto*12)/100;
}
calcularSubTotal=function(precio,cantidad){
    return precio*cantidad;
}
calcularTotal=function(subtotal,descuento,iva){
    return subtotal-descuento+iva;
}
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let valorDescuento
    if(cantidad<3){
        valorDescuento=0;
    }else if(cantidad>=3 && cantidad <=5){
        valorDescuento=0.03;
    }else if(cantidad>=6 && cantidad <=11){
        valorDescuento=0.04;
    }else{
        valorDescuento=0.05
    }
    return subtotal*valorDescuento;

}

