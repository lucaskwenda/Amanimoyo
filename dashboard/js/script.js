document.addEventListener('DOMContentLoaded', function() {

    // window.AuthSystem.protectPage();

      // Configurar o formulário de login
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.querySelector('.toggle-password');
    const loginBtn = document.querySelector('.login-btn');
    const spinner = document.querySelector('.spinner');
    const btnText = document.querySelector('.btn-text');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    // Function to validate email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Show loading animation
    function showLoading() {
        spinner.style.display = 'inline-block';
        btnText.textContent = 'Autenticando...';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.8';
        loginBtn.style.cursor = 'not-allowed';
    }
    
    // Hide loading animation
    function hideLoading() {
        spinner.style.display = 'none';
        btnText.textContent = 'Entrar';
        loginBtn.disabled = false;
        loginBtn.style.opacity = '1';
        loginBtn.style.cursor = 'pointer';
    }
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset error messages
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        
        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'O email é obrigatório';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Por favor, digite um email válido';
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate password
        if (passwordInput.value === '') {
            passwordError.textContent = 'A senha é obrigatória';
            passwordError.style.display = 'block';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres';
            passwordError.style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, simulate API request
        if (isValid) {
            showLoading();
            
            // Simulate API request (2 seconds delay)
            setTimeout(() => {
                hideLoading();
                
                // In a real scenario, you would check the response from the server
                // Here we are just simulating a successful login for demonstration

                const success = window.AuthSystem.handleLogin(emailInput.value, passwordInput.value);
                if (success) {
                    // Success - redirect to dashboard
                    alert('Login bem-sucedido! Redirecionando para o dashboard.');
                    // window.location.href = 'dashboard.html';
                } else {
                    // Error - display message
                    alert('Credenciais inválidas. Por favor, verifique seu email e senha.');
                }
            }, 2000);
        }
    });
});


// Usando o evento change (recomendado para checkboxes)
document.getElementById('remember').addEventListener('change', function() {
    const dataToSave = window.AuthSystem.seveDataLogin(emailInput.value, passwordInput.value);
    if(this.checked) {
        dataToSave(emailInput.value, passwordInput.value)
    } else {
        alert('Checkbox foi desmarcada');
    }
});

document.addEventListener('DOMContentLoaded', ()=>{
    localStorage.removeItem('authToken')
})











