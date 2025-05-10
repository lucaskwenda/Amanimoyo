//    if(document.querySelector('.container-activity')){
    // Função para simular dados em tempo real
  function updateData() {
    // Pequena variação aleatória para simular mudanças em tempo real
    function getRandomChange() {
        return Math.floor(Math.random() * 5) - 2;
    }
    
    // Pegar valores atuais
    let onlineUsers = parseInt(document.getElementById('online-users').innerText);
    let appointments = parseInt(document.getElementById('appointments').innerText);
    let newUsers = parseInt(document.getElementById('new-users').innerText);
    let messages = parseInt(document.getElementById('messages').innerText);
    let activities = parseInt(document.getElementById('activities').innerText);
    let satisfaction = parseInt(document.getElementById('satisfaction').innerText);
    
    // Atualizar com pequenas variações
    document.getElementById('online-users').innerText = Math.max(1, onlineUsers + getRandomChange());
    document.getElementById('appointments').innerText = Math.max(1, appointments + getRandomChange());
    document.getElementById('new-users').innerText = Math.max(0, newUsers + getRandomChange());
    document.getElementById('messages').innerText = Math.max(1, messages + getRandomChange());
    document.getElementById('activities').innerText = Math.max(1, activities + getRandomChange());
    
    // Atualizar barra de progresso
    let newActivities = parseInt(document.getElementById('activities').innerText);
    let percentage = newActivities;
    document.querySelector('.progress-bar').style.width = percentage + '%';
    document.querySelector('.progress-container + .description').innerText = percentage + '% da meta semanal';
    
    // Satisfação varia menos
    if (Math.random() > 0.7) {
        let change = Math.random() > 0.5 ? 1 : -1;
        let newSatisfaction = Math.min(100, Math.max(1, satisfaction + change));
        document.getElementById('satisfaction').innerHTML = newSatisfaction + '<span style="font-size: 24px;">%</span>';
    }
}

  // Atualizar a cada 5 segundos
  setInterval(updateData, 1000);

//   }




// js para a pagina de alertas da dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Filtros de alertas
    const filterButtons = document.querySelectorAll('.filter-button');
    const alertItems = document.querySelectorAll('.alert-item');
    const alertList = document.getElementById('alertList');
    const emptyState = document.getElementById('emptyState');
    const loading = document.getElementById('loading');
    
    // Contagem de alertas
    const alertCounts = {
        critical: document.querySelectorAll('.alert-item.critical').length,
        high: document.querySelectorAll('.alert-item.high').length,
        medium: document.querySelectorAll('.alert-item.medium').length,
        low: document.querySelectorAll('.alert-item.low').length
    };
    
    // Atualizar contagens nos cards
    document.querySelector('.stat-value.critical').textContent = alertCounts.critical;
    document.querySelector('.stat-value.high').textContent = alertCounts.high;
    document.querySelector('.stat-value.medium').textContent = alertCounts.medium;
    document.querySelector('.stat-value.low').textContent = alertCounts.low;
    
    // Função para filtrar alertas
    function filterAlerts(filterType) {
        // Simulação de carregamento
        alertList.style.display = 'none';
        emptyState.style.display = 'none';
        loading.style.display = 'block';
        
        setTimeout(() => {
            loading.style.display = 'none';
            
            let visibleCount = 0;
            
            alertItems.forEach(item => {
                if (filterType === 'all' || item.classList.contains(filterType)) {
                    item.style.display = 'flex';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            if (visibleCount === 0) {
                emptyState.style.display = 'block';
                alertList.style.display = 'none';
            } else {
                emptyState.style.display = 'none';
                alertList.style.display = 'flex';
            }
        }, 500);
    }
    
    // Event listeners para botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAlerts(button.getAttribute('data-filter'));
        });
    });
    
    // Botões de ação
    const actionButtons = document.querySelectorAll('.action-button');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const alertItem = this.closest('.alert-item');
            
            // Efeito visual de clique
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Se for botão de resolução (check)
            if (this.innerHTML.includes('fa-check')) {
                // Animação de desaparecimento
                alertItem.style.opacity = '0.5';
                alertItem.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    // Remover alerta
                    const severityClass = Array.from(alertItem.classList).find(cls => 
                        ['critical', 'high', 'medium', 'low'].includes(cls)
                    );
                    
                    // Atualizar contagem
                    if (severityClass) {
                        alertCounts[severityClass]--;
                        document.querySelector(`.stat-value.${severityClass}`).textContent = alertCounts[severityClass];
                    }
                    
                    alertItem.remove();
                    
                    // Verificar se a lista está vazia após o filtro atual
                    const currentFilter = document.querySelector('.filter-button.active').getAttribute('data-filter');
                    const visibleItems = Array.from(document.querySelectorAll('.alert-item')).filter(item => 
                        currentFilter === 'all' || item.classList.contains(currentFilter)
                    );
                    
                    if (visibleItems.length === 0) {
                        emptyState.style.display = 'block';
                        alertList.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
    
    // Paginação (simples toggle de classe ativa)
    const pageButtons = document.querySelectorAll('.page-button');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.innerHTML.includes('fa-chevron')) {
                pageButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Filtros de alertas
    const filterButtons = document.querySelectorAll('.filter-button');
    const alertItems = document.querySelectorAll('.alert-item');
    const alertList = document.getElementById('alertList');
    const emptyState = document.getElementById('emptyState');
    const loading = document.getElementById('loading');
    
    // Contagem de alertas
    const alertCounts = {
        critical: document.querySelectorAll('.alert-item.critical').length,
        high: document.querySelectorAll('.alert-item.high').length,
        medium: document.querySelectorAll('.alert-item.medium').length,
        low: document.querySelectorAll('.alert-item.low').length
    };
    
    // Atualizar contagens nos cards
    document.querySelector('.stat-value.critical').textContent = alertCounts.critical;
    document.querySelector('.stat-value.high').textContent = alertCounts.high;
    document.querySelector('.stat-value.medium').textContent = alertCounts.medium;
    document.querySelector('.stat-value.low').textContent = alertCounts.low;
    
    // Função para filtrar alertas
    function filterAlerts(filterType) {
        // Simulação de carregamento
        alertList.style.display = 'none';
        emptyState.style.display = 'none';
        loading.style.display = 'block';
        
        setTimeout(() => {
            loading.style.display = 'none';
            
            let visibleCount = 0;
            
            alertItems.forEach(item => {
                if (filterType === 'all' || item.classList.contains(filterType)) {
                    item.style.display = 'flex';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            if (visibleCount === 0) {
                emptyState.style.display = 'block';
                alertList.style.display = 'none';
            } else {
                emptyState.style.display = 'none';
                alertList.style.display = 'flex';
            }
        }, 500);
    }
    
    // Event listeners para botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAlerts(button.getAttribute('data-filter'));
        });
    });
    
    // Botões de ação
    const actionButtons = document.querySelectorAll('.action-button');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const alertItem = this.closest('.alert-item');
            
            // Efeito visual de clique
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Se for botão de resolução (check)
            if (this.innerHTML.includes('fa-check')) {
                // Animação de desaparecimento
                alertItem.style.opacity = '0.5';
                alertItem.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    // Remover alerta
                    const severityClass = Array.from(alertItem.classList).find(cls => 
                        ['critical', 'high', 'medium', 'low'].includes(cls)
                    );
                    
                    // Atualizar contagem
                    if (severityClass) {
                        alertCounts[severityClass]--;
                        document.querySelector(`.stat-value.${severityClass}`).textContent = alertCounts[severityClass];
                    }
                    
                    alertItem.remove();
                    
                    // Verificar se a lista está vazia após o filtro atual
                    const currentFilter = document.querySelector('.filter-button.active').getAttribute('data-filter');
                    const visibleItems = Array.from(document.querySelectorAll('.alert-item')).filter(item => 
                        currentFilter === 'all' || item.classList.contains(currentFilter)
                    );
                    
                    if (visibleItems.length === 0) {
                        emptyState.style.display = 'block';
                        alertList.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
    
    // Paginação (simples toggle de classe ativa)
    const pageButtons = document.querySelectorAll('.page-button');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.innerHTML.includes('fa-chevron')) {
                pageButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});