let clientes=[
    {cedula:"123123",nombre:"JUAN",edad:20},
    {cedula:"222222",nombre:"MARIO",edad:50},
    {cedula:"333333",nombre:"PEPE",edad:22}
];
guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}
ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    if(cliente==null){
        alert("CLIENTE NO ENCONTRADO")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula)
        mostrarTextoEnCaja("txtNombre",cliente.nombre)
        mostrarTextoEnCaja("txtEdad",cliente.edad)
    }
}
crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");//es edad como puede tener 7.5 de edad jaja;

    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarCliente(nuevoCliente);
}
agregarCliente=function(cliente){
    let resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
        alert("CLIENTE AGREGADO"+cliente.cedula)
        mostrarClientes();
    }else{
        alert("YA EXISTE UN CLIENTE CON ESA CEDULA"+cliente.cedula)
    }
}
buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoClientes;
    for(let i=0;i<clientes.length;i++){
    elementoClientes=clientes[i]
    contenidoTabla+=
    "<tr><td>"+elementoClientes.cedula+"</td>"
    +"<td>"+elementoClientes.nombre+"</td>"
    +"<td>"+elementoClientes.edad+"</td>"
    +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}