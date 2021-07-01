function calculoFibonacci() {
    
    var valor_1;
    valor_1 = 1;
    var valor_2;
    valor_2 = 1;
    var valor_final;

    var digito = document.getElementById("digito_fibonacci").value;
        valor_final = valor_1 + valor_2;
        if(digito>=3){
            while(digito>=3){
                valor_final = valor_1 + valor_2;
                valor_1 = valor_2;
                valor_2 = valor_final;
                digito--;
            }
            alert("O digito de fibonacci que você pediu é: " + valor_final);
        } else {
            alert("O digito de fibonacci que você pediu é: 1");
        }
}