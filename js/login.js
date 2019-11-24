

function validar() {
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
    var email2=getCookie("email");
    var senha2=getCookie("senha");
    if(email.value==email2){
        if(senha==senha2){
            setCookie("active","true",20000000);
            window.location.href = "index.html";
        }else{
            document.getElementById("mensagem").innerHTML="Senha incorreta!";
        }
    }else{
        document.getElementById("mensagem").innerHTML="Email não cadastrado!";
    }
}

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