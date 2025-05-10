// dashboard.js - Código específico para a página de dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Proteger esta página - verificar autenticação
    window.AuthSystem.protectPage();
    
    // Se chegamos aqui, significa que o usuário está autenticado
    // Inicializar o dashboard
    initDashboard();
    
    // Configurar botão de logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.AuthSystem.logout();
        });
    }
});

// Função para inicializar o dashboard
function initDashboard() {
    // Atualizar nome do usuário no dashboard
    updateUserInfo();
    
    // Carregar dados do dashboard
    loadDashboardData();
}

// Atualizar informações do usuário na interface
function updateUserInfo() {
    const userName = localStorage.getItem('userName') || 'Usuário';
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = userName;
    }
}

// Carregar dados do dashboard
function loadDashboardData() {
    console.log('Carregando dados do dashboard...');
    
    // Aqui você faria requisições para sua API para obter dados
    // e atualizar os elementos da interface
    
    // Exemplo: simulação de carregamento de dados
    const loadingIndicators = document.querySelectorAll('.loading-indicator');
    loadingIndicators.forEach(indicator => {
        indicator.style.display = 'inline-block';
    });
    
    // Simular requisição com atraso
    setTimeout(() => {
        // Esconder indicadores de carregamento
        loadingIndicators.forEach(indicator => {
            indicator.style.display = 'none';
        });
        
        // Atualizar estatísticas (simulado)
        updateStatistics({
            totalPacientes: 1248,
            consultasHoje: 42,
            profissionaisAtivos: 24,
            // ... outros dados
        });
    }, 1000);
}

// Atualizar estatísticas do dashboard
function updateStatistics(data) {
    // Atualizar contadores
    const elements = {
        totalPacientes: document.getElementById('total-pacientes'),
        consultasHoje: document.getElementById('consultas-hoje'),
        profissionaisAtivos: document.getElementById('profissionais-ativos')
        // ... outros elementos
    };
    
    // Atualizar elementos se existirem
    for (const [key, element] of Object.entries(elements)) {
        if (element && data[key] !== undefined) {
            element.textContent = data[key].toLocaleString();
        }
    }
}



