

function enviar(){
    var val=validaemail();
    if(val==false){
        document.getElementById("mensagem").innerHTML="Email invalido";
        return false;
    }
    var nome=document.getElementById("txtNome").value;
    var mensagem=document.getElementById("browser").value;
    if(nome.length<=0 || mensagem.length<=0){
        document.getElementById("mensagem2").innerHTML="Preencha todos os campos";
        return false;
    }
    alert("Mensagem enviada com sucesso!");
    location.reload(true)
}

function validaemail(){
    var email=document.getElementById("txtLogin");
    var mail=email.value;
    if(mail.includes("@")){
        mail=mail.split("@");
        if(mail[1].includes(".")){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}