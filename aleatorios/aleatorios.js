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
    let valorTxt=recuperarInt("txtCaja");
    if(valorTxt>=5&&valorTxt<=20){
        for(let i=0;i<valorTxt;i++){
            console.log(i);
        }
    }

}