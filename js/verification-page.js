 
 // Variáveis globais
 let serverCode = '';

     // Manipulação dos inputs
     const inputs = document.querySelectorAll('.code-input');
     const verifyBtn = document.getElementById('verifyBtn');
     const resendBtn = document.getElementById('resendBtn');
     const timerSpan = document.getElementById('timer');
     const successMessage = document.querySelector('.message.success');
     const errorMessage = document.querySelector('.message.error');

    
     let timer = 60;

     // Auto-focus e navegação entre inputs
     inputs.forEach((input, index) => {
         input.addEventListener('input', (e) => {
             if (e.target.value) {
                 if (index < inputs.length - 1) {
                     inputs[index + 1].focus();
                 }
             }
         });

         input.addEventListener('keydown', (e) => {
             if (e.key === 'Backspace' && !e.target.value && index > 0) {
                 inputs[index - 1].focus();
             }
         });
     });

     // Timer para reenvio
     function startTimer() {
         timer = 60;
         resendBtn.disabled = true;
         
         const interval = setInterval(() => {
             timer--;
             timerSpan.textContent = timer;
             
             if (timer === 0) {
                 clearInterval(interval);
                 resendBtn.disabled = false;
             }
         }, 1000);
     }

//         // Verificar código
     verifyBtn.addEventListener('click', () => {
         const enteredCode = Array.from(inputs).map(input => input.value).join('');
         
         if (enteredCode === serverCode) {
             successMessage.style.display = 'block';
             errorMessage.style.display = 'none';
             setTimeout(() => {
                 window.location.href = 'pages/user-profile.html';
             }, 2000);
         } else {
             errorMessage.style.display = 'block';
             successMessage.style.display = 'none';
         }
     });

     // Reenviar código
     resendBtn.addEventListener('click', async () => {
         verificationCode = generateVerificationCode();
         const userEmail = localStorage.getItem('userEmail');
         const userPhone = localStorage.getItem('userPhone');
         
         // Aqui você implementaria o envio real do código
         startTimer();
     });

     // Iniciar timer ao carregar a página
     startTimer();

 
 
 // Função para exibir mensagens
//  function showMessage(message, isSuccess) {
//      statusMessage.textContent = message;
//      statusMessage.className = isSuccess ? 'alert alert-success' : 'alert alert-error';
//  }
 
 // Evento para solicitar código
 document.addEventListener('DOMContentLoaded', async function(event) {
    //  event.preventDefault();
     
     const email = localStorage.getItem('userEmail');
     const name = localStorage.getItem('userName');
     const descrition = document.querySelector('.description');
     descrition.innerHTML = `Olá ${name},  Para sua segurança, enviamos um código de verificação para seu email.  <strong> ${email} </strong> e insira o código de verificação.`;
     
    //  showMessage('Enviando código...', true);
     
     try {
         const response = await fetch('https://amanimoyo-back.onrender.com/api/send-verification-code', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({ email, name }),
         });
         
         const data = await response.json();
         
         if (data.success) {
             // Guardar o código recebido do servidor para comparação
             serverCode = data.verificationCode;
             
             // Mostrar mensagem de sucesso
             console.log('Código enviado com sucesso! Verifique sua caixa de entrada.', true);
             
             // Mostrar seção de verificação
            //  verificationSection.style.display = 'block';
         } else {
             console.log(`Erro: ${data.message}`, false);
         }
     } catch (error) {
         console.error('Erro:', error);
         console.log('Ocorreu um erro. Por favor, tente novamente.', false);
     }
 });
 
//  // Evento para verificar código
//  verificationForm.addEventListener('submit', function(event) {
//      event.preventDefault();
     
//      const userCode = document.getElementById('verification-code').value;
     
//      if (userCode === serverCode) {
//          showMessage('Código verificado com sucesso!', true);
//          // Aqui você pode redirecionar ou mostrar o próximo passo
//      } else {
//          showMessage('Código inválido. Por favor, tente novamente.', false);
//      }
//  });
