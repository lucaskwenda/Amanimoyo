//  //    // Estrutura de dados para armazenar conversas
    //    const ChatStore = {
    //         // Chave para localStorage
    //         STORAGE_KEY: 'mental_health_chat_history',
           
            
    //         // Inicializar store
    //         init() {
    //             const stored = localStorage.getItem(this.STORAGE_KEY);
    //             if (!stored) {
    //                 const initialData = {
    //                     conversations: {},
    //                     lastSession: null
    //                 };
    //                 this.saveToStorage(initialData);
    //                 return initialData;
    //             }
    //             return JSON.parse(stored);
    //         },
            
    //         // Salvar no localStorage
    //         saveToStorage(data) {
    //             localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    //         },
            
    //         // Adicionar nova mensagem
    //         addMessage(message, isUser) {
    //             const data = this.init();
    //             const today = new Date().toLocaleDateString();
                
    //             if (!data.conversations[today]) {
    //                 data.conversations[today] = [];
    //             }
                
    //             data.conversations[today].push({
    //                 content: message,
    //                 isUser,
    //                 timestamp: new Date().toISOString()
    //             });
                
    //             data.lastSession = today;
    //             this.saveToStorage(data);
                
    //             return data;
    //         },
            
    //         // Carregar conversas
    //         loadConversations() {
    //             return this.init();
    //         },
            
    //         // Limpar histórico
    //         clearHistory() {
    //             localStorage.removeItem(this.STORAGE_KEY);
               
    //             return this.init();
    //         }
    //     };

        // // Configuração da API
        const API_KEY = "d735cbc0fb414e62d2c9e2a8bb66162711b75e77be899b9eca2a94b90a4d498f";
        const API_URL = "https://api.together.xyz/v1/chat/completions";
        // Elementos do DOM
        const messagesContainer = document.getElementById('messages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const typingIndicator = document.getElementById('typing');
        const clearChatButton = document.getElementById('clearChat');
        const chatHistory = document.getElementById('chatHistory');

        // // Carregar histórico ao iniciar
        // function loadChatHistory() {
        //     const data = ChatStore.loadConversations();
        //     messagesContainer.innerHTML = '';
        //     // chatHistory.innerHTML = '';
            
        //     // Se não houver conversas anteriores, mostrar mensagem inicial
        //     if (Object.keys(data.conversations).length === 0) {
        //         addMessage("Olá! Eu sou seu assistente virtual de saúde mental. Como posso ajudar você hoje?", false);
        //         return;
        //     }

        //     // Carregar conversas do dia atual
        //     const today = new Date().toLocaleDateString();
        //     if (data.conversations[today]) {
        //         data.conversations[today].forEach(msg => {
        //             addMessageToUI(msg.content, msg.isUser, new Date(msg.timestamp));
        //         });
        //     } else {
        //         addMessage("Olá! Eu sou seu assistente virtual de saúde mental. Como posso ajudar você hoje?", false);
        //     }

        //     // Atualizar sidebar com datas das conversas
        //     Object.keys(data.conversations).reverse().forEach(date => {
        //         const dateDiv = document.createElement('div');
        //         dateDiv.className = 'chat-date';
        //         dateDiv.textContent = date;
        //         // chatHistory.appendChild(dateDiv);
        //     });
        // }

        // Função para formatar hora
        function formatTime(date) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        // Função para adicionar mensagem à UI
        function addMessageToUI(content, isUser, timestamp = new Date()) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
            
            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            messageContent.textContent = content;
            
            const messageTime = document.createElement('div');
            messageTime.className = 'message-time';
            messageTime.textContent = formatTime(timestamp);
            
            messageDiv.appendChild(messageContent);
            messageDiv.appendChild(messageTime);
            messagesContainer.appendChild(messageDiv);
            
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Função para adicionar mensagem
        function addMessage(content, isUser) {
            addMessageToUI(content, isUser);
            ChatStore.addMessage(content, isUser);
        }

        // // Função para limpar chat
        // clearChatButton.addEventListener('click', () => {
        //     if (confirm('Tem certeza que deseja limpar todo o histórico de conversas?')) {
        //         ChatStore.clearHistory();
        //         loadChatHistory();
        //     }
        // });

        // Função para enviar mensagem para a API
        async function sendToAI(message) {
        
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                         "Authorization": `Bearer ${API_KEY}`,
                         "Content-Type": "application/json"
                    },
                   
                    body: JSON.stringify({
                        messages: [
          { role: "system", content: "Você é uma assistente de saúde mental doce, carinhosa, bem-humorada e acolhedora. O teu nome é Amani Moyo IA, foste desenvolvida pelos estudantes do Complexo escolar privado Coléma, os teu criadores são: Lucas Kwenda, Gedeão Kiala, Ambrosio dos Santos e Jhony Dilukila. focada sempre em suporte emucional e no que  o usuario diz, pergunta e responde, Responda de forma gentil e positiva, ajudando o usuário a se sentir melhor como nunca." },
          { role: "user", content: message }
        ],
                        model: 'meta-llama/Llama-3-8b-chat-hf',
                        temperature: 0.7,
                        max_tokens: 300
                    })
                });

                const data = await response.json();
                return data.choices[0].message.content;;
            } catch (error) {
                console.error('Erro ao se comunicar com a API:', error);
                return 'Desculpe, ocorreu um erro ao processar sua mensagem.';
            }
        }

        // Função para processar o envio de mensagem
        async function handleSendMessage() {
            const message = messageInput.value.trim();
            if (!message) return;

            messageInput.value = '';
            messageInput.style.height = 'auto';

            addMessage(message, true);
            toggleTypingIndicator(true);

            const response = await sendToAI(message);
            toggleTypingIndicator(false);
            addMessage(response, false);
        }

        // Event listeners
        sendButton.addEventListener('click', handleSendMessage);
        
        messageInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });

        // Função para mostrar/esconder indicador de digitação
        function toggleTypingIndicator(show) {
            typingIndicator.style.display = show ? 'flex' : 'none';
        }

        // Carregar histórico ao iniciar a página
        loadChatHistory();