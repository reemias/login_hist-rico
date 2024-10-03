document.getElementById('loginButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (password === 'admin123') {
        window.location.href = 'https://reemias.github.io/historico/'; // Substitua pelo link desejado
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});
