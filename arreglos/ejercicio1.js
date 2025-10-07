let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}
calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for(indice=0;indice<notas.length;indice++){
        sumaNotas+=notas[indice];
    }
    return promedio=sumaNotas/notas.length;
    
}
ejecutarPromedio=function(){
    let promedio=calcularPromedio();
    mostrarTexto("promedio",promedio);
}
probarAgregar=function(){
    let notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function(nota){
    notas.push(nota);   
}