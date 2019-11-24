function validar() {
    var nome = document.getElementById("txtNome");
    var nome2=nome.value;
    if(nome2.length<=0){
        nome.style.borderColor = "red";
        //alert("Insira um nome, por favor");
        return false;
    }else{
        nome.style.borderColor = null;
    }
    var val=validarIdade();
    var nasc = document.getElementById("txtNascimento");
    if(val==false){
        nasc.style.borderColor = "red";
        //alert("Só pessoas a partir de 18 anos podem se cadastrar!");
        return false;
    }else{
        nasc.style.borderColor = null;
    }
    var telefone=document.getElementById("txtContato").value;
    if(telefone.length <11 || telefone.length >11){
        return false;
    }
    var cpf = document.getElementById("txtCPF").value;
    if(cpf.length>11 || cpf.length<11){
        return false;
    }
    var val2=validaemail();
    var email=document.getElementById("txtLogin");
    if(val2==false){
        email.style.borderColor = "red";
        //alert("Insira um email valido!");
        return false;
    }else{
        email.style.borderColor = null; 
    }
    var senha=document.getElementById("txtPassword").value;
    if(senha.length<6){
        return false;
    }
    var cookie="username="+nome2+";nascimento="+nasc.value+";telefone="+telefone+";cpf="+cpf+";email="+email.value+";senha="+senha+"expires=Thu, 28 Nov 2019 12:00:00 UTC";
    alert(cookie);
    document.cookie = cookie;
    alert(document.cookie);

}

function validarIdade(){
    var nasc = document.getElementById("txtNascimento").value;
    if(nasc.length<=0){
        return false;
    }
    nasc=nasc.split("-");
    //var data = new Date(nasc[2]+"/"+nasc[1]+"/"+nasc[0]);
    var data = new Date();
    data.setDate(nasc[2]);
    data.setMonth(nasc[1]-1);
    data.setFullYear(nasc[0]);
    var atual = new Date();
    if(atual.getFullYear()-data.getFullYear()<18){
        return false;
    }else if(atual.getFullYear()-data.getFullYear()==18){
        if(atual.getMonth()<data.getMonth()){
            return false;
        }else if(atual.getMonth()==data.getMonth()){
            if(atual.getDate()<data.getDate()){
                return false;
            }
        }
    }
    return true;
}

function validafone(){
    var fone=document.getElementById("txtContato");
    var value=fone.value;
    if(value.length <11 || value.length>11){
        fone.style.borderColor = "red";
    }else{
        fone.style.borderColor = null;
    }
}

function validacpf(){
    var cpf=document.getElementById("txtCPF");
    var value=cpf.value;
    if(value.length <11 || value.length>11){
        cpf.style.borderColor = "red";
    }else{
        cpf.style.borderColor = null;
    }
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