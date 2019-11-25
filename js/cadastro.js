// var username = getCookie("username");
// if(username != null && username != "")
// {
//     document.getElementById("nome").innerHTML = String("Bemvindo " + username);
// } else
// {
//     username = prompt("Please enter your name:" , "");
//     if(username != null && username != "")
//     {
//     setCookie("username" , username , 365);
//     }
// }

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        // alert("Welcome again " + user);
        var check=getCookie("active");
        if(check.includes("true")){
            document.getElementById("nome").innerHTML = "Bemvindo "+user;
        }
    }
  }

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
    setCookie("username",nome2,20000000);
    setCookie("senha",senha,20000000);
    setCookie("email",email.value,20000000);
    setCookie("active","false",20000000);
    alert(document.cookie);
    window.location.href = "login.html";
}

// function setCookie(k, v, expira, path) {
//     path = path || "/";

//     var d = new Date();
//     d.setTime(d.getTime() + (expira * 1000));

//     document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(v) + ";SameSite=None;Secure" +"; expires=" + d.toUTCString() + "; path=" + path;
// }

// function getCookie(k) {
//     var c = String(document.cookie).split(";");
//     var neq = k + "=";

//     for (var i = 0; i < c.length; i++) {
//         var d = c[i];

//         while (d.charAt(0) === " ") {
//             c[i] = c[i].substring(1, d.length);
//         }

//         if (c[i].indexOf(neq) === 0) {
//             return decodeURIComponent(c[i].substring(neq.length, c[i].length));
//         }
//     }

//     return null;
// }

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