
const erroData = document.querySelector('.erro-date')
const erroLogin = document.querySelector('.erro-login')
const erroConsulta = document.querySelector('.erro-consulta')
const erroDataInfo = document.querySelector('.erro-data-info')  
const agentarConsultaBtn = document.querySelector('#btn-agendar-consulta') 
const nomeUser = document.getElementById('nomeUser');
const emailUser = document.getElementById('emailUser');
const sintomas = document.querySelector('#sintomas')

setTimeout(() => {
    
        if(localStorage.getItem('userData')){
            const userDate = JSON.parse(localStorage.getItem('userData'));
            
          
            console.log(userDate.nome)
            nomeUser.value = userDate.nome;
            emailUser.value = userDate.email;
    }
   
}, 10000);



// agentarConsultaBtn.addEventListener('click', (e) => {

//     e.preventDefault();
//     const form = document.getElementById('appointmentForm');
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data)
//     if(!validateData(data)){
//         return
//     }

// })

document.getElementById('appointmentForm').addEventListener('submit', async(e) => {
 
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  

    if(!validateData(data)){
        return
    }

    const userId = JSON.parse(localStorage.getItem('userData'))
    data.usuario_Id = userId.id;
    
    // console.log(userId.id);  // Log the form data for debugging
    const response = await fetch('https://amanimoyo-back.onrender.com/api/consultas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        // alert('Consulta agendada com sucesso!');
        showPopupSuccess(data); // Show the success pop-up with the appointment data
        form.reset();
        localStorage.setItem('horas', JSON.stringify(data.data));
        localStorage.setItem('horario', JSON.stringify(data.horario));
        localStorage.setItem('transtorno', JSON.stringify(data.transtorno))
        localStorage.setItem('consulta', JSON.stringify(true));
    } else {
     
        erroConsulta.style.display = 'flex'
        showPopup();
        
    }
})

nomeUser.addEventListener('input', () => {
    if (nomeUser.value.length >= 5) {
        erroData.style.display = 'none';
    } else {
        erroData.style.display = 'flex';
        erroDataInfo.textContent = 'O nome deve ter pelo menos 5 caracteres.';
    }
})  
emailUser.addEventListener('input', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUser.value)) {
        erroData.style.display = 'none';
    } else {
        erroData.style.display = 'flex';
        erroDataInfo.textContent = 'Email inválido. Informe um email válido.';
    }
})

sintomas.addEventListener('input', ()=>{
    if(sintomas.value.length < 10){
        erroData.style.display = 'flex'
        erroDataInfo.textContent = 'Descreva os sintomas com pelo menos 10 caracteres.';
    }else{
        erroData.style.display = 'none';
    }
})
   
// Função para validar os dados do formulário
function validateData(data) {

    const inpudate = document.querySelector('#date').value;

    console.log(inpudate)

      if (!inpudate) {
        erroDataInfo.textContent = 'selecione uma data para a consulta';
        erroData.style.display = 'flex';
        showPopup();
        return false;
      }

      const dataConsulta = new Date(inpudate);
      const ano = dataConsulta.getFullYear();

      if (ano !== 2025) {
        erroDataInfo.textContent = ' A data deve estar dentro do ano corrente (2025)';
        erroData.style.display = 'flex';
        showPopup();
        return false;
      }
     
    if(!localStorage.getItem('userData')){
        erroLogin.style.display = 'flex';    
        showPopup();
        return false
    }
    
    if (data.nomeUser.length < 5) {
        erroData.style.display = 'flex'
        erroDataInfo.textContent = 'O nome deve ter pelo menos 5 caracteres.';
        showPopup();
        // erroMessage.textContent = 'O nome deve ter pelo menos 5 caracteres.';
        return false;
    }
  
    
   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.emailUser)) {
         erroData.style.display = 'flex'
         erroDataInfo.textContent = 'Email inválido. Informe um email válido.';
        showPopup();
        // erroMessage.textContent = 'Email inválido. Informe um email válido.';
        return false;
    }
    if (data.data.length < 0) {
        alert(`erro no data`)
        // erroMessage.textContent = 'Selecione uma data de nascimento.';
        return false;
    }
 
    if (data.transtorno === '') {
        erroData.style.display = 'flex'
        erroDataInfo.textContent = 'Selecione um transtorno.';
        showPopup();
        // erroMessage.textContent = 'Selecione um transtorno.';
        return false;
    }
    if(data.horario === ''){
        erroData.style.display = 'flex'
        erroDataInfo.textContent = 'Selecione um horário.';
        showPopup();
        return false
    }
    if(data.sintomas.length < 10){
        erroData.style.display = 'flex'
        erroDataInfo.textContent = 'Descreva os sintomas com pelo menos 10 caracteres.';
        showPopup();
        return false
    }
    

    if(localStorage.getItem('consulta')){
        const consulta = JSON.parse(localStorage.getItem('consulta'));
        if(consulta){
            erroConsulta.style.display = 'flex'
            showPopup();
            return false
        }
    }


    return true;
}

 // Selecionando elementos DOM
 const successPopup = document.getElementById('successPopup');
 const closePopupBtn = document.getElementById('closePopup');
 const triggerPopupBtn = document.getElementById('triggerPopup');

        // Função para mostrar o pop-up
        function showPopupSuccess(appointmentData) {
            // Atualizar os dados da consulta se forem fornecidos
            if (appointmentData) {
                document.getElementById('appointmentDate').textContent = appointmentData.data;
                document.getElementById('appointmentTime').textContent = appointmentData.horario;
                document.getElementById('appointmentSpecialty').textContent = appointmentData.transtorno;
            }

            // Mostrar o pop-up com animação
            successPopup.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impedir rolagem da página
        }

        // Função para fechar o pop-up
        function closePopup() {
            successPopup.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar rolagem da página
        }

        // Adicionar event listeners
        closePopupBtn.addEventListener('click', closePopup);
        
        // Fechar o pop-up ao clicar fora dele (apenas no overlay)
        successPopup.addEventListener('click', function(event) {
            if (event.target === successPopup) {
                closePopup();
            }
        });

        // // Botão de demonstração
        // triggerPopupBtn.addEventListener('click', function() {
        //     // Exemplo de dados da consulta para demonstração
        //     const demoData = {
        //         data: formatDate(new Date()),
        //         horario: '14:30',
        //         especialidade: 'Psicologia'
        //     };
        //     showPopup(demoData);
        // });

        // // Função para formatar a data
        // function formatDate(date) {
        //     const day = date.getDate().toString().padStart(2, '0');
        //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
        //     const year = date.getFullYear();
        //     return `${day}/${month}/${year}`;
        // }


          // DOM Elements
        //   const showPopupBtn = document.getElementById('showPopupBtn');
          const popupOverlay = document.getElementById('popupOverlay-erro');
          const closePopupBtnErro = document.getElementById('closePopupBtn-erro');
          const resolveBtn = document.getElementById('resolveBtn');
  
          // Show popup with animation
          function showPopup() {
              popupOverlay.classList.add('active');
              document.body.style.overflow = 'hidden'; // Prevent scrolling behind popup
          }
  
          // Hide popup with animation
          function hidePopup() {
              popupOverlay.classList.remove('active');
              setTimeout(() => {
                  document.body.style.overflow = 'auto'; // Re-enable scrolling
              }, 300);
          }
  
        
          
          closePopupBtnErro.addEventListener('click', hidePopup);
          
          resolveBtn.addEventListener('click', () => {
              hidePopup();
          });
  
          // Close popup when clicking outside
          popupOverlay.addEventListener('click', (e) => {
              if (e.target === popupOverlay) {
                  hidePopup();
              }
          });
  
          // Close popup with ESC key
          document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
                  hidePopup();
              }
          });
  
          // Optional: Auto-show popup after a delay (uncomment to enable)
          /*
          window.addEventListener('load', () => {
              setTimeout(() => {
                  showPopup();
              }, 3000); // Show after 3 seconds
          });
          */


