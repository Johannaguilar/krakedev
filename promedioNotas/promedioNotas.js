calcularPromedioNotas=function(){
    let n1=recuperarFlotante("nota1");
    let n2=recuperarFlotante("nota2");
    let n3=recuperarFlotante("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    let promedioModificado=promedio.toFixed(2);
    cambiarTexto("lblpromedio",promedioModificado);
    if(promedioModificado<5 && promedioModificado >0){
        cambiarImagen("imagen","./img/fracaso.gif");
        cambiarTexto("lblmensaje","REPROBADO");
    }else if(promedioModificado>=5 && promedioModificado<=8){
        cambiarImagen("imagen","./img/buenTrabajo.gif");
        cambiarTexto("lblmensaje","BUEN TRABAJO");
    }else if(promedioModificado>=8 && promedioModificado<=10){
        cambiarImagen("imagen","./img/exelente.gif");
        cambiarTexto("lblmensaje","EXELENTE");
    }else{
        cambiarImagen("imagen","./img/incorrecto.gif");
        cambiarTexto("lblmensaje","DATO INCORRECTO");
    }


}