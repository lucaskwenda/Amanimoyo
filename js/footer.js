// btnChat.addEventListener('click', handleChatButtonClick)
// Adicionar o evento de clique ao botão
//const base = '/https://lucaskwenda.github.io/Amanimoyo/';
const chatButton = document.querySelectorAll('.btn-chat');

document.addEventListener('DOMContentLoaded', function() {
    
    const chatButton1 = document.querySelector('#IA-Btn');
    if (chatButton) {
        chatButton.forEach(button => {
            button.addEventListener('click', handleChatButtonClick);
        });
      
    }
    if (chatButton1) {
        chatButton1.addEventListener('click', handleChatButtonClick);
    }
  });
  // Função para verificar se o usuário está logado
  function isUserLoggedIn() {
    // Aqui você pode implementar sua própria lógica de verificação
    // Por exemplo, verificar se existe um token no localStorage
    if (!localStorage.getItem('userToken')) {
        return false;
    }
    return true;
  }
  // Função para redirecionar para a página de login
  function redirectToLogin() {
    // Salva a página do chat como destino após o login
    sessionStorage.setItem('redirectAfterLogin', '../Amanimoyo/chat/chatIA.htmll');
    // Redireciona para a página de login
       window.location.href = '../Amanimoyo/pages/login.html';
  }
  // Função para redirecionar para o chat
  function redirectToChat() {
    window.location.href = '../Amanimoyo/chat/chatIA.html';
        
  }
  
  function handleChatButtonClick() {
    // Verifica se o usuário está logado
    if (isUserLoggedIn()) {
        // Se estiver logado, vai direto para o chat
        redirectToChat();
    } else {
        // Se não estiver logado, redireciona para o login
        redirectToLogin();
    }
  }
  
  // Na página de login, após login bem-sucedido
  export function onSuccessfulLogin() {
    // Salva o token do usuário
    localStorage.setItem('userToken', 'seu-token-aqui');
    
    // Verifica se existe um redirecionamento pendente
    const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
    if (redirectUrl) {
        // Remove o redirecionamento pendente
        sessionStorage.removeItem('redirectAfterLogin');
        // Redireciona para a URL salva
        window.location.href = redirectUrl;
    }
  }
