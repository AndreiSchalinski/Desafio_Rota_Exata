function enviarFormulario() {

    var nomeInformado = document.getElementById('campoNome').value;

    var nomeValidado = new RegExp("^[A-z]{4,}[ ]{1}[A-z]{4,}$");

    if (!nomeValidado.test(nomeInformado)) {
        alert("Campo vazio ou com caractere inválido, informe nome novamente!");
        document.getElementById('campoNome').focus();
        return false;
    }

    var senhaInformada = document.getElementById('campoSenha').value;

    var senhaValidada = new RegExp("^[0-9A-z]{6,}$");

    if (!senhaValidada.test(senhaInformada)) {
        alert("Campo vazio ou com caractere inválido, informe senha novamente!");
        document.getElementById('campoSenha').focus();
        return false;
    }

    if (document.formulario.idadeInformada[0].checked == false && document.formulario.idadeInformada[1].checked == false) {
        alert('Faltou informar sua idade!');
        return false;
    }

    if (document.formulario.opcoesGenero.selectedIndex == '') {
        alert('Faltou informar gênero!');
        return false;
    }

    if (document.getElementById('opcaoCheck').checked == false) {
        alert('Confirme se revisou formulário antes de enviar!')
        return false;
    }

    var xhr = new XMLHttpRequest();

    var url = 'data.json';

    xhr.open("GET", url, false);
    xhr.send()

    var coletora = xhr.response

    var valoresJSON = JSON.parse(coletora);

    let coletoraIdadeIndicada = 0;

    for (let index = 0; index < document.formulario.idadeInformada.length; index++) {
        if (document.formulario.idadeInformada[index].checked == true) {
            coletoraIdadeIndicada = document.formulario.idadeInformada[index].value;
        }
        
    }

    if (nomeInformado === valoresJSON.nome && senhaInformada === valoresJSON.senha &&
        coletoraIdadeIndicada === valoresJSON.idade && document.formulario.opcoesGenero.value == valoresJSON.genero) {

        alert(`${valoresJSON.nome}, você logou com sucesso!`);
        return true;

    } else {

        alert("Usuário não cadastrado, revise dados informados!");
        return false;

    }


}





