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
modificarAtributos=function(){
    let cuenta={
        numero:"5323423423",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente={
        cedula:"171231",
        nombre:"JUAN"
    }
    let cliente1={};
    cliente1.nombre="ROMEO";
    cliente1.nombre="SALCEDO";
    cliente1.cedula="123123";
}
probarIncrementoSaldo=function(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo)
}
probarDeterminarMayor=function(){
    let per1={nombre:"DANIEL",edad:45};
    let per2={nombre:"luisa",edad:48};
    let mayor=determinarMayor(per1,per2);
    if(mayor != null){
        console.log("EL MAYOR ES:"+mayor.nombre);
    }
}
incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
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