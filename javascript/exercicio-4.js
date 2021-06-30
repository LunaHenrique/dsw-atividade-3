function conversao(){
    var f = document.getElementById("temperatura").value;
    var c;

    c = (f-32)/1.8;
    if (c<15) {
        alert("Hoje está frio, está fazendo "+c+"º");
    } else if (c>=15&&c<22){
        alert("Hoje está ameno, está fazendo "+c+"º");
    } else {
        alert("Hoje está calor, está fazendo "+c+"º");
    }
}