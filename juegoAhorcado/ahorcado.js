//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let letra1=false;
let letra2=false;
let letra3=false;
let letra4=false;
let letra5=false;
let coincidencias=0;
let intentos=0;
let errores=0;
let palabraSecreta;
esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true
    }else{
        return false
    }
}
guardarPalabra=function(){
    let letra
    let txtCaja=recuperarTexto("txtSecreta");
    let largo=txtCaja.length;
    let Mayusculas1=false;
    let Mayusculas2=false;
    let Mayusculas3=false;
    let Mayusculas4=false;
    let Mayusculas5=false;
    if(largo==5){
        for(let pocision=0;pocision<largo;pocision++){
        letra=txtCaja.charAt(pocision)
        if(pocision==0){
            if(esMayuscula(letra)==true){
                Mayusculas1=true;
            }
        }
        if(pocision==1){
            if(esMayuscula(letra)==true){
                Mayusculas2=true;
            }
        }
        if(pocision==2){
            if(esMayuscula(letra)==true){
                Mayusculas3=true;
            }
        }
        if(pocision==3){
            if(esMayuscula(letra)==true){
                Mayusculas4=true;
            }
        }
        if(pocision==4){
            if(esMayuscula(letra)==true){
                Mayusculas5=true;
            }
        }
        

    }
    }
    if(Mayusculas1==false || Mayusculas2==false || Mayusculas3==false||Mayusculas4==false||Mayusculas5==false){
        alert("DEBE SER UNA PALABRA DE 5 LETRAS MAYUSCULAS")
    }else{
        palabraSecreta=txtCaja;
        console.log(txtCaja);
    }
}
mostrarLetra=function(letra,pocision){
    if(pocision==0){
        mostrarTexto("div0",letra);
    }
    if(pocision==1){
        mostrarTexto("div1",letra);
    }
    if(pocision==2){
        mostrarTexto("div2",letra);
    }
    if(pocision==3){
        mostrarTexto("div3",letra);
    }
    if(pocision==4){
        mostrarTexto("div4",letra);
    }

}
validar=function(letra){
    let caracter1;
    let caracter2;
    let caracter3;
    let caracter4;
    let caracter5;
    
    for(let pocision=0;pocision<palabraSecreta.length;pocision++){
        if(pocision==0){
            caracter1=palabraSecreta.charAt(pocision)
        }
        if(pocision==1){
            caracter2=palabraSecreta.charAt(pocision)
        }
        if(pocision==2){
            caracter3=palabraSecreta.charAt(pocision)
        }
        if(pocision==3){
            caracter4=palabraSecreta.charAt(pocision)
        }
        if(pocision==4){
            caracter5=palabraSecreta.charAt(pocision)
        }
        if(letra==caracter1 && pocision==0 && letra1== false){
            mostrarLetra(caracter1,pocision);
            coincidencias+=1
            letra1=true;

        }
        if(letra==caracter2 && pocision==1 && letra2==false){
            mostrarLetra(caracter2,pocision);
            coincidencias+=1
            letra2=true;
        }
        if(letra==caracter3 && pocision==2 && letra3==false){
            mostrarLetra(caracter3,pocision);
            coincidencias+=1
            letra3=true;
        }
        if(letra==caracter4 && pocision==3 && letra4==false){
            mostrarLetra(caracter4,pocision);
            coincidencias+=1
            letra4=true;
        }
        if(letra==caracter5 && pocision==4 && letra5==false){
            mostrarLetra(caracter5,pocision);
            coincidencias+=1
            letra5=true;
        }
        
    }
    if(letra!=caracter1&&letra!=caracter2&&letra!=caracter3&&letra!=caracter4&&letra!=caracter5){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores+=1
    }


}
ingresarLetra=function(){
    let letra=recuperarTexto("txtLetra");
    intentos+=1
    if(esMayuscula(letra)==true){
        validar(letra);
        mostrarAhorcado();
        if(coincidencias==5){
            alert("HA GANADO");
        }else if(intentos==10){
            alert("HA PERDIDO");
            mostrarImagen("ahorcadoImagen","AHORCADO_09.png");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        
    }

}
mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","AHORCADO_01.png");
    }
    if(errores==2){
        mostrarImagen("ahorcadoImagen","AHORCADO_02.png");
    }
    if(errores==3){
        mostrarImagen("ahorcadoImagen","AHORCADO_03.png");
    }
    if(errores==4){
        mostrarImagen("ahorcadoImagen","AHORCADO_04.png");
    }
    if(errores==5){
        mostrarImagen("ahorcadoImagen","AHORCADO_05.png");
    }
    if(errores==6){
        mostrarImagen("ahorcadoImagen","AHORCADO_06.png");
    }
    if(errores==7){
        mostrarImagen("ahorcadoImagen","AHORCADO_07.png");
    }
    if(errores==8){
        mostrarImagen("ahorcadoImagen","AHORCADO_08.png");
    }
    if(errores==9){
        mostrarImagen("ahorcadoImagen","AHORCADO_09.png");
    }
}