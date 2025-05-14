import { onSuccessfulLogin } from './footer.js';

  // Função para gerar SHA-256 em JavaScript (usando CryptoJS)
function generateSHA256(password) {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex); // Retorna o hash em formato hexadecimal
}


  document.getElementById('loginForm').addEventListener('submit', async (e) => {

    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('senha', password);

    // const mensagemErro = document.getElementById('mensagemErro');

    // Gera o hash da senha
    const hashedPassword = generateSHA256(password);
    console.log('Enviando para o servidor:', { email, password });
    
    try {
        const response = await fetch('https://amanimoyo-back.onrender.com/api/login', {
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
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data.usuario));
        console.log(data.usuario)

        
        // Chama a função de login bem-sucedido
      //window.location.href = '/Amanimoyo/index.html';
      window.location.href = '../index.html';
        onSuccessfulLogin();
        
    } catch (error) {
        // mensagemErro.textContent = error.message;
        // mensagemErro.style.color = 'red';
       showPopup();
    }
});

const btnClosePopUp = document.querySelector('.popup-button');
btnClosePopUp.addEventListener('click', hidePopup);
function showPopup() {
  document.getElementById('errorOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hidePopup() {
  document.getElementById('errorOverlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Fechar popup ao clicar fora dele
document.getElementById('errorOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    hidePopup();
  }
});

// Fechar popup com tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('errorOverlay').style.display === 'block') {
    hidePopup();
  }
});

function redirectToPerfil()  {
 // window.location.href = '/Amanimoyo/pages/user-profile.html';
   window.location.href = '/pages/user-profile.html';

}
