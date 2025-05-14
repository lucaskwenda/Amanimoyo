const user = JSON.parse(localStorage.getItem('userData'))


document.addEventListener('DOMContentLoaded', () => {
   fetchProfilePicture(user.id)
   buscarUsuario(user.id)
});

// Frontend (client.js)
async function fetchProfilePicture(userId) {
    // console.log(userId)
    try {
        const response = await fetch(`https://amanimoyo-back.onrender.com/profile-picture/${userId}`);
        if (!response.ok) {
            throw new Error('Falha ao buscar imagem');
        }
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        // const imgElement = document.getElementById('user-photo');
        // imgElement.src = imageUrl;
    } catch (error) {
        console.error('Erro:', error);
        // document.getElementById('user-photo').alt = 'Imagem não encontrada';
    }
}



async function buscarUsuario(userId) {
    // const userId = document.getElementById('userId').value;
    // if (!userId) {
    //     alert('Por favor, insira um ID de usuário');
    //     return;
    // }

    try {
        const response = await fetch(`https://amanimoyo-back.onrender.com/api/buscarUsuario/${userId}`);
        const data = await response.json();

        if (response.ok) {
            // Mostra no console conforme solicitado
            console.log('Informações do usuário:', data);

            showUserInformation(data);

            // Também mostra na página para melhor visualização
            // document.getElementById('resultado').innerHTML = `
            //     <h2>Informações do Usuário:</h2>
            //     <pre>${JSON.stringify(data, null, 2)}</pre>
            // `;
        } else {
            throw new Error(data.error || 'Erro ao buscar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

function showUserInformation(user) {
    localStorage.setItem('senha', '1234')
    let senha = null
    senha = localStorage.getItem('senha', JSON.stringify(senha))
   userName = document.querySelector('.profile-name');
   userEmail = document.querySelector('.profile-email');
   username = document.querySelector('.user-name');
   userBiografia = document.querySelector('.biografia');
   const userPhoneNumber = document.querySelector('.user-number');
    const userPassword = document.querySelector('.user-password');


    userName.innerHTML = user.nome;
    username.value = user.nome;
    userEmail.value = user.email;
    userBiografia.value = user.biografia;
    userPhoneNumber.value = user.phone;
    userPassword.value = senha;

}
