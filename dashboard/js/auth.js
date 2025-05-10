// auth.js - Sistema de autenticação com redirecionamento entre páginas

// Função para verificar se o usuário está autenticado
function isAuthenticated() {
    return localStorage.getItem('authToken') !== null;
}

// Função para processar o login e redirecionar para o dashboard
// function handleLogin(email, password) {
//     // Em um ambiente real, você faria uma requisição para sua API
//     // para validar as credenciais do usuário

//      // Criar um token fictício
//      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.abcdefghijklmnopqrstuvwxyz';
        
    

//     // Simulação de autenticação
//     if (email === 'admin@saudemental.com' && password === 'admin123') {
        
//         // Redirecionar para o dashboard
//         // Armazenar a página original que o usuário tentou acessar (se houver)
//          // Armazenar o token e informações do usuário
//      localStorage.setItem('authToken', token);
//      localStorage.setItem('userName', 'Administrador');
//      localStorage.setItem('userEmail', email);
//         const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'dashboard.html';
//         localStorage.removeItem('redirectAfterLogin'); // Limpar após uso
        
//         window.location.href = redirectUrl;
//         return true;
//     }
    
//     return false;
// }

// Função para fazer logout
function logout() {
    // Remover token e informações do usuário
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    
    // Redirecionar para a página de login
    window.location.href = 'index.html';
}

// Função para proteger páginas
function protectPage() {
    // Verificar se estamos na página de login
    const isLoginPage = window.location.pathname.includes('index.html');
    
    // Se não estamos na página de login e o usuário não está autenticado
    if (!isLoginPage && !isAuthenticated()) {
        // Armazenar a URL atual para redirecionar de volta após o login
        localStorage.setItem('redirectAfterLogin', window.location.href);
        
        // Redirecionar para a página de login
        window.location.href = 'index.html';
    }
    
    // Se estamos na página de login e o usuário já está autenticado
    if (isLoginPage && isAuthenticated()) {
        // Redirecionar para o dashboard
        window.location.href = 'dashboard.html';
    }
}

// function seveDataLogin(email, password) {
    
// }
// Exportar as funções para uso em outros arquivos
window.AuthSystem = {
    isAuthenticated,
    // handleLogin,
    logout,
    protectPage,
};


function generateSHA256(password) {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex); // Retorna o hash em formato hexadecimal
}


  document.getElementById('login-form').addEventListener('submit', async (e) => {

    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const mensagemErro = document.getElementById('mensagemErro');

    // Gera o hash da senha
    const hashedPassword = generateSHA256(password);
    console.log('Enviando para o servidor:', { email, password });
    
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Erro ao fazer login');
        }
        
        // Salva o token no localStorage
        localStorage.setItem('authToken', 'sdfgfcdffgtfdfrtrdfrtefg');
        localStorage.setItem('userData', JSON.stringify(data.usuario));
        console.log(data.usuario)

        
        // Chama a função de login bem-sucedido
      window.location.href = 'http://127.0.0.1:5501/dashboard/dashboard.html';
        
    } catch (error) {
        // mensagemErro.textContent = error.message;
        // mensagemErro.style.color = 'red';
       showPopup();
    }
});
