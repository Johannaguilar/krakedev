let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3131313131",nombre:"Zoila",apellido:"Cerda",sueldo:250.0}
]
let esNuevo=false;


ejecutarNuevo=function(){
    esNuevo=true;
    mostrarComponente("txtCedula");
    mostrarComponente("txtNombre");
    mostrarComponente("txtApellido");
    mostrarComponente("txtSueldo");
    mostrarComponente("btnGuardar");
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
    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");
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
