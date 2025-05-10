
const menuIcon = document.getElementById('icone');

if(menuIcon) menuIcon.addEventListener('click', toggleMenu);

const btnEntrar = document.getElementById('entrar');

const btnConsulta = document.getElementById('btn-consulta');

const userPhoto = document.querySelector('.user-avatar')
// const userDate = JSON.pa~9rse(localStorage.getItem('userDate'))

 if(btnEntrar) btnEntrar.addEventListener('click', entrar);
 if(btnEntrar)  btnEntrar.addEventListener('touchstart', entrar)

  // console.log(userData)
  
// userPhoto.src = userDate;


function entrar(event){
  if(event.type === 'touchstart') event.preventDefault()
  window.open('pages/login.html', '_self')
}


function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementsByTagName('nav')[0]
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active){
        event.currentTarget.setAttribute('aria-label', "Fechar Menu")
    }else{
        event.currentTarget.setAttribute('aria-label', "Abrir Menu")
    }
}
const newsletterForm = document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    // alert("deu")
  e.preventDefault();
  const email = this.querySelector('input').value;
  alert(`Obrigado por se inscrever! Em breve você receberá nossas novidades no email: ${email}`);
  this.reset();
});








const suporteNumber = document.querySelector('.support-number').addEventListener('click', function(e) {

    if (!confirm('Você será redirecionado para a ligação com o suporte de atendimento (Amani Moyo). Deseja continuar?')) {
       
      e.preventDefault();
     
    }
  });




  // Animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


 // Manipulação do menu responsivo
 document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('btn-mobile');
  const closeMenu = document.getElementById('closeMenu');
  const navMenu = document.getElementById('navMenu');
  const overlay = document.getElementById('menuOverlay');
  const header = document.querySelector('.header');

  
  // Função para abrir o menu
  menuToggle.addEventListener('click', function() {

      navMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
  
  // Função para fechar o menu
  function closeNav() {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
  }
  
  closeMenu.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);
  
  
  // Gerenciamento de dropdowns no mobile
  // if (window.innerWidth <= 768) {
  //     dropdowns.forEach(dropdown => {
  //         const link = dropdown.querySelector('.nav-link');
  //         link.addEventListener('click', function(e) {
  //             e.preventDefault();
  //             dropdown.classList.toggle('active');
  //         });
  //     });
  // }
  
  // Adicionar efeito de hover nas opções do menu
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      if (!link.classList.contains('active')) {
          link.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-2px)';
          });
          link.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
          });
      }
  });
  
});



