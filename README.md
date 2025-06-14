# 🧠 Amanimoyo - Plataforma de Suporte à Saúde Mental

<div align="center">
  <img src="./assets/img/amanimoyo-banner.png" alt="Amanimoyo Platform" width="100%" />
  
  [![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)](https://github.com/seu-usuario/amanimoyo)
  [![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com/seu-usuario/amanimoyo)
  [![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
  [![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)](https://mysql.com/)
</div>

## 📋 Sobre o Projeto

**Amanimoyo** é uma plataforma inovadora de suporte à saúde mental desenvolvida como projeto final de curso. A aplicação oferece um ambiente seguro e acolhedor onde os usuários podem buscar apoio, recursos e orientação para o bem-estar mental, contando com um assistente virtual inteligente baseado na tecnologia LLaMA da Meta.

### 🎯 Objetivos

- Democratizar o acesso ao suporte em saúde mental
- Fornecer recursos educativos e informativos
- Oferecer assistência 24/7 através de IA conversacional
- Criar uma comunidade de apoio segura e inclusiva
- Conectar usuários com profissionais qualificados

## ✨ Funcionalidades Principais

### 🤖 Assistente Virtual Inteligente
- **Tecnologia LLaMA (Meta)**: Assistente virtual avançado para suporte emocional
- Conversas empáticas e personalizadas
- Disponibilidade 24 horas por dia, 7 dias por semana
- Respostas contextualmente relevantes sobre saúde mental

### 👤 Gestão de Usuários
- Sistema completo de registro e autenticação
- Perfis personalizáveis com informações relevantes
- Histórico de interações e progresso
- Dashboard pessoal intuitivo

### 📚 Recursos Educativos
- Biblioteca de artigos sobre saúde mental
- Exercícios de mindfulness e relaxamento
- Técnicas de autorregulação emocional
- Conteúdo curado por profissionais

### 📊 Monitoramento do Bem-estar
- Questionários de autoavaliação
- Gráficos de humor e progresso
- Relatórios personalizados
- Alertas e lembretes personalizados

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Frontend | Backend | Banco de Dados | IA |
|----------|---------|----------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) | ![Meta](https://img.shields.io/badge/Meta_LLaMA-1877F2?style=for-the-badge&logo=meta&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) | | |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | | | |

</div>

### Detalhamento Técnico

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend**: Node.js com Express.js
- **Banco de Dados**: MySQL 8.0
- **Inteligência Artificial**: LLaMA (Large Language Model Meta AI)
- **Arquitetura**: MVC (Model-View-Controller)
- **APIs**: RESTful APIs para comunicação cliente-servidor

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- MySQL (versão 8.0 ou superior)
- NPM ou Yarn
- Acesso à API do LLaMA (Meta)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/amanimoyo.git
   cd amanimoyo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   ```bash
   # Crie o banco de dados MySQL
   mysql -u root -p
   CREATE DATABASE amanimoyo;
   
   # Execute as migrações
   npm run migrate
   ```

4. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env` com suas configurações:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=amanimoyo
   LLAMA_API_KEY=sua_chave_api_llama
   JWT_SECRET=seu_jwt_secret
   PORT=3000
   ```

5. **Inicie a aplicação**
   ```bash
   # Desenvolvimento
   npm run dev
   
   # Produção
   npm start
   ```

6. **Acesse a aplicação**
   - Navegue para `http://localhost:3000`

## 📁 Estrutura do Projeto

```
amanimoyo/
├── 📁 public/
│   ├── 📁 css/
│   │   ├── style.css
│   │   └── components/
│   ├── 📁 js/
│   │   ├── main.js
│   │   ├── chat.js
│   │   └── dashboard.js
│   └── 📁 assets/
│       ├── 📁 images/
│       └── 📁 icons/
├── 📁 src/
│   ├── 📁 controllers/
│   │   ├── userController.js
│   │   ├── chatController.js
│   │   └── dashboardController.js
│   ├── 📁 models/
│   │   ├── User.js
│   │   ├── Chat.js
│   │   └── Assessment.js
│   ├── 📁 routes/
│   │   ├── users.js
│   │   ├── chat.js
│   │   └── api.js
│   ├── 📁 middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── 📁 services/
│   │   ├── llamaService.js
│   │   └── databaseService.js
│   └── 📁 views/
│       ├── index.html
│       ├── dashboard.html
│       └── chat.html
├── 📁 database/
│   ├── 📁 migrations/
│   └── 📁 seeds/
├── 📄 package.json
├── 📄 .env.example
└── 📄 README.md
```

## 🔧 Configuração da IA LLaMA

A integração com o LLaMA da Meta permite conversas naturais e empáticas:

```javascript
// Exemplo de configuração do serviço LLaMA
const llamaService = {
  model: 'llama-2-70b-chat',
  temperature: 0.7,
  maxTokens: 1000,
  systemPrompt: `Você é um assistente especializado em saúde mental, 
                 empático e preparado para oferecer suporte emocional...`
};
```

### Características do Assistente Virtual

- **Empatia**: Respostas compreensivas e acolhedoras
- **Conhecimento**: Base de dados especializada em saúde mental
- **Segurança**: Filtros para identificar situações de risco
- **Personalização**: Adaptação ao perfil do usuário
- **Continuidade**: Memória contextual das conversas

## 📊 Banco de Dados

### Principais Tabelas

- **users**: Informações dos usuários
- **conversations**: Histórico de conversas com a IA
- **assessments**: Avaliações de bem-estar
- **resources**: Recursos educativos
- **user_progress**: Acompanhamento do progresso

## 🎨 Interface do Usuário

### Design Principles

- **Acessibilidade**: Interface intuitiva para todos os usuários
- **Responsividade**: Funciona em desktop, tablet e mobile
- **Cores Terapêuticas**: Paleta de cores relaxante e acolhedora
- **Navegação Intuitiva**: Fluxo de usuário simplificado

### Principais Telas

1. **Landing Page**: Apresentação da plataforma
2. **Dashboard**: Visão geral do progresso do usuário
3. **Chat com IA**: Interface de conversa com o assistente
4. **Recursos**: Biblioteca de conteúdo educativo
5. **Perfil**: Configurações e histórico pessoal

## 🔒 Segurança e Privacidade

- Criptografia de dados sensíveis
- Autenticação JWT
- Validação de entrada rigorosa
- Conformidade com LGPD
- Anonimização de dados quando necessário

## 📈 Funcionalidades Futuras

- [ ] Aplicativo mobile nativo
- [ ] Integração com wearables
- [ ] Videochamadas com profissionais
- [ ] Grupos de apoio virtual
- [ ] Análise de sentimentos avançada
- [ ] Relatórios para profissionais de saúde

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- Meta AI pela tecnologia LLaMA
- Comunidade open source
- Professores e orientadores
- Profissionais de saúde mental que forneceram insights
- Beta testers que ajudaram no desenvolvimento

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto:

- 📧 Email: suporte@amanimoyo.com
- 📱 WhatsApp: +244 XXX XXX XXX
- 🌐 Website: [www.amanimoyo.com](https://www.amanimoyo.com)

---

<div align="center">
  <p><strong>Feito com ❤️ para apoiar a saúde mental de todos</strong></p>
  <img src="https://via.placeholder.com/400x100/4f46e5/ffffff?text=Amanimoyo+%E2%9D%A4%EF%B8%8F" alt="Amanimoyo Footer" />
</div>
