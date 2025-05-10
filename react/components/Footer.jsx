

const Footer = () => {
  return (
    <React.Fragment>
        <div className="footer-content">
      <div className="footer-section">
        <h3>Suporte Emergencial</h3>
        <div className="support-card pulse">
          <p>Precisa conversar? Estamos aqui 24/7</p>
          <a href="tel:188" className="support-number">(+244)945371109</a>
          <small>Centro de Valorização da Vida (CVV)</small>
        </div>
      </div>

      <div className="footer-section">
        <h3>Links Rápidos</h3>
        <div className="footer-links">
          <a href="#"><i className="fas fa-calendar-alt"></i> Agendar Consulta</a>
          <a href="#"><i className="fas fa-book-reader"></i> Recursos e Artigos</a>
          <a href="#"><i className="fas fa-users"></i> Grupos de Apoio</a>
          <a href="#"><i className="fas fa-question-circle"></i> Perguntas Frequentes</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Contato</h3>
        <div className="contact-info">
          <i className="fas fa-envelope"></i>
          <span>amanimoyo@gamail.com</span>
        </div>
        <div class="contact-info">
          <i class="fas fa-phone"></i>
          <span>(+244) 975453711 / 954012189</span>
        </div>
        <div className="contact-info">
          <i className="fas fa-map-marker-alt"></i>
          <span>Av. Kilamba kiaxi, golf-II- Luanda</span>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Newsletter</h3>
        <p>Receba dicas e informações sobre saúde mental</p>
        <form className="newsletter-form" id="newsletterForm">
          <input type="email" placeholder="Seu e-mail" required />
          <button type="submit">Inscrever</button>
        </form>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 Amani Moyo. Todos os direitos reservados.</p>
    </div>
    </React.Fragment>
  )
}

const footer = ReactDOM.createRoot(document.getElementById('footer')).render(<Footer />)
