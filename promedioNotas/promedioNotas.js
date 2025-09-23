calcularPromedioNotas=function(){
    let n1=recuperarFlotante("nota1");
    let n2=recuperarFlotante("nota2");
    let n3=recuperarFlotante("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    let promedioModificado=promedio.toFixed(2);
    cambiarTexto("lblpromedio",promedioModificado);
    if(promedioModificado>=7){
        cambiarImagen("imagen","./img/exito.gif");

    }else{
        cambiarImagen("imagen","./img/fracaso.gif");
    }


}