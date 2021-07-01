function calcularmedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media;
    media = (nota1+nota2)/2;
    
    if(media>=6){
        alert("Aprovado " + media);
    }else if(media>=3)  {

        alert("Sua nota é "+media+" Então terá que fazer uma prova de recuperação");
        var nota3 = parseFloat(prompt("Digite a nota da prova:"));
        media = (nota1+nota2+nota3)/3

        if(media>=6){
            alert("Aprovado " + media);
        }
        else {
            alert("Reprovado " + media); 
        }

    }
    else{
        alert("Reprovado " + media);}
}
