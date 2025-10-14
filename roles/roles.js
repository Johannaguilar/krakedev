let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3131313131",nombre:"Zoila",apellido:"Cerda",sueldo:250.0}
]
let esNuevo=false;

guardar=function(){
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let sueldo=recuperarFloat("txtSueldo");
    let cedulaValida=validarCedula(cedula);
    let nombreValido=validarNombre(nombre);
    let apellidoValido=validarApellido(apellido);
    let sueldoValido=validarSueldo(sueldo);
    let esNuevo=ejecutarNuevo();
    let empleado={}
    let nuevoEmpleado;
    if(cedulaValida==false&&nombreValido==false&&apellidoValido==false&&sueldoValido==false){
        
        if(esNuevo==true){
        empleado.cedula=cedula;
        empleado.nombre=nombre;
        empleado.apellido=apellido;
        empleado.sueldo=sueldo;
        
        }
    nuevoEmpleado=agregarEmpleado(empleado)
    
    if(nuevoEmpleado==false){
        empleados.push(empleado)
        alert("EMPLEADO GUARDADO CORRECTAMENTE")
        mostrarEmpleados();
        deshabilitarCajasYBoton();
    }
    if(nuevoEmpleado==true){
        
        alert("YA EXISTE ESTE AMPLEADO:"+cedula)

    }
    }
    
}

agregarEmpleado=function(empleado){
    let cedulaEmpleado=buscarEmpleado(empleado.cedula);
    if(cedulaEmpleado==null){
        return false;

    }else{
        return true;
    }
}

buscarEmpleado=function(cedula){
    let elementoClientes;
    let empleadoEncontrado=null;
for(let i=0;i<empleados.length;i++){
    elementoClientes=empleados[i]
    if(elementoClientes.cedula==cedula){
            empleadoEncontrado=elementoClientes;
            break;
        }
}
return empleadoEncontrado;

}
ejecutarNuevo=function(){
    mostrarComponente("txtCedula");
    mostrarComponente("txtNombre");
    mostrarComponente("txtApellido");
    mostrarComponente("txtSueldo");
    mostrarComponente("btnGuardar");
    return esNuevo=true;
}
mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoClientes;
    for(let i=0;i<empleados.length;i++){
    elementoClientes=empleados[i]
    contenidoTabla+=
    "<tr><td>"+elementoClientes.cedula+"</td>"
    +"<td>"+elementoClientes.nombre+"</td>"
    +"<td>"+elementoClientes.apellido+"</td>"
    +"<td>"+elementoClientes.sueldo+"</td>"
    +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    deshabilitarCajasYBoton();
    ocultarComponente("divResumen");
    mostrarEmpleados();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
