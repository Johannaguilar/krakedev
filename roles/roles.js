let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3131313131",nombre:"Zoila",apellido:"Cerda",sueldo:250.0}
]
let roles=[];
let esNuevo=false;

ejecutarBusqueda=function(){
    let cedula=recuperarTexto("txtBusquedaCedula");
    let existeEmpleado=buscarEmpleado(cedula);
    if(existeEmpleado==false){
        alert("EMPLEADO NO EXISTE");
    }else{
        
        mostrarComponente("txtNombre");
        mostrarComponente("txtApellido");
        mostrarComponente("txtSueldo");
        ocultarComponente("txtCedula");

        mostrarTextoEnCaja("txtCedula",existeEmpleado.cedula)
        mostrarTextoEnCaja("txtNombre",existeEmpleado.nombre)
        mostrarTextoEnCaja("txtApellido",existeEmpleado.apellido)
        mostrarTextoEnCaja("txtSueldo",existeEmpleado.sueldo)
    }
}
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
        esNuevo=false;
        deshabilitarCajasYBoton();
    }
    
    if(nuevoEmpleado==true){
        
        alert("YA EXISTE ESTE AMPLEADO:"+cedula)
            let empleadoEncontrado=buscarEmpleado(cedula);
            empleadoEncontrado.nombre=nombre;
            empleadoEncontrado.apellido=apellido;
            empleadoEncontrado.sueldo=sueldo;
            mostrarEmpleados();
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            deshabilitarCajasYBoton();
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
    ocultarComponente("botonRol");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
buscarRol=function(){
    let cedula=recuperarTexto("txtBusquedaCedulaRol");
    let empleadoEncontrado=buscarEmpleado(cedula);
    if(empleadoEncontrado!=null){
        mostrarTexto("infoCedula",empleadoEncontrado.cedula);
        mostrarTexto("infoNombre",empleadoEncontrado.nombre+" "+empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo",empleadoEncontrado.sueldo);
        habilitarComponente("botonRol");
    }else{
        alert("EL EMPLEADO NO EXISTE");
    }
}
calcularAporteEmpleado=function(sueloEmpleado){
    return (9.45*sueloEmpleado)/100;
}
calcularValorAPagar=function(sueldo,iess,descuento){
    return sueldo-iess-descuento;
}
calcularRol=function(){
    let sueldo=recuperarFloatDiv("infoSueldo");
    let descuento=recuperarFloat("txtDescuentos");
    let aporte=calcularAporteEmpleado(sueldo);
    let valorAPagar=calcularValorAPagar(sueldo,aporte,descuento)
    mostrarTexto("infoIESS",aporte);
    mostrarTexto("infoPago",valorAPagar);
    mostrarComponente("botonRol");


}
buscarRol2=function(cedula){
    let elementoClientes;
    let empleadoEncontrado=null;
for(let i=0;i<roles.length;i++){
    elementoClientes=roles[i]
    if(elementoClientes.cedula==cedula){
            empleadoEncontrado=elementoClientes;
            break;
        }
}
return empleadoEncontrado;
}
agregarRol=function(rol){
    let cedulaEmpleado=buscarRol2(rol.cedula);
    if(cedulaEmpleado==null){
        roles.push(rol);
    }else{
        alert("YA EXISTE ESTE ROL:"+rol.cedula)
    }

}
calcularAporteEmpleador=function(sueldo){
    return (sueldo*11.15)/100;
}
guardarRol=function(){
    let cedula=recuperarTextoDiv("infoCedula");
    let nombre=recuperarTextoDiv("infoNombre");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporte=recuperarFloatDiv("infoIESS");
    let valorAPagar=recuperarFloatDiv("infoPago");
    let rol={};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.aporte=aporte;
    rol.valorAPagar=valorAPagar;
    agregarRol(rol);
    alert("GUARDADO CON EXITO")
    deshabilitarComponente("botonRol");

}
limpiar=function(){
    deshabilitarCajasYBoton();
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo",0);
    mostrarTextoEnCaja("txtBusquedaCedula","");
}
