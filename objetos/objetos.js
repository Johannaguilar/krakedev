probarAtributos=function(){
    let persona={
        nombre:"Pedro",
        apellido:"Morales",
        edad:24,
        estaVivo:true,
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("NO ESTA VIVO");
    }else{
        console.log("SI ESTA VIVO");
    }
}
crearProductos=function(){
    let producto1={
        nombre:"BOLSA DE PAPAS",
        precio:4.99,
        stock:2,

    }
    let producto2={
        nombre:"BOLSA DE FRUTOS SECOS",
        precio:2.99,
        stock:4,

    }
    console.log("PRODUCTO 1",producto1.nombre);
    console.log("PRECIO PRODUCTO 2",producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("PRODUCTO 1 TIENE MAYOR STOCK");
    }
    if(producto2.stock>producto1.stock){
        console.log("PRODUCTO 2 TIENE MAYOR STOCK");
    }
    if(producto1.stock==producto2.stock){
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK");
    }
}