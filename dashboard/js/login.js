document.addEventListener('DOMContentLoaded', () => {
    isloggedIn = localStorage.getItem('authToken');
    if (!isloggedIn) {
         // Redireciona para a página de login
         window.location.href = './';
         return;

    } 
    // alert("deu")tudo certo
    return;
});


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsTable = document.getElementById('resultsTable');
    const mobileCards = document.getElementById('mobileCards');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noResults = document.getElementById('noResults');
    
    // Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    }
    
    // Função para gerar o HTML de cada linha da tabela
    function createUserRow(user) {
        // Determinar a classe do status
        let statusClass = '';
        switch(user.status.toLowerCase()) {
            case 'resolvido':
                statusClass = 'success';
                break;
            case 'em andamento':
                statusClass = 'warning';
                break;
            case 'crítico':
                statusClass = 'danger';
                break;
            default:
                statusClass = 'warning';
        }
        
        return `
            <tr>
                <td>#${user.id}</td>
                <td>
                    <div class="user-item">
                        <img src="/api/placeholder/35/35" alt="User">
                        <div class="user-info">
                            <span class="user-name">${user.nome}</span>
                            <span class="user-email">${user.email}</span>
                        </div>
                    </div>
                </td>
                <td>${user.categoria}</td>
                <td><span class="status ${statusClass}">${user.status}</span></td>
                <td>${user.urgencia}</td>
                <td>${formatDate(user.data)}</td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn tooltip" data-tooltip="Ver Detalhes" onclick="verDetalhes(${user.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn tooltip" data-tooltip="Editar" onclick="editarUsuario(${user.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }
    
    // Função para gerar o HTML de cada card móvel
    function createMobileCard(user) {
        // Determinar a classe do status
        let statusClass = '';
        switch(user.status.toLowerCase()) {
            case 'resolvido':
                statusClass = 'success';
                break;
            case 'em andamento':
                statusClass = 'warning';
                break;
            case 'crítico':
                statusClass = 'danger';
                break;
            default:
                statusClass = 'warning';
        }
        
        return `
            <div class="mobile-card">
                <div class="mobile-card-id">#${user.id}</div>
                <div class="mobile-card-header">
                    <img src="/api/placeholder/35/35" alt="User">
                    <div>
                        <div class="user-name">${user.nome}</div>
                        <div class="user-email">${user.email}</div>
                    </div>
                </div>
                <div class="mobile-card-content">
                    <div class="mobile-card-item">
                        <span class="mobile-card-label">Categoria</span>
                        <span class="mobile-card-value">${user.categoria}</span>
                    </div>
                    <div class="mobile-card-item">
                        <span class="mobile-card-label">Status</span>
                        <span class="status ${statusClass}">${user.status}</span>
                    </div>
                    <div class="mobile-card-item">
                        <span class="mobile-card-label">Urgência</span>
                        <span class="mobile-card-value">${user.urgencia}</span>
                    </div>
                    <div class="mobile-card-item">
                        <span class="mobile-card-label">Data</span>
                        <span class="mobile-card-value">${formatDate(user.data)}</span>
                    </div>
                </div>
                <div class="mobile-card-actions">
                    <button class="action-btn" onclick="verDetalhes(${user.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" onclick="editarUsuario(${user.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        `;
    }
    
    // Funções de ação (seria implementada com mais detalhes em um sistema real)
    window.verDetalhes = function(id) {
        console.log(`Ver detalhes do usuário ID: ${id}`);
        // Aqui você redirecionaria para a página de detalhes ou abriria um modal
        alert(`Detalhes do usuário ID: ${id}`);
    };
    
    window.editarUsuario = function(id) {
        console.log(`Editar usuário ID: ${id}`);
        // Aqui você redirecionaria para a página de edição ou abriria um modal de edição
        alert(`Editar usuário ID: ${id}`);
    };
    
    // Função para buscar usuários no backend
    async function buscarUsuarios(nome) {
        try {
            // Em um caso real, aqui faria uma requisição para o backend
            // const response = await fetch(`/api/usuarios?nome=${encodeURIComponent(nome)}`);
            // const data = await response.json();
            
            // Para demonstração, vamos simular uma requisição com dados fictícios
            await new Promise(resolve => setTimeout(resolve, 800)); // Simular delay de rede
            
            // Dados simulados baseados no termo de busca
            let data = [];
            if (nome.toLowerCase().includes('ana')) {
                data.push({
                    id: '1234',
                    nome: 'Ana Silva',
                    email: 'ana@example.com',
                    categoria: 'Ansiedade',
                    status: 'Em Andamento',
                    urgencia: 'Média',
                    data: '2025-02-23'
                });
            }
            if (nome.toLowerCase().includes('carlos')) {
                data.push({
                    id: '1235',
                    nome: 'Carlos Oliveira',
                    email: 'carlos@example.com',
                    categoria: 'Depressão',
                    status: 'Resolvido',
                    urgencia: 'Alta',
                    data: '2025-02-22'
                });
            }
            if (nome.toLowerCase().includes('marcia') || nome.toLowerCase().includes('márcia')) {
                data.push({
                    id: '1236',
                    nome: 'Márcia Santos',
                    email: 'marcia@example.com',
                    categoria: 'Estresse',
                    status: 'Crítico',
                    urgencia: 'Urgente',
                    data: '2025-02-21'
                });
            }
            
            // Se o termo de busca estiver vazio, retornar todos os usuários simulados
            if (nome.trim() === '') {
                data = [
                    {
                        id: '1234',
                        nome: 'Ana Silva',
                        email: 'ana@example.com',
                        categoria: 'Ansiedade',
                        status: 'Em Andamento',
                        urgencia: 'Média',
                        data: '2025-02-23'
                    },
                    {
                        id: '1235',
                        nome: 'Carlos Oliveira',
                        email: 'carlos@example.com',
                        categoria: 'Depressão',
                        status: 'Resolvido',
                        urgencia: 'Alta',
                        data: '2025-02-22'
                    },
                    {
                        id: '1236',
                        nome: 'Márcia Santos',
                        email: 'marcia@example.com',
                        categoria: 'Estresse',
                        status: 'Crítico',
                        urgencia: 'Urgente',
                        data: '2025-02-21'
                    }
                ];
            }
            
            return data;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            throw error;
        }
    }
    
    // Função para lidar com o envio do formulário de busca
    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const searchTerm = searchInput.value.trim();
        
        // Exibir container de resultados e indicador de carregamento
        resultsContainer.style.display = 'block';
        loadingIndicator.style.display = 'block';
        noResults.style.display = 'none';
        resultsTable.innerHTML = '';
        mobileCards.innerHTML = '';
        
        try {
            const usuarios = await buscarUsuarios(searchTerm);
            
            // Ocultar indicador de carregamento
            loadingIndicator.style.display = 'none';
            
            if (usuarios.length === 0) {
                // Exibir mensagem de nenhum resultado
                noResults.style.display = 'block';
            } else {
                // Gerar HTML para visualização desktop (tabela)
                const tableHtml = usuarios.map(user => createUserRow(user)).join('');
                resultsTable.innerHTML = tableHtml;
                
                // Gerar HTML para visualização mobile (cards)
                const cardsHtml = usuarios.map(user => createMobileCard(user)).join('');
                mobileCards.innerHTML = cardsHtml;
            }
        } catch (error) {
            loadingIndicator.style.display = 'none';
            alert('Erro ao buscar usuários. Por favor, tente novamente.');
        }
    });
});