

// Elementos do DOM
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-form');
    const verificationForm = document.getElementById('verification-form');
    const successMessage = document.getElementById('success-message');
    const recoveryForm = document.getElementById('recovery-form');
    const codeForm = document.getElementById('code-form');
    const errorMessage = document.getElementById('error-message');
    const verificationError = document.getElementById('verification-error');
    const loading = document.getElementById('loading');
    const verifyLoading = document.getElementById('verify-loading');
    const backToEmail = document.getElementById('back-to-email');
    const resendCode = document.getElementById('resend-code');
    
    // Armazenar informações do usuário
    let userData = {
      email: '',
      token: ''
    };
    
    // Função real para verificar email no banco MySQL
    function checkEmailExists(email) {
      loading.style.display = 'block';
      
      return fetch('http://localhost:3000/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na comunicação com o servidor');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error(error.message || 'Falha na verificação de email');
      })
      .finally(() => {
        loading.style.display = 'none';
      });
    }
    
    // Função para enviar código de verificação
    function sendVerificationCode(email) {
      return fetch('http://localhost:3000/api/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao enviar código de verificação');
        }
        return response.json();
      });
    }
    
    // Função para verificar o código
    function verifyCode(code, email) {
      verifyLoading.style.display = 'block';
      
      return fetch('http://localhost:3000/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code, email })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na verificação do código');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error(error.message || 'Falha na verificação do código');
      })
      .finally(() => {
        verifyLoading.style.display = 'none';
      });
    }
    
    // Função para mostrar mensagem de erro
    function showError(element, message) {
      element.textContent = message;
      element.style.display = 'block';
      
      // Esconde a mensagem após 5 segundos
      setTimeout(() => {
        element.style.display = 'none';
      }, 5000);
    }
    
    // Função para alternar entre as seções
    function showSection(section) {
      // Esconde todas as seções
      emailForm.style.display = 'none';
      verificationForm.style.display = 'none';
      successMessage.style.display = 'none';
      
      // Mostra a seção desejada
      section.style.display = 'block';
      
      // Anima a entrada da seção
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 10);
    }
    
    // Event Listeners
    recoveryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      userData.email = email;
      
      // Mostra indicador de carregamento
      loading.style.display = 'block';
      
      // Verifica se o email existe no banco
      checkEmailExists(email)
        .then(response => {
          if (response.exists) {
            // Se o email existir, envia o código de verificação
            return sendVerificationCode(email);
          } else {
            throw new Error('Email não encontrado em nosso sistema.');
          }
        })
        .then(response => {
          // Armazena o token para verificação futura (se necessário)
          if (response.token) {
            userData.token = response.token;
          }
          
          // Avança para o formulário de verificação
          showSection(verificationForm);
        })
        .catch(error => {
          showError(errorMessage, error.message);
        })
        .finally(() => {
          loading.style.display = 'none';
        });
    });
    
    codeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const code = document.getElementById('code').value;
      
      // Mostrar indicador de carregamento
      verifyLoading.style.display = 'block';
      
      // Verifica o código
      verifyCode(code, userData.email)
        .then(response => {
          if (response.success) {
            // Avança para a mensagem de sucesso
            showSection(successMessage);
          } else {
            throw new Error(response.message || 'Código de verificação inválido.');
          }
        })
        .catch(error => {
          showError(verificationError, error.message);
        });
    });
    
    // Botão "Voltar" no formulário de verificação
    backToEmail.addEventListener('click', function(e) {
      e.preventDefault();
      showSection(emailForm);
    });
    
    // Botão "Reenviar código"
    resendCode.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Reenvia o código
      sendVerificationCode(userData.email)
        .then(response => {
          showError(verificationError, 'Um novo código foi enviado para seu email.');
          
          // Desabilita o botão temporariamente
          this.textContent = 'Código enviado';
          this.style.pointerEvents = 'none';
          this.style.opacity = '0.5';
          
          // Reativa após 60 segundos
          setTimeout(() => {
            this.textContent = 'Reenviar código';
            this.style.pointerEvents = 'auto';
            this.style.opacity = '1';
          }, 60000);
        })
        .catch(error => {
          showError(verificationError, error.message);
        });
    });
    
    // Inicializa com o formulário de email
    showSection(emailForm);
  });