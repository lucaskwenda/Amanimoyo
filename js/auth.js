// auth.js

document.addEventListener('DOMContentLoaded', function() {
    verificaLogin();
});

function verificaLogin() {
    // Verifica se existe um token no localStorage e redireciona para a página de login caso não exista.
    const token = localStorage.getItem('userToken');
    if (!token) {
        // window.location.href = 'pages/login.html';
        return;
    }
      showUserBtnProfile();
}

function showUserBtnProfile() {
    const userProfileBtn = document.querySelector('.user-profile-btn');
    userProfileBtn.style.display = 'inline-block';
    const btnEntrar = document.getElementById('entrar')
    btnEntrar.style.display = 'none';
    console.log('Dados no localStorage:', localStorage.getItem('userData'));
}

const btnLogout = document.querySelector('.logout').addEventListener('click', logout);
function logout() {
    // localStorage.removeItem('userToken');
    // localStorage.removeItem('userData');
    localStorage.clear();
    window.location.href = '/Amanimoyo/pages/login.html';
}
