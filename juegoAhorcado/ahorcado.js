//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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
        for(let i=0;i<largo;i++){
        letra=txtCaja.charAt(i)
        if(i==0){
            if(esMayuscula(letra)==true){
                Mayusculas1=true;
            }
        }
        if(i==1){
            if(esMayuscula(letra)==true){
                Mayusculas2=true;
            }
        }
        if(i==2){
            if(esMayuscula(letra)==true){
                Mayusculas3=true;
            }
        }
        if(i==3){
            if(esMayuscula(letra)==true){
                Mayusculas4=true;
            }
        }
        if(i==4){
            if(esMayuscula(letra)==true){
                Mayusculas5=true;
            }
        }
        

    }
    }
    if(Mayusculas1==false || Mayusculas2==false || Mayusculas3==false||Mayusculas4==false||Mayusculas5==false){
        alert("DEBE SER UNA PALABRA DE 5 LETRAS MAYUSCULAS")
    }else{
        console.log(txtCaja);
    }
}