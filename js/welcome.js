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

var user=getCookie("username");
if (user != "") {
    // alert("Welcome again " + user);
    var check=getCookie("active");
    if(check.includes("true")){
        document.getElementById("nome").innerHTML = "Bemvindo "+user;
    }
}