function calcularFatorial(){


    var resultado;
    var first;

    var fatorial = document.getElementById("fatorial").value;

    if (fatorial == 0) {

        alert("O fatorial de " +fatorial+ " é 1")
    }else{ 
     
        resultado = fatorial;
        first = fatorial - 1;
        for (var i = first; i > 1; i--) {
            resultado *= i;
        }
          alert("O fatorial de " +fatorial+ " é " +resultado);
    }
}
 
