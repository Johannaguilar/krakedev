validarEstructura=function(placa){
    let longitudPlaca=placa.length;
    let noHayErrores=true;
    let primerCaracter=placa.charAt(0);
    let validacionMayuscula1=esMayuscula(primerCaracter);
    let segundoCaracter=placa.charAt(1);
    let validacionMayuscula2=esMayuscula(segundoCaracter);
    let tercerCaracter=placa.charAt(2);
    let validacionMayuscula3=esMayuscula(tercerCaracter)
    let GuionCaracter3=placa.charAt(3);
    let validacionGuion=esGuion(GuionCaracter3);
    let cuartoCaracter=placa.charAt(4);
    let validaciondijito4=esDijito(cuartoCaracter);
    
    let quintoCaracterDijito=placa.charAt(5);
    let validaciondijito5=esDijito(quintoCaracterDijito);

    let sextoCaracterDijito=placa.charAt(6);
    let validaciondijito6=esDijito(sextoCaracterDijito);
    let septimoCaracterDijito=placa.charAt(7);
    let validaciondijito7=esDijito(septimoCaracterDijito);

    if(longitudPlaca<7 || longitudPlaca>8){
        noHayErrores=false;
        return "LA PLACA DEBE TENER 7 U 8 CARACTERES";
    }
    if(longitudPlaca<8||longitudPlaca>8 ){
    if(validacionMayuscula1==false){
        noHayErrores=false;
        return "EL PRIMER CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionMayuscula2==false){
        noHayErrores=false;
        return "EL SEGUNDO CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionMayuscula3==false){
        noHayErrores=false;
        return "EL TERCER CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionGuion==false){
        noHayErrores=false;
        return "EL CUARTO CARACTER TIENE Q SER UN GUION (-)";
    }
    if(validaciondijito4==false){
        noHayErrores=false;
        return "EL QUINTO CARACTER DEBE SER UN DIJITO";
    }
    if(validaciondijito5==false){
        noHayErrores=false;
        return "EL SEXTO CARACTER DEBE SER UN DIJITO";
    }
    if(validaciondijito6==false){
        noHayErrores=false;
        return "EL SEPTIMO CARACTER DEBE SER UN DIJITO";
    }else if(noHayErrores==true){
        
        return null;
    }
    
    
    }else if(longitudPlaca<9||longitudPlaca>9 ){
    if(validacionMayuscula1==false){
        noHayErrores=false;
        return "EL PRIMER CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionMayuscula2==false){
        noHayErrores=false;
        return "EL SEGUNDO CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionMayuscula3==false){
        noHayErrores=false;
        return "EL TERCER CARACTER DEBE SER UNA MAYUSCULA";
    }
    if(validacionGuion==false){
        noHayErrores=false;
        return "EL CUARTO CARACTER TIENE Q SER UN GUION (-)";
    }
    if(validaciondijito4==false){
        noHayErrores=false;
        return "EL QUINTO CARACTER DEBE SER UN DIJITO";
    }
    if(validaciondijito5==false){
        noHayErrores=false;
        return "EL SEXTO CARACTER DEBE SER UN DIJITO";
    }
    if(validaciondijito6==false){
        noHayErrores=false;
        return "EL SEPTIMO CARACTER DEBE SER UN DIJITO";
    }
    if(validaciondijito7==false){
        noHayErrores=false;
        return "EL OCTAVO CARACTER DEBE SER UN DIJITO";
    }else if(noHayErrores==true){
        
        return null;
    }
    
    }
    
    


}
obtenerProvincia=function(placa){
    let primerCaracter=placa.charAt(0);
    let codeAcsii=primerCaracter.charCodeAt(0);
    if(codeAcsii==65){
        return "AZUAY";
    }
    if(codeAcsii==66){
        return "BOLIVAR";
    }
    if(codeAcsii==85){
        return "CAÑAR";
    }
    if(codeAcsii==67){
        return "CARCHI";
    }
    if(codeAcsii==88){
        return "COTOPAXI";
    }
    if(codeAcsii==72){
        return "CHIMBORAZO";
    }
    if(codeAcsii==79){
        return "EL ORO";
    }
    if(codeAcsii==69){
        return "ESMERALDAS";
    }
    if(codeAcsii==87){
        return "GALAPAGOS";
    }
    if(codeAcsii==71){
        return "GUAYAS";
    }
    if(codeAcsii==73){
        return "IMBABURA";
    }
    if(codeAcsii==76){
        return "LOJA";
    }
    if(codeAcsii==82){
        return "LOS RIOS";
    }
    if(codeAcsii==77){
        return "MANABI";
    }
    if(codeAcsii==86){
        return "MORONA SANTIAGO";
    }
    if(codeAcsii==78){
        return "NAPO";
    }
    if(codeAcsii==83){
        return "PASTAZA";
    }
    if(codeAcsii==80){
        return "PICHINCHA";
    }
    if(codeAcsii==75){
        return "SUCUMBIOS";
    }
    if(codeAcsii==81){
        return "ORELLANA";
    }
    if(codeAcsii==84){
        return "TUNGURAHUA";
    }
    if(codeAcsii==90){
        return "ZAMORA CHINCHIPE";
    }
    if(codeAcsii==89){
        return "SANTA ELENA";
    }else{
        return null;
    }

    
}
obtenerTipoVehiculo=function(placa){
    let segundoCaracter=placa.charAt(1);
    let codeAcsii=segundoCaracter.charCodeAt(0);
    if(codeAcsii>=65 && codeAcsii<=90){
        if(codeAcsii==65 || codeAcsii==90){
        return "VEHICULOS COMERCIALES(COMO TAXIS O AUTOBUSES)";
    }
    if(codeAcsii==69){
        return "VEHICULOS GUBERNAMENTALES";
    }if(codeAcsii==88){
        return "VEHICULOS DE USO OFICIAL";
    }if(codeAcsii==83){
        return "VEHICULOS DEL GOBIERNO PROVINCIAL";
    }if(codeAcsii==77){
        return "VEHICULOS MUNICIPALES";
    }if(codeAcsii!=65 && codeAcsii!=69 && codeAcsii!=88 &&codeAcsii!=83 && codeAcsii!=77 && codeAcsii!=90){
        return "VEHICULO PARTICULAR(PRIVADO)" ;
    }

    }else{
        return null;
    }

}