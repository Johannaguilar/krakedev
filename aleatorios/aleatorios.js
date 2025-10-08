aleatorio=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*100;
    console.log(numeroMultiplicado);
    let numeroEntero=parseInt(numeroMultiplicado);
    console.log("-------->"+numeroEntero);
    let valorDado=numeroEntero+1;
    console.log("----------->"+valorDado);
    return valorDado
}
generarAleatorios=function(){
    let aleatorios=[];
    let numAleatorio;
    let valorTxt=recuperarInt("txtCaja");
    if(valorTxt>=5&&valorTxt<=20){
        for(let i=0;i<valorTxt;i++){
            console.log(i);
            numAleatorio=aleatorio();
            aleatorios+=numAleatorio;
        }
        mostrarResultado(aleatorios);
    }

}
mostrarResultado=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMERO ALEATORIO</th></tr>";
    let numeroAleatorio;
    for(let i=0;i<arregloNumeros.length;i++){
        numeroAleatorio=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numeroAleatorio;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}