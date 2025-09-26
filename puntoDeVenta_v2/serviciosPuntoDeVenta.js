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

