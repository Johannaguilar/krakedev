calcularTasaInteres=function(ingresoAnual) {
let tasa;
if (ingresoAnual < 300000) {
    tasa = 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    tasa = 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    tasa = 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    tasa = 13;
    }else {
    tasa = 12;
}
    return tasa+"%";
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let disponible = ingresos - egresos;
    let capacidadPago;
    if(edad>50){
        return capacidadPago=disponible*0.30;
    }else{
        return capacidadPago=disponible*0.40;
    }
}
calcularDescuento=function(precio,cantidad){
    let precioTotal = precio* cantidad;
    let descuento = 0;
    let precioFinal;
    if(cantidad<3){
        descuento=0
    }else if(cantidad>=3 && cantidad<=5){
        descuento = precioTotal*0.02;
    }else if(cantidad>=6 && cantidad<=11){
        descuento = precioTotal*0.03;
    }else{
        descuento = precioTotal*0.04;
    }
    return precioFinal=precioTotal-descuento;
}
determinarColesterolLDL=function(nivelColesterol){
    if(nivelColesterol>0 && nivelColesterol<100){
        return "Nivel Optimo/nivel calculado en adulto";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        return"Casi Optimo: Poco mejor q optimo/nivel calculado en adulto";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        return "Limite Alto!/nivel calculado en adulto";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        return "Alto!!/nivel calculado en adulto";
    }else if(nivelColesterol>=190){
        return "Muy alto!!!/nivel calculado en adulto";
    }else{
        return "Valor Incorrecto";
    }
}
validarClave=function(clave){
    if(clave.length >=8 && clave.length<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true
    }else{
        return false
    }
}
esMinuscula=function(caracter){
    if(caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122){
        return true
    }else{
        return false
    }
}
esDijito=function(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
        return true
    }else{
        return false
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false
    }

}
caracterEspecial=function(caracter){
    if(caracter.charCodeAt(0)==45 || caracter.charCodeAt(0)==42 || caracter.charCodeAt(0)==95){
        return true
    }else{
        return false
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 && notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false
    }

}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>80 && notaFisica>notaMatematica){
        return true;
    }else{
        return false
    }

}
probar=function(){
    let ing=recuperarFlotante("precioTxt");
    let notaFisica=recuperarFlotante("cantidadTxt");
    let geo=recuperarFlotante("trigliceridos");
    console.log(dejarSalir(ing,notaFisica,geo));
    
}
