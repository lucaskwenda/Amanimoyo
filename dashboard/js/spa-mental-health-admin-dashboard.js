 
  // Conteúdo de cada página
 const pages = {
    Dashboard: {
        title: 'Amani Moyo - Dashboard',
        content: `
              

            <!-- Dashboard Stats -->
            <div class="dashboard-grid">
                <div class="widget stat-widget fade-in" style="animation-delay: 0.1s;">
                    <div class="stat-header">
                        <div class="stat-icon users-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <span class="stat-value">2,458</span>
                    <span class="stat-label">Usuários Ativos</span>
                    <div class="stat-progress">
                        <i class="fas fa-arrow-up"></i>
                        <span class="progress-value">+12.5%</span>
                        <span>desde o último mês</span>
                    </div>
                </div>

                <div class="widget stat-widget fade-in" style="animation-delay: 0.2s;">
                    <div class="stat-header">
                        <div class="stat-icon activity-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <span class="stat-value">15,894</span>
                    <span class="stat-label">Acessos Diários</span>
                    <div class="stat-progress">
                        <i class="fas fa-arrow-up"></i>
                        <span class="progress-value">+8.2%</span>
                        <span>desde o último mês</span>
                    </div>
                </div>

                <div class="widget stat-widget fade-in" style="animation-delay: 0.3s;">
                    <div class="stat-header">
                        <div class="stat-icon support-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <span class="stat-value">87%</span>
                    <span class="stat-label">Taxa de Resolução</span>
                    <div class="stat-progress">
                        <i class="fas fa-arrow-up"></i>
                        <span class="progress-value">+3.7%</span>
                        <span>desde o último mês</span>
                    </div>
                </div>

                <div class="widget stat-widget fade-in" style="animation-delay: 0.4s;">
                    <div class="stat-header">
                        <div class="stat-icon alert-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <span class="stat-value">12</span>
                    <span class="stat-label">Alertas Ativos</span>
                    <div class="stat-progress">
                        <i class="fas fa-arrow-down"></i>
                        <span class="progress-value down">-5.3%</span>
                        <span>desde o último mês</span>
                    </div>
                </div>
            </div>

            <!-- Charts -->
            <div class="charts-container">
                <div class="chart-container fade-in" style="animation-delay: 0.5s;">
                    <div class="chart-header">
                        <h3 class="chart-title">Atividade de Usuários</h3>
                        <div class="chart-actions">
                            <button class="chart-btn active">Diário</button>
                            <button class="chart-btn">Semanal</button>
                            <button class="chart-btn">Mensal</button>
                        </div>
                    </div>
                    <canvas id="usersActivityChart"></canvas>
                </div>

                <div class="chart-container fade-in" style="animation-delay: 0.6s;">
                    <div class="chart-header">
                        <h3 class="chart-title">Distribuição de Casos</h3>
                        <div class="chart-actions">
                            <button class="chart-btn active">Todos</button>
                        </div>
                    </div>
                    <canvas id="casesDistributionChart"></canvas>
                </div>
            </div>

            <!-- Tabelas -->
            <div class="tables-container">
                <div class="table-container fade-in" style="animation-delay: 0.7s;">
                    <div class="table-header">
                        <h3 class="table-title">Casos Recentes</h3>
                        <a href="#" class="view-all">Ver Todos</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuário</th>
                                <th>Categoria</th>
                                <th>Status</th>
                                <th>Urgência</th>
                                <th>Data</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1234</td>
                                <td>
                                    <div class="user-item">
                                        <img src="#" alt="User">
                                        <div class="user-info">
                                            <span class="user-name">Ana Silva</span>
                                            <span class="user-email">ana@example.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td>Ansiedade</td>
                                <td><span class="status warning">Em Andamento</span></td>
                                <td>Média</td>
                                <td>23/02/2025</td>
                                <td>
                                    <div class="action-btns">
                                        <button class="action-btn tooltip" data-tooltip="Ver Detalhes">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="action-btn tooltip" data-tooltip="Editar">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#1235</td>
                                <td>
                                    <div class="user-item">
                                        <img src="#" alt="User">
                                        <div class="user-info">
                                            <span class="user-name">Carlos Oliveira</span>
                                            <span class="user-email">carlos@example.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td>Depressão</td>
                                <td><span class="status success">Resolvido</span></td>
                                <td>Alta</td>
                                <td>22/02/2025</td>
                                <td>
                                    <div class="action-btns">
                                        <button class="action-btn tooltip" data-tooltip="Ver Detalhes">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="action-btn tooltip" data-tooltip="Editar">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#1236</td>
                                <td>
                                    <div class="user-item">
                                        <img src="#" alt="User">
                                        <div class="user-info">
                                            <span class="user-name">Márcia Santos</span>
                                            <span class="user-email">marcia@example.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td>Estresse</td>
                                <td><span class="status danger">Crítico</span></td>
                                <td>Urgente</td>
                                <td>21/02/2025</td>
                                <td>
                                    <div class="action-btns">
                                        <button class="action-btn tooltip" data-tooltip="Ver Detalhes">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="action-btn tooltip" data-tooltip="Editar">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    Usuarios: {
        title: 'Amani Moyo - Usuários',
        content: `
             <div class="containerUser">
        <div class="search-container">
            <div class="search-header">
           
                <h2 class="search-title">Buscar Usuários</h2>
            </div>
            <form id="searchForm" class="search-form">
                <input type="text" id="searchInput" class="search-input" placeholder="Digite o nome do usuário...">
                <button type="submit" class="search-button">
                    <i class="fas fa-search"></i> Buscar
                </button>
            </form>
        </div>
        
        <div class="tables-container">
            <div class="table-container fade-in" id="resultsContainer" style="display: none;">
                <div class="table-header">
                    <h3 class="table-title">Resultados da Busca</h3>
                    <a href="#" class="view-all">Ver Todos</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuário</th>
                            <th>Categoria</th>
                            <th>Status</th>
                            <th>Urgência</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="resultsTable">
                        <!-- Os resultados da busca serão inseridos aqui via JavaScript -->
                    </tbody>
                </table>
                
                <!-- Visualização para dispositivos móveis -->
                <div class="mobile-cards" id="mobileCards">
                    <!-- Os cards móveis serão inseridos aqui via JavaScript -->
                </div>
                
                <div id="loadingIndicator" class="loading" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i> Carregando resultados...
                </div>
                <div id="noResults" class="no-results" style="display: none;">
                    Nenhum usuário encontrado com este nome.
                </div>
            </div>
        </div>
    </div>
        `},
        Atividade: {
            title: 'Amani Moyo - Atividade',
            content: `  <div class="container-activity">
        <h1 class="page-title">Visão Geral das Atividades</h1>
        
        <div class="cards-container">
            <div class="card">
                <i class="card-icon fas fa-users"></i>
                <h3>Usuários Online</h3>
                <div class="number" id="online-users">42</div>
                <div class="description">Usuários ativos no momento</div>
                <div class="trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>12% desde ontem</span>
                </div>
            </div>
            
            <div class="card">
                <i class="card-icon fas fa-calendar-check"></i>
                <h3>Consultas Marcadas</h3>
                <div class="number" id="appointments">87</div>
                <div class="description">Para os próximos 7 dias</div>
                <div class="trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>8% desde a semana passada</span>
                </div>
            </div>
            
            <div class="card">
                <i class="card-icon fas fa-user-plus"></i>
                <h3>Novos Usuários</h3>
                <div class="number" id="new-users">23</div>
                <div class="description">Registrados hoje</div>
                <div class="trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>15% desde ontem</span>
                </div>
            </div>
            
            <div class="card">
                <i class="card-icon fas fa-comment-dots"></i>
                <h3>Mensagens Enviadas</h3>
                <div class="number" id="messages">156</div>
                <div class="description">Nas últimas 24 horas</div>
                <div class="trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>5% desde ontem</span>
                </div>
            </div>
            
            <div class="card">
                <i class="card-icon fas fa-clipboard-list"></i>
                <h3>Atividades Concluídas</h3>
                <div class="number" id="activities">78</div>
                <div class="description">Exercícios e tarefas finalizados</div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: 78%; background-color: #3498db;"></div>
                </div>
                <div class="description" style="margin-top: 10px;">78% da meta semanal</div>
            </div>
            
            <div class="card">
                <i class="card-icon fas fa-medal"></i>
                <h3>Nível de Satisfação</h3>
                <div class="number" id="satisfaction">92<span style="font-size: 24px;">%</span></div>
                <div class="description">Baseado em 345 avaliações</div>
                <div class="trend neutral">
                    <i class="fas fa-equals"></i>
                    <span>Igual à semana passada</span>
                </div>
            </div>
        </div>
    </div>` 
        },
        Alertas: {
            title: 'Amani Moyo - Alertas',
            content: `
        <section class="dashboard">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Central de Alertas</h1>
                <p class="dashboard-subtitle">Monitore todos os alertas do sistema em tempo real</p>
            </div>
            
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Alertas Críticos</span>
                        <div class="stat-icon icon-critical">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                    </div>
                    <div class="stat-value critical">3</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Alertas Altos</span>
                        <div class="stat-icon icon-high">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                    </div>
                    <div class="stat-value high">7</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Alertas Médios</span>
                        <div class="stat-icon icon-medium">
                            <i class="fas fa-info-circle"></i>
                        </div>
                    </div>
                    <div class="stat-value medium">12</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Alertas Baixos</span>
                        <div class="stat-icon icon-low">
                            <i class="fas fa-check-circle"></i>
                        </div>
                    </div>
                    <div class="stat-value low">18</div>
                </div>
            </div>
            
            <div class="alert-container">
                <div class="alert-header">
                    <h2 class="alert-title">Lista de Alertas</h2>
                    <div class="filter-container">
                        <button class="filter-button active" data-filter="all">Todos</button>
                        <button class="filter-button" data-filter="critical">Críticos</button>
                        <button class="filter-button" data-filter="high">Altos</button>
                        <button class="filter-button" data-filter="medium">Médios</button>
                        <button class="filter-button" data-filter="low">Baixos</button>
                    </div>
                </div>
                
                <div class="alert-list" id="alertList">
                    <div class="alert-item critical">
                        <div class="alert-severity severity-critical"></div>
                        <div class="alert-content">
                            <div class="alert-message">Paciente ID#4532 reportou pensamentos suicidas em avaliação online</div>
                            <div class="alert-info">
                                <span><i class="fas fa-user"></i> Dr. Márcia Silva</span>
                                <span><i class="fas fa-clock"></i> Hoje, 14:35</span>
                                <span><i class="fas fa-map-marker-alt"></i> Unidade Centro</span>
                            </div>
                        </div>
                        <div class="alert-actions">
                            <button class="action-button"><i class="fas fa-eye"></i></button>
                            <button class="action-button"><i class="fas fa-check"></i></button>
                        </div>
                    </div>
                    
                    <div class="alert-item critical">
                        <div class="alert-severity severity-critical"></div>
                        <div class="alert-content">
                            <div class="alert-message">O sistema detectou ausência de atividade de mais de 3 dias para paciente em observação ID#2387</div>
                            <div class="alert-info">
                                <span><i class="fas fa-user"></i> Sistema</span>
                                <span><i class="fas fa-clock"></i> Hoje, 10:12</span>
                                <span><i class="fas fa-map-marker-alt"></i> Monitoramento Online</span>
                            </div>
                        </div>
                        <div class="alert-actions">
                            <button class="action-button"><i class="fas fa-eye"></i></button>
                            <button class="action-button"><i class="fas fa-check"></i></button>
                        </div>
                    </div>
                    
                    <div class="alert-item high">
                        <div class="alert-severity severity-high"></div>
                        <div class="alert-content">
                            <div class="alert-message">Paciente ID#1875 relatou episódio de ansiedade severa através do aplicativo</div>
                            <div class="alert-info">
                                <span><i class="fas fa-user"></i> Sistema</span>
                                <span><i class="fas fa-clock"></i> Hoje, 08:45</span>
                                <span><i class="fas fa-map-marker-alt"></i> Monitoramento Online</span>
                            </div>
                        </div>
                        <div class="alert-actions">
                            <button class="action-button"><i class="fas fa-eye"></i></button>
                            <button class="action-button"><i class="fas fa-check"></i></button>
                        </div>
                    </div>
                    
                    <div class="alert-item medium">
                        <div class="alert-severity severity-medium"></div>
                        <div class="alert-content">
                            <div class="alert-message">Questionário semanal do paciente ID#5621 indica aumento nos níveis de estresse</div>
                            <div class="alert-info">
                                <span><i class="fas fa-user"></i> Dr. Carlos Mendes</span>
                                <span><i class="fas fa-clock"></i> Ontem, 16:20</span>
                                <span><i class="fas fa-map-marker-alt"></i> Unidade Sul</span>
                            </div>
                        </div>
                        <div class="alert-actions">
                            <button class="action-button"><i class="fas fa-eye"></i></button>
                            <button class="action-button"><i class="fas fa-check"></i></button>
                        </div>
                    </div>
                    
                    <div class="alert-item low">
                        <div class="alert-severity severity-low"></div>
                        <div class="alert-content">
                            <div class="alert-message">Paciente ID#3201 não compareceu à consulta agendada</div>
                            <div class="alert-info">
                                <span><i class="fas fa-user"></i> Recepção</span>
                                <span><i class="fas fa-clock"></i> Ontem, 10:00</span>
                                <span><i class="fas fa-map-marker-alt"></i> Unidade Norte</span>
                            </div>
                        </div>
                        <div class="alert-actions">
                            <button class="action-button"><i class="fas fa-eye"></i></button>
                            <button class="action-button"><i class="fas fa-check"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="empty-state" id="emptyState">
                    <div class="empty-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Sem alertas ativos</h3>
                    <p>Não há alertas para exibir no momento. Bom trabalho!</p>
                </div>
                
                <div class="loading" id="loading">
                    <span class="loader"></span>
                </div>
                
                <div class="pagination">
                    <button class="page-button"><i class="fas fa-chevron-left"></i></button>
                    <button class="page-button active">1</button>
                    <button class="page-button">2</button>
                    <button class="page-button">3</button>
                    <button class="page-button"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    `    
        }
};

// Função para renderizar a página selecionada


function renderPage(pageName) {
    const app = document.querySelector('.main-content');
    const page = pages[pageName];

    if (page) {
        // Cria o conteúdo HTML dinamicamente
        const content = document.createElement('div');
        document.title =  page.title;
        content.className = 'content active';
        content.innerHTML = `
            ${page.content}
        `;
        
        // Limpa o conteúdo anterior e adiciona o novo
        app.innerHTML = '';
        app.appendChild(content);
        
        // Atualiza a classe 'active' no menu
        const links = document.querySelectorAll('.menu-item');
        links.forEach(link => {
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Atualiza a URL com hash
        window.location.hash = pageName;
    }
}

// Adiciona evento de clique aos links do menu
document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.getAttribute('data-page');
        renderPage(pageName);
    });
});


// Carrega a página com base na URL atual ou a página inicial por padrão
function loadInitialPage() {
    const hash = window.location.hash.substring(1);
    if (hash && pages[hash]) {
        renderPage(hash);
    } else {
        renderPage('Dashboard');
    }
}

// Carrega a página inicial quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadInitialPage);

// Permite o uso dos botões de navegação do navegador
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash && pages[hash]) {
        renderPage(hash);
    }
});

// Carrega a página inicial imediatamente (pode ser redundante, mas garante que a página seja carregada)
loadInitialPage();