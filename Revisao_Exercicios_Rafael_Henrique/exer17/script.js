/* Rafael Henrique Braga de Morais */

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'admin';
    const validPassword = '123456';

    if (username === validUsername && password === validPassword) {
     
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login realizado com sucesso!');
     
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
}

window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        alert('Você já está logado!');
    
    }
}
