saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");

}
recuperarTexto=function(idComponente){
    let valorIngresado=document.getElementById(idComponente).value;
    return valorIngresado;
}