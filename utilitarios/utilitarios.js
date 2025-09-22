saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let statura=recuperarFloat("txtEstatura");

}
recuperarTexto=function(idComponente){
    let valorIngresado=document.getElementById(idComponente).value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}