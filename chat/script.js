const emojiBtn = document.querySelector('#emoji-btn');
const emotionPicker = document.querySelector('.emotion-picker');
const messageInputemoji = document.querySelector('.message-input');
const emotionItems = document.querySelectorAll('.emotion-item');
const exitChatBtn = document.querySelector('.exitchat-btn');
var emojiState = false;
const userName = document.querySelector('.user-name');
const userData = JSON.parse(localStorage.getItem('userData'));

console.log(userData)

    if(userData)
        userName.innerHTML = userData.nome;

 // Estrutura de dados para armazenar conversas
 const ChatStore = {
    // Chave para localStorage
    STORAGE_KEY: 'mental_health_chat_history',
   
    
    // Inicializar store
    init() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (!stored) {
            const initialData = {
                conversations: {},
                lastSession: null
            };
            this.saveToStorage(initialData);
            return initialData;
        }
        return JSON.parse(stored);
    },
    
    // Salvar no localStorage
    saveToStorage(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },
    
    // Adicionar nova mensagem
    addMessage(message, isUser) {
        const data = this.init();
        const today = new Date().toLocaleDateString();
        
        if (!data.conversations[today]) {
            data.conversations[today] = [];
        }
        
        data.conversations[today].push({
            content: message,
            isUser,
            timestamp: new Date().toISOString()
        });
        
        data.lastSession = today;
        this.saveToStorage(data);
        
        return data;
    },
    
    // Carregar conversas
    loadConversations() {
        return this.init();
    },
    
    // Limpar histórico
    clearHistory() {
        localStorage.removeItem(this.STORAGE_KEY);
       
        return this.init();
    }
};

function showExitConfirmation() {
    const popup = document.getElementById('exitPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideExitConfirmation() {
    const popup = document.getElementById('exitPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function confirmExit() {
    // Aqui você pode adicionar a lógica para sair do chat
  hideExitConfirmation();
  window.location.href = '../index.html';
}

// Fechar o popup se clicar fora dele
document.getElementById('exitPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        hideExitConfirmation();
    }
});

function showClearConfirmation() {
    const popup = document.getElementById('clearPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideClearConfirmation() {
    const popup = document.getElementById('clearPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function confirmClear() {
    // Aqui você pode adicionar a lógica para limpar o chat
    ChatStore.clearHistory();
    loadChatHistory();
    hideClearConfirmation();
}

// Fechar o popup se clicar fora dele
document.getElementById('clearPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        hideClearConfirmation();
    }
});
emojiBtn.addEventListener('click', () => {
    toggleImojes()
});

function toggleImojes(){
    
    if(!emojiState){
        emotionPicker.classList.remove('hide');
        emotionPicker.classList.toggle('visible');
        emojiState = ! emojiState
        emotionPicker.style.cssText =`
            display: grid;
        `
    }else{
        emotionPicker.classList.remove('visible');
        emotionPicker.classList.toggle('hide');
        emojiState = ! emojiState
        setTimeout(()=> emotionPicker.style.display = 'none', 290)
    }
}


emotionItems.forEach(item => {
    item.addEventListener('click', () => {
        const emoji = item.querySelector('span').textContent;
        
        messageInputemoji.value += `${emoji}`;
        // emotionPicker.classList.remove('visible');

    });
});


  // Carregar histórico ao iniciar
  function loadChatHistory() {
    const data = ChatStore.loadConversations();
    messagesContainer.innerHTML = '';
    // chatHistory.innerHTML = '';
    
    // Se não houver conversas anteriores, mostrar mensagem inicial
    if (Object.keys(data.conversations).length === 0) {
        addMessage("Olá! Eu sou seu assistente virtual de saúde mental. Como posso ajudar você hoje?", false);
        return;
    }

    // Carregar conversas do dia atual
    const today = new Date().toLocaleDateString();
    if (data.conversations[today]) {
        data.conversations[today].forEach(msg => {
            addMessageToUI(msg.content, msg.isUser, new Date(msg.timestamp));
        });
    } else {
        addMessage("Olá! Eu sou seu assistente virtual de saúde mental. Como posso ajudar você hoje?", false);
    }

    // Atualizar sidebar com datas das conversas
    Object.keys(data.conversations).reverse().forEach(date => {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'chat-date';
        dateDiv.textContent = date;
        // chatHistory.appendChild(dateDiv);
    });
}


class ChatApp {
    constructor() {
        this.messages = [];
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;

        this.messageInput = document.getElementById('messageInput');
        this.recordButton = document.getElementById('voice-input-btn');
        this.chatMessages = document.getElementById('messages');
        this.sendBtn = document.getElementById('sendButton');
        this.clearChatButton = document.getElementById('clearChat');

        this.setupEventListeners();
        this.loadMessages();
}
setupEventListeners(){
    this.recordButton.addEventListener('click', () => this.toggleRecording());
    this.recordButton.addEventListener('touchstart', () =>{
this.toggleRecording()});
    this.clearChatButton.addEventListener('click', () =>{
        localStorage.removeItem('chatMessages')
    })
} 


async toggleRecording(event) {


    if (!this.isRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.startRecording(stream);
        } catch (err) {
            console.error('Erro ao acessar o microfone:', err);
            alert('Erro ao acessar o microfone. Verifique as permissões.');
        }
    } else {
        this.stopRecording();
    }
}

startRecording(stream) {
    this.audioChunks = [];
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.addEventListener('dataavailable', (event) => {
        this.audioChunks.push(event.data);
    });

    this.mediaRecorder.addEventListener('stop', async () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        const base64Audio = await this.blobToBase64(audioBlob);
        this.saveAudioMessage(base64Audio);
        stream.getTracks().forEach(track => track.stop());
    });

    this.mediaRecorder.start();
    this.isRecording = true;
    this.recordButton.classList.add('recording');
    this.sendBtn.style.display = 'none'
    // this.recordButton.textContent = '⏹️';
}
stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
    this.recordButton.classList.remove('recording');
    this.sendBtn.style.display = 'block'
    // this.recordButton.textContent = '🎤';
}

    blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    base64ToBlob(base64) {
        const [header, data] = base64.split(',');
        const mimeType = header.split(':')[1].split(';')[0];
        const binary = atob(data);
        const array = new Uint8Array(binary.length);
        
        for (let i = 0; i < binary.length; i++) {
            array[i] = binary.charCodeAt(i);
        }
        
        return new Blob([array], { type: mimeType });
    }

    saveAudioMessage(base64Audio) {
        const message = {
            type: 'audio',
            content: base64Audio,
            timestamp: new Date().toISOString(),
            sender: 'user'
        };

        this.messages.push(message);
        this.saveMessages();
        this.displayMessage(message);
        // this.simulateAIResponse();
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }


    displayMessage(message) {

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;

        // if (message.type === 'text') {
        //     messageDiv.textContent = message.content;
        // } 
         if (message.type === 'audio') {
            const playerContainer = document.createElement('div');
            playerContainer.className = 'custom-audio-player';

            const playBtn = document.createElement('button');
            playBtn.className = 'play-btn';
            playBtn.innerHTML = '<i class="fas fa-play"></i>';

           
        

            const timeDisplay = document.createElement('div');
            timeDisplay.className = 'time-display';
            timeDisplay.textContent = '0:00';

            // const duration = document.createElement('span');
            // duration.className = 'audio-duration';
            // duration.textContent = '0:00';

            // Criar áudio a partir do Base64
            const audio = new Audio(message.content);
            
            // audio.addEventListener('loadedmetadata', () => {
            //     const minutes = Math.floor(audio.duration / 60);
            //     const seconds = Math.floor(audio.duration % 60);
            //     duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            // });
            audio.addEventListener('timeupdate', () => {
                const percent = (audio.currentTime / audio.duration) * 100;
                // progress.style.width = percent + '%';
            timeDisplay.textContent = this.formatTime(audio.currentTime);
            });

            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    audio.pause();
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });

            audio.addEventListener('ended', () => {
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            });

            playerContainer.appendChild(playBtn);
            // playerContainer.appendChild(progressContainer);
            playerContainer.appendChild(timeDisplay);
            messageDiv.appendChild(playerContainer);
        }

       setTimeout(()=> this.chatMessages.appendChild(messageDiv) , 1000)
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    saveMessages() {
        localStorage.setItem('chatMessages', JSON.stringify(this.messages));
    }

    loadMessages() {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
            this.messages.forEach(message => this.displayMessage(message));
        }
    }

}

// Inicializar o aplicativo
const chatApp = new ChatApp();





const chatContainer = document.querySelector('.chat-container')
const sideBar = document.querySelector('.sidebar')
const userProfile = document.querySelector('.user-profile')
const chatArea = document.querySelector('.chat-area')
const inputArea = document.querySelector('.input-area')
const chatHeader = document.querySelector('.chat-header')
const messageTime = document.querySelector('.message-time')
const icon = document.getElementById('themeIcon')

function loadTheme(){
   var themeStatusSeved = localStorage.getItem('statetheme')

if (themeStatusSeved) {
    document.body.classList.toggle('dark-mode')
    changeIcons()
 } 
}

var stateTheme = false;
const themeIntervalTime = 100

let themeIntervalID
let themeIntervalID2



const themetoggle = document.getElementById('theme-toggle')
themetoggle.addEventListener('click', ()=>{
document.body.classList.toggle('dark-mode')
     changeIcons()
})
function changeIcons(){



if(document.body.classList.contains('dark-mode')){

    stateTheme = true // altera entre o estado dark e ligth
    localStorage.setItem('statetheme', stateTheme)
    icon.classList.replace('fa-moon', 'fa-sun')// altere para ligth
    clearInterval(themeIntervalID2)
    themeIntervalID2 = null
    if(!themeIntervalID){  // se tem um intervalo
        themeIntervalID = setInterval(darkMode, themeIntervalTime)
    }  
    }

          
else{
    icon.classList.replace('fa-sun', 'fa-moon')//altere para dark
    clearInterval(themeIntervalID)
    themeIntervalID = null
    // if(!themeIntervalID2)themeIntervalID2 = setInterval(lightMode,themeIntervalTime
    lightMode()
    localStorage.removeItem('statetheme')
}
}
function lightMode(){
console.log('ligth mode')
const messageInput = document.querySelector('.message-input')
const messageUser = document.querySelectorAll('.message.user')
const messageIA = document.querySelectorAll('.message.ai')

document.body.classList.remove('darkmode')
chatContainer.classList.remove('chatContainer')
sideBar.classList.remove('sideBar')
userProfile.classList.remove('userProfile')
chatArea.classList.remove('chatArea')
inputArea.classList.remove('inputArea')
messageInput.classList.remove('messageInput')
chatHeader.classList.remove('chatheader')
messageTime.classList.remove('messagetime')

messageUser.forEach(messageUser => {
messageUser.style.cssText = `
 color: black;
 background:#e3f2fd;
 `

});
messageIA.forEach(messageIA => {
messageIA.style.backgroundColor = '#f5f5f5';
});

}
function darkMode(){

const messageInput = document.querySelector('.message-input')
const messageUser = document.querySelectorAll('.message.user')
const messageIA = document.querySelectorAll('.message.ai')

console.log('iniciando')
document.body.classList.add('darkmode')
chatContainer.classList.add('chatContainer')
sideBar.classList.add('sideBar')
userProfile.classList.add('userProfile')
chatArea.classList.add('chatArea')
inputArea.classList.add('inputArea')
messageInput.classList.add('messageInput')
chatHeader.classList.add('chatheader')
messageTime.classList.add('messagetime')
// messageUser.classList.add('messageUser')

    // messageTime.forEach(timeMsg =>{
    //     timeMsg.style.color = 'white';
    // });
    // messageTime.style.color = 'white';

    messageUser.forEach(messageUser => {
            messageUser.style.cssText = `
            color: white;
            background:#9c78ea;
            `
           
    });


    messageIA.forEach(messageIA => {
            messageIA.style.backgroundColor = '#333333';
    });

 }
function themeToggle(){
// console.log('executando ação')
 if(stateTheme){
   darkMode()
 }else{

 }
//  localStorage.setItem(_stateTheme,  stateTheme)
}
// function chengeTheme(){


// }

