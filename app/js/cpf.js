var inputsCEP = $('#nome, #consultaID','#teste');
var validacep = /^[0-11]{8}$/;

$('#cpf').on('focusout', function consultaCPF() {

    var cpf = $('#cpf').val().replace(/\D/g, '');
    if (TestaCPF(cpf) == true){
        $.getJSON('https://api.cpfcnpj.com.br/5d7a6e8dcda547e285708b2780cc87c7/1/json/'+cpf , function(data) {
    
    
            $("#nome").val(`${data.nome}`);
            $("#consultaID").val(`${data.consultaID}`);


        });
    } else {
        alert("CPF Inválido");
        location.reload();
    }
});

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
	if (strCPF == "00000000000") return false;
    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
//var strCPF = "12345678909";
//alert(TestaCPF(cpf));



function limpa_formulário_cpf(alerta) {
  if (alerta !== undefined) {
    alert(alerta);
  }

  inputsCEP.val('');
}

