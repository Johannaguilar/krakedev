//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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
    let letrasEncontradas=0;
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
        if(letra==caracter1 && pocision==0){
            mostrarLetra(caracter1,pocision);
            letrasEncontradas=letrasEncontradas+1
        }
        if(letra==caracter2 && pocision==1){
            mostrarLetra(caracter2,pocision);
            letrasEncontradas=letrasEncontradas+1
        }
        if(letra==caracter3 && pocision==2){
            mostrarLetra(caracter3,pocision);
            letrasEncontradas=letrasEncontradas+1
        }
        if(letra==caracter4 && pocision==3){
            mostrarLetra(caracter4,pocision);
            letrasEncontradas=letrasEncontradas+1
        }
        if(letra==caracter5 && pocision==4){
            mostrarLetra(caracter5,pocision);
            letrasEncontradas=letrasEncontradas+1
        }
        
    }


}
ingresarLetra=function(){
    let letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)==true){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }

}