
//De acordo com a suite escolhida o hospede já tem marcados as refeições

var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1],document.forms[0].elements[2]];

for (var i=[0]; i<suiteEscolhida.length; i++){

    suiteEscolhida[i].addEventListener('change', function(){
        var almoco = document.forms[0].elements[11]
        var janta  = document.forms[0].elements[12]

        almoco.checked = false;
        janta.checked = false;

        if (suiteEscolhida[0].checked){
            almoco.checked = true;
            janta.checked = true;
        }

        if(suiteEscolhida[1].checked){
            almoco.checked = true;
            janta.checked = false;
        }
})

}




//Nome Completo

nome = document.getElementById('nome');

function validaNome(){
    var expNome = /^([^0-9]){3,50}$/g;
    var nomeValido = expNome.exec(nome.value);
    var msgNome = '';

    if (!nomeValido){
        msgNome = 'O nome precisa ser completo e sem números.';

    }

    nome.setCustomValidity(msgNome);
}


//E-mail

email = document.querySelector('#email');

email.addEventListener('blur',validaEmail(),false,);

function validaEmail(){
    var expEmail = /^([\w].{3,20})@([\w].+)\.([\w]{3,6})$/g;
    var emailVerificado = expEmail.exec(email.value);
    var msgEmail = '';

    if (!emailVerificado){
        msgEmail = 'Digite um e-mail válido.';

    }
}




//Tratando do CPF

cpf  = document.querySelector('#cpf');

cpf.addEventListener('blur', (eventoBrabo)=>{
    verificaCpf(eventoBrabo.target);

})

function verificaCpf(input) {
    var expCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
    var cpfVerificado = expCpf.exec(input.value);
    var msgCpf = '';

    if (!cpfVerificado){
        msgCpf = 'Digite o CPF corretamente.';

    }

    input.setCustomValidity(msgCpf);
    input.value = formataCpf(input.value, expCpf);

    }

    function formataCpf(valorCpf, expCpf){
        var cpfFormatado = valorCpf.replace(expCpf, function(vregex,p1,p2,p3,p4)
        {return p1 + '.' + p2 + '.' + p3 + '-' + p4;
        })

        return cpfFormatado;
    }


//Data de Nascimento - Uma outra forma de declarar eventos, utilizando Arrow Functions



//Telefone



//Senha



//Mostra Senha


//Termos de Privacidade


//Botão de Envio sem termo exibe caixa de alerta
