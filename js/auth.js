// auth.js

const userDate = localStorage.getItem('userData');
const user = JSON.parse(userDate);
const userAvatar = document.querySelector('.user-avatar');
const primeiraLetra = user.nome.charAt(0).toUpperCase();

console.log(user.nome
)
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
    userAvatar.innerHTML = primeiraLetra;
    const btnEntrar = document.getElementById('entrar')
    btnEntrar.style.display = 'none';
    
}

const btnLogout = document.querySelector('.logout').addEventListener('click', logout);
function logout() {
    // localStorage.removeItem('userToken');
    // localStorage.removeItem('userData');
    localStorage.clear();
    //window.location.href = '/Amanimoyo/pages/login.html';
     window.location.href = './pages/login.html';
}
