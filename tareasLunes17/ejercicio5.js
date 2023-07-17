let email="asdasdsad@gmial.com";

let password="asDasd12345";

let descripcion="Aca va una pequeña descripcion";

function solution(correo, contra, info) {

    let validadorArroba=false,validadorCom=false,validadorGuion=true, validadorMayus=false;

    for(let i=0; i<correo.length;i++){

        if(correo[i]=="@"){

            validadorArroba=true;

            console.log("SE VALIDA ARROBA");

        }
        if(correo[i]=='.' && correo[i+1]=='c' && correo[i+2]=='o' && correo[i+3]=='m' ){

            console.log("SE VALIDA .COM");

            validadorCom=true;

        }

    }
    for(let i=0; i<info.length;i++){

        if(correo[i]=="-"){

            validadorGuion=false;

        }

    }
    for(let i=0; i<contra.length;i++){

        if(contra[i]==contra[i].toUpperCase()  && contra[i]!="1"&& contra[i]!="2"
 		&& contra[i]!="3" && contra[i]!="4" && contra[i]!="5" && contra[i]!="6"
		&& contra[i]!="7" && contra[i]!="8" && contra[i]!="9" && contra[i]!="0"){
            validadorMayus=true;

            console.log("SE VALIDA MAYUS");

        }

    }

   return (validadorMayus && validadorGuion && validadorArroba 
		&& validadorCom && info.length<400 && contra.length<=20 
		&& contra.length>7);

}



console.log(solution(email,password,descripcion));