function calculoSalario() {
    var  nome = document.getElementById("txtNome").value;
    var salario = document.getElementById("txtSalario").value;
    var gasto = (salario*30/100);
    alert(nome+ ", você poderá gastar somente "+ gasto + " por mês."); 
}
