 /* Rafael Henrique Braga de Morais */
 function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name == "") {
        alert("Por favor, preencha o campo de nome.");
        return false;
    }

    if (email == "") {
        alert("Por favor, preencha o campo de e-mail.");
        return false;
    }

    if (message == "") {
        alert("Por favor, preencha o campo de mensagem.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
