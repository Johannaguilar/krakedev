personas=[{nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5}
]
agregarPersona=function(){
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarFloat("txtEdad");
    let NombreValido=validarNombre(nombre);
    let EdadValida=validarSueldo(edad);
    let nuevaPersona={}
    if(NombreValido==false&&EdadValida==false){
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE: "+nuevaPersona.nombre+" "+nuevaPersona.edad)
        mostrarPersonas();
    }
    
}
mostrarPersonas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    let elementoClientes;
    for(let i=0;i<personas.length;i++){
    elementoClientes=personas[i]
    contenidoTabla+=
    "<tr><td>"+elementoClientes.edad+"</td>"
    +"<td>"+elementoClientes.nombre+"</td>"
    +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
determinarMayor=function(){
    let mayor=encontrarMayor();
    let mensaje=mayor.nombre+" "+mayor.edad;
    mostrarTexto("personaMayor",mensaje)
}
encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        console.log(elementoPersona.nombre,elementoPersona.edad);
        if(personaMayor.edad<elementoPersona.edad){
            personaMayor=elementoPersona;
        }
        
    }
    return personaMayor;

}
determinarMenor=function(){
    let menor=encontrarmenor();
    let mensaje=menor.nombre+" "+menor.edad;
    mostrarTexto("personaMenor",mensaje)

}
encontrarmenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        console.log(elementoPersona.nombre,elementoPersona.edad);
        if(personaMenor.edad>elementoPersona.edad){
            personaMenor=elementoPersona;
        }
        
    }
    return personaMenor;

}