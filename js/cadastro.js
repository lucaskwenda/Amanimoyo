let currentStep = 0
let stap = 1
const formSteps = document.querySelectorAll('.form-step')
let erroMessage = document.querySelector('.error-text');

const form = document.querySelector('form')





// steps
form.addEventListener('click', (e) => {
    const data = {
        email: document.getElementById('email').value,
        nome: document.getElementById('name').value,
        telefone: document.getElementById('phone').value,
        data_nascimento: document.getElementById('dataNascimento').value,
        genero: document.getElementById('genero').value,
        transtorno: document.getElementById('transtorno').value,
        biografia: document.getElementById('biografia').value,
        senha: document.getElementById('password').value,
    };
    console.log("Dados completos kenda:", data);
    if(!e.target.matches('[data-action]')) { return }
    const actions = {
        next() {
            if(!isValidInputs()) { return }
            if(stap === 1) {
                if(!validateDataInrealTimeStap1(data)) {
                    showPopup()
                    return;
            }
         } 
         else if(stap === 2){
            if(!validateDataInrealTimeStap2(data)) {
                showPopup()
                return;
            }
         }
         else if(stap === 3){
            if(validateData(data)) {
                showPopup()
                return;
            }
         }
            stap++
            currentStep++
        },
        prev() {
            currentStep--
        }
    }
    const action = e.target.dataset.action
    actions[action]()

    updateActiveStep()
    updateProgressStep()
})

// envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

// update steps
function updateActiveStep() {
    formSteps.forEach((step) => step.classList.remove('active'))
    formSteps[currentStep].classList.add('active')
}

const progressSteps = document.querySelectorAll('.step-progress [data-step]')
function updateProgressStep() {
    progressSteps.forEach((step, idx) => {
        step.classList.remove('active')
        step.classList.remove('done')

        if (idx < currentStep + 1) {
            step.classList.add('active')
        }

        if (idx < currentStep) {
            step.classList.add('done')
        }
    });
}

// validation
function isValidInputs() {
    const currentFormStep = formSteps[currentStep]
    const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

    return formFields.every((input) => input.reportValidity())
}

// animation
formSteps.forEach((formStep) => {
    function addHide() {
        formStep.classList.add('hide')
    }


    formStep.addEventListener('animationend', () => {
        addHide();
        formSteps[currentStep].classList.remove('hide')
    });
});

function showPassword(){
    const passwordInput = document.getElementById('password');
    const passwordCheck = document.querySelector('.checkbox');

    passwordCheck.checked ? passwordInput.type = 'text' : passwordInput.type = 'password';
    
}

  // Função para gerar SHA-256 em JavaScript (usando CryptoJS)
  function generateSHA256(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex); // Retorna o hash em formato hexadecimal
  }
//cadastro paciente front
document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // const formData = new FormData(e.target);
    // console.log("Valores do FormData:");
    // formData.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    // });
    // const data = Object.fromEntries(formData);
    // console.log("Objeto final:", data);
     // Pegando todos os campos manualmente
     
     const data = {
        email: e.target.email.value,
        nome: e.target.name.value,
        telefone: e.target.phone.value,
        data_nascimento: e.target.dataNascimento.value,
        genero: e.target.tipo_genero.value,
        transtorno: e.target.tipo_transtorno.value,
        biografia: e.target.biografia.value,
        // objetivos: e.target.objetivos.value,
        // tipo: e.target.tipo_paciente.value = 'paciente',
        senha: e.target.password.value

        // Gera o hash da senha
    };

    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userName', data.nome);
    
    console.log("Dados completos:", data);

    // chama uma função para validar os dados
     if (!validateData(data)) {
        showPopup()
         return;
     }
    // console.log("Dados do formulário:", data);

    data.senha = generateSHA256(data.senha);
    console.log(data.senha);

    try {
        const response = await fetch('https://amanimoyo-back.onrender.com/api/cadastropaciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
           // alert('Cadastro realizado com sucesso!');
            e.target.reset();
            window.location.href = '/Amanimoyo/pages/verification-page.html';
        } else {
            
            erroMessage.textContent = result.error || 'Erro ao cadastrar. Tente novamente.';
            erroMessage.style.color = 'red';
            showPopup();
        }
    } catch (error) {
        console.error('Erro:', error);
        erroMessage.textContent = 'Erro ao conectar ao servidor. Tente novamente.';
        erroMessage.style.color = 'red';
        showPopup();
    }
});


const telefoneInput = document.getElementById('phone');

  function limitarDigitos(input) {
    if (input.value.length > 9) {
      input.value = input.value.slice(0, 9);
         erroMessage.textContent = 'Limite de 9 dígitos atingido.';
         showPopup();
    }
  }
    telefoneInput.addEventListener('input', function() {
        // Limitar a quantidade de dígitos
        // Se o valor já tiver 9 dígitos, não permitir mais entradas
        limitarDigitos(telefoneInput);
    });



   
// Função para validar os dados do formulário
function validateData(data) {
     
    
    if (data.nome.length < 5) {
        erroMessage.textContent = 'O nome deve ter pelo menos 5 caracteres.';
        return false;
    }
  
    if (data.telefone.length !== 9) {
        erroMessage.textContent = 'O telefone deve ter 9 dígitos.';
        return false;
    }
    
   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        erroMessage.textContent = 'Email inválido. Informe um email válido.';
        return false;
    }
    if (data.data_nascimento === '') {
        erroMessage.textContent = 'Selecione uma data de nascimento.';
        return false;
    }
 
    if (data.genero === '') {
        erroMessage.textContent = 'Selecione um gênero.';
        return false;
    }
    if (data.transtorno === '') {
        erroMessage.textContent = 'Selecione um transtorno.';
        return false;
    }
   
    if (data.biografia.length < 10) {
        erroMessage.textContent = 'A biografia deve ter pelo menos 10 caracteres.';
        return false;
    }

    if (data.senha.length < 6) {
        erroMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return false;
    }

    return true;
}
// Função para validar os dados em tempo real
function validateDataInrealTimeStap1(data) {
    if (data.nome.length < 5) {
        erroMessage.textContent = 'O nome deve ter pelo menos 5 caracteres.';
        return false;
    }
  
    if (data.telefone.length !== 9) {
        erroMessage.textContent = 'O telefone deve ter 9 dígitos.';
        return false;
    }
    
   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        erroMessage.textContent = 'Email inválido. Informe um email válido.';
        return false;
    }
    return true;
    

}
function validateDataInrealTimeStap2(data){
    const hoje = new Date();
    const dataNascimento = new Date(data.data_nascimento);
  
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    
  
    if (idade < 12 || idade > 60) {
        // erroMessage.style.textAlign = 'center'     
        erroMessage.textContent = 'para proseguir, a sua idade deve estár entre 12 e 60 anos. para mais informações contacta o nosso suporte';
        return false;
    } else {/*tudo ok*/}

    if (data.data_nascimento === '') {
            erroMessage.textContent = 'Selecione uma data de nascimento.';
            return false;
        }
     
        if (data.genero === '') {
            erroMessage.textContent = 'Selecione um gênero.';
            return false;
        }
        if (data.transtorno === '') {
            erroMessage.textContent = 'Selecione um transtorno.';
            return false;
        }

        return true;
}


    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const confirmButton = document.getElementById('confirmButton');
    const errorItems = document.querySelectorAll('.error-item');
    
    function showPopup() {
        // Mostrar overlay
        overlay.classList.add('show-overlay');
        
        // Mostrar popup com atraso para melhor efeito visual
        setTimeout(() => {
            popup.classList.add('show-popup');
            
            // Animar itens de erro sequencialmente
            errorItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('error-animate');
                }, 100 + (index * 120));
            });
        }, 100);
    }
    
    function hidePopup() {
        popup.classList.remove('show-popup');
        
        // Resetar animações dos itens de erro
        errorItems.forEach(item => {
            item.classList.remove('error-animate');
        });
        
        // Remover overlay após animação do popup
        setTimeout(() => {
            overlay.classList.remove('show-overlay');
        }, 300);
    }
    
    // Event listeners
    closePopupButton.addEventListener('click', hidePopup);
    confirmButton.addEventListener('click', hidePopup);
    
    // Fechar ao clicar fora do popup
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            hidePopup();
        }
    });
    
    // Fechar com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('show-overlay')) {
            hidePopup();
        }
    });

