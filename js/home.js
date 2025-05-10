
  // Script para garantir que o vídeo seja carregado corretamente em dispositivos móveis
  document.addEventListener('DOMContentLoaded', function() {
      const video = document.querySelector('video');
      
      // Função para iniciar o vídeo em dispositivos móveis
      function playVideo() {
        // alert("df")
        
          if (video.paused) {
              video.play().catch(function(error) {
                  console.log("Reprodução automática impedida:", error);
              });
          }
      }
      
      // Tenta iniciar o vídeo quando a página carrega
      playVideo();
      
      // Tenta iniciar o vídeo novamente quando o usuário interage com a página
      document.addEventListener('click', playVideo);
      document.addEventListener('touchstart', playVideo);
      
      // Função para ajustar a altura em dispositivos móveis
      function adjustHeight() {
          const heroSection = document.querySelector('.hero-section');
          const vh = window.innerHeight * 0.0070;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          heroSection.style.height = `calc(100 * var(--vh))`;
      }
      
      // Ajusta a altura inicialmente e quando a janela é redimensionada
      adjustHeight();
      window.addEventListener('resize', adjustHeight);
  });

  // Script simples para animação suave ao rolar até a seção
  document.addEventListener('DOMContentLoaded', function() {
      const section = document.querySelector('.ai-mental-health-section');
      
      const fadeInOnScroll = () => {
          const sectionPosition = section.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if(sectionPosition < screenPosition) {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
          }
      };
      
      // Configuração inicial
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      // Verificar posição inicial e adicionar event listener
      fadeInOnScroll();
      window.addEventListener('scroll', fadeInOnScroll);
      
  });

  


  // Script otimizado para melhor performance
  document.addEventListener('DOMContentLoaded', function() {
      // Animação para os cards com timing melhorado
      const cards = document.querySelectorAll('.card');
      
      const observerOptions = { 
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);
      
      // Configuração inicial e observação dos cards com delay reduzido
      cards.forEach((card, index) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)'; // Reduzido de 30px para 20px
          card.style.transition = `all 0.4s ease ${index * 0.08}s`; // Reduzido de 0.5s e 0.1s
          observer.observe(card);
      });
      
      // Suporte a fallback para o vídeo
      const video = document.querySelector('video');
      const videoPlaceholder = document.querySelector('.video-placeholder');
      
      video.addEventListener('error', function() {
          videoPlaceholder.style.opacity = '1';
      });
      
      // Efeitos hover adicionais para os cards - mais sutil e profissional
      cards.forEach(card => {
          card.addEventListener('mouseenter', function() {
              this.querySelector('.card-title').style.color = 'var(--primary)';
              this.querySelector('.card-icon').style.color = 'var(--secondary)';
          });
          
          card.addEventListener('mouseleave', function() {
              this.querySelector('.card-title').style.color = 'var(--text-dark)';
              this.querySelector('.card-icon').style.color = 'var(--primary)';
          });
      });
  });

  // JavaScript para manipular as abas
  document.addEventListener('DOMContentLoaded', function() {
    const tabButton2 = document.querySelector('.explore-tabs').children[0]
    
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Botões encontrados:', tabButtons.length);
    
    tabButtons.forEach((button,index) => {
      button.addEventListener('click', function() {
        // Remove a classe ativa de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adiciona a classe ativa ao botão clicado
        this.classList.add('active');
        if (tabContents[index]) {
        tabContents[index].classList.add('active'); }
        
        // Mostra o conteúdo correspondente
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });

     
    });
    
    // Efeito hover na imagem
    const exploreImages = document.querySelectorAll('.explore-image img');
    exploreImages.forEach(img => {
      img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
      });
      img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
