  // Código JavaScript anterior permanece o ~



document.addEventListener('DOMContentLoaded', function() {

    const userDate = localStorage.getItem('userData');
    const user = JSON.parse(userDate);
    const userAvatar = document.querySelector('.user-avatar');
    const primeiraLetra = user.nome.charAt(0).toUpperCase();
    userAvatar.innerHTML = primeiraLetra;	

}) 
        
     // Dark Mode
     const darkModeToggle = document.getElementById('darkModeToggle');
        
        // Verifica preferência salva
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        darkModeToggle.checked = savedTheme === 'dark';

        darkModeToggle.addEventListener('change', () => {
            const theme = darkModeToggle.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    // </script>/
    // <script>
        // Mantendo o mesmo JavaScript do código original
        const menuItems = document.querySelectorAll('.menu-item');
        const sections = document.querySelectorAll('.section');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const sectionId = item.getAttribute('data-section');
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === sectionId) {
                        section.classList.add('active');
                    }
                });
            });
        });

        // Funcionalidade da foto de perfil
        // const profilePhoto = document.querySelector('.profile-photo');
        // const fileInput = document.createElement('input');
        // fileInput.type = 'file';
        // fileInput.accept = 'image/*';

        // profilePhoto.addEventListener('click', () => {
        //     fileInput.click();
        // });
       
        // const userPhoto =  profilePhoto.querySelector('img')
        // fileInput.addEventListener('change', (e) => {
        //     if (e.target.files && e.target.files[0]) {
        //         const reader = new FileReader();
        //         reader.onload = (event) => {
        //            userPhoto.src = event.target.result;
                  
                   
        //         };
        //         reader.readAsDataURL(e.target.files[0]);  
        //         uploadUserPhoto()
        //     }
        // });

        // Funcionalidade de notificações
        const notificationBtn = document.querySelector('.notification-btn');
        notificationBtn.addEventListener('click', () => {
            document.querySelector('.notification-count').style.display = 'none';
            
            menuItems.forEach(item => {
                if(item.getAttribute('data-section') === 'notifications') {
                    item.click();
                }
            });
        });

        // Funcionalidade dos checkboxes de objetivos
        document.querySelectorAll('.goal-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                checkbox.classList.toggle('checked');
            });
        });

        // mandar a photo do usuario no servidor

     async function uploadUserPhoto(){
        const userEmail = JSON.parse(localStorage.getItem('userData'))
        
         // Pega a imagem do DOM
         const img = document.getElementById('user-photo');
            
         // Cria um canvas para converter a imagem
         const canvas = document.createElement('canvas');
         canvas.width = img.width;
         canvas.height = img.height;
         
         // Desenha a imagem no canvas
         const ctx = canvas.getContext('2d');
         ctx.drawImage(img, 0, 0);
         
         // Converte o canvas para blob
         canvas.toBlob(async (blob) => {
             // Cria o FormData e adiciona o blob como arquivo
             const formData = new FormData();
             formData.append('imagem', blob, 'imagem.jpg');
            //  console.log(userEmail)
           
             formData.append('id', JSON.stringify(userEmail.id))
             
             try {
                 console.log('Iniciando upload...');
                 const response = await fetch('http://localhost:3000/upload', {
                     method: 'POST',
                     body: formData
                 });
                 
                 const result = await response.text();
                 console.log('Resposta:', result);
             } catch (error) {
                 console.error('Erro no upload:', error);
             }
         }, 'image/jpeg'); // você pode mudar para 'image/png' se preferir 

     }

const btnEditarProfile = document.querySelector('.edit-profile-btn');



btnEditarProfile.addEventListener('click', () => {

    if (btnEditarProfile.textContent === 'Salvar') { 
                
    const userName = document.querySelector('.user-name');
    const userEmail = document.querySelector('.profile-email');
    const biografia = document.querySelector('.biografia');
    const userPhoneNumber = document.querySelector('.user-number');
    const userPassword = document.querySelector('.user-password');


    // Habilita os campos de entrada
    userName.disabled = true;
    userEmail.disabled = true;
    biografia.disabled = true;
    userPhoneNumber.disabled = true
    userPassword.disabled = true
    // Muda o texto do botão para "Salvar"
    btnEditarProfile.textContent = 'Editar Perfil';

    actualizarPerfil()
    }
    else {
        alert('Altere o campo que quer editar e click em salvar')   
        // Desabilita os campos de entrada
        const userName = document.querySelector('.user-name');
        const userEmail = document.querySelector('.profile-email');
        const biografia = document.querySelector('.biografia');
        const userPhoneNumber = document.querySelector('.user-number');
        const userPassword = document.querySelector('.user-password');

        userName.disabled = false;
        userEmail.disabled = false;
        biografia.disabled = false;
        userPhoneNumber.disabled = false
        userPassword.disabled = false

        // Muda o texto do botão de volta para "Editar"
        btnEditarProfile.textContent = 'Salvar';
    }
    // Se o botão não estiver em modo de edição, habilita os campos
    // Se o botão estiver em modo de edição, desabilita os campos

});



  // Função para gerar SHA-256 em JavaScript (usando CryptoJS)
function generateSHA256(password) {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex); // Retorna o hash em formato hexadecimal
}
async function actualizarPerfil(){


    const userFormFields = {
        name: document.querySelector('.user-name').value,
        email: document.querySelector('.profile-email').value,
        bio: document.querySelector('.biografia').value,
        phone: document.querySelector('.user-number').value,
        password: document.querySelector('.user-password').value,
        id: JSON.parse(localStorage.getItem('userData')).id
    };

     userFormFields.password = generateSHA256(userFormFields.password);


    if(!validateData()) {
        document.querySelector('.user-password').disabled = false;	
        document.querySelector('.user-number').disabled = false;	
        document.querySelector('.biografia').disabled = false;	
        document.querySelector('.profile-email').disabled = false;	
        document.querySelector('.user-name').disabled = false;	
        return;
    }


    try {
    const response = await fetch('http://localhost:4000/api/users/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userFormFields)
    });

    const data = await response.json();
    if (response.ok) {
      alert('Usuário atualizado com sucesso!');
    } else {
      alert(`Erro: ${data.message}`);
    }
  } catch (error) {
    alert('Erro ao conectar com o servidor.');
    console.error(error);
  }
    // Desabilita os campos de entrada
    document.querySelector('.user-password').disabled = true;
    document.querySelector('.user-number').disabled = true;
    document.querySelector('.biografia').disabled = true;
    document.querySelector('.profile-email').disabled = true;
    document.querySelector('.user-name').disabled = true;


    // Muda o texto do botão de volta para "Editar"
    btnEditarProfile.textContent = 'Editar Perfil';

}

function validateData() {
     
    const userName = document.querySelector('.user-name').value;
    const userEmail = document.querySelector('.profile-email').value;
    const biografia = document.querySelector('.biografia').value;
    const userPhoneNumber = document.querySelector('.user-number').value;
    const userPassword = document.querySelector('.user-password').value;
    
    if (userName.length < 5) {
        alert('O nome deve ter pelo menos 5 caracteres.');
        return false;
    }
  
    if (userPhoneNumber.length !== 9) {
        alert('O telefone deve ter 9 dígitos.');
        return false;
    }
    
   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        alert('Email inválido. Informe um email válido.') ;
        return false;
    }
    
    if (biografia.length < 10) {
       alert('A biografia deve ter pelo menos 10 caracteres.');
        return false;
    }

    if (userPassword.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return false;
    }

    return true;
}

         
          