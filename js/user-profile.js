  // Código JavaScript anterior permanece o mesmo
        
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
        const profilePhoto = document.querySelector('.profile-photo');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        profilePhoto.addEventListener('click', () => {
            fileInput.click();
        });
       
        const userPhoto =  profilePhoto.querySelector('img')
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = (event) => {
                   userPhoto.src = event.target.result;
                  
                   
                };
                reader.readAsDataURL(e.target.files[0]);  
                uploadUserPhoto()
            }
        });

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

         
          