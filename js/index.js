

function checkQuartos(){
    var adults=document.getElementById("txtData3");
    var criancas=document.getElementById("txtData4");
    var entrada=document.getElementById("txtData1");
    var saida=document.getElementById("txtData2");
    if(entrada.value.length<=0){
        entrada.style.borderColor = "red";
        return false;
    }else{
        entrada.style.borderColor = null;
    }
    if(saida.value.length<=0){
        saida.style.borderColor = "red";
        return false;
    }else{
        saida.style.borderColor = null;
    }
    if(adults.value.length<=0){
        adults.style.borderColor = "red";
        return false;
    }else{
        adults.style.borderColor = null;
    }
    if(criancas.value.length<=0){
        criancas.style.borderColor = "red";
        return false;
    }else{
        criancas.style.borderColor = null;
    }
    var nA=parseInt(adults.value);
    var nC=parseInt(criancas.value);
    var result=document.getElementById("busca");
    result.style.color=null;
    var val=validarDatas();
    if(val==false){
        result.innerHTML="A data de entrada é maior que a de saída";
        return false;
    }
    if(nA+nC>4){
        result.innerHTML="Não temos quartos disponíveis para tantas pessoas";
        return false;
    }
    if(nA<1){
        result.innerHTML="Deve-se ter ao menos 1 adulto";
        return false;
    }
    if(nA+nC==4){
        result.innerHTML="Só temos o quarto deluxe para sua demanda";
        result.style.color="green";
    }else if(nA+nC>=2){
        result.innerHTML="Temos o quarto deluxe ou superior para comporta-los";
        result.style.color="green";
    }else if(nA+nC>=1){
        result.innerHTML="Temos todos os tipos quarto diponiveis que atendam suas necessidades";
        result.style.color="green";
    }
    
}

function validarDatas(){
    var data = document.getElementById("txtData1").value;
    var data2 = document.getElementById("txtData2").value;
    if(data.length<=0){
        return false;
    }
    if(data2.length<=0){
        return false;
    }
    data=data.split("-");
    data2=data2.split("-");
    //var data = new Date(nasc[2]+"/"+nasc[1]+"/"+nasc[0]);
    var entrada = new Date();
    entrada.setDate(data[2]);
    entrada.setMonth(data[1]-1);
    entrada.setFullYear(data[0]);
    var saida = new Date();
    saida.setDate(data2[2]);
    saida.setMonth(data2[1]-1);
    saida.setFullYear(data2[0]);
    if(entrada.getFullYear()>saida.getFullYear()){
        return false;
    }else if(entrada.getFullYear()==saida.getFullYear()){
        if(entrada.getMonth()>saida.getMonth()){
            return false;
        }else if(entrada.getMonth()==saida.getMonth()){
            if(entrada.getDate()>saida.getDate()){
                return false;
            }
        }
    }
    return true;
}