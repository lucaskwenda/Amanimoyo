
const BtnMobile = (props)=>{
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

  return <React.Fragment>
      <button aria-label="Abrir Menu" id="btn-mobile"
        aria-haspopup="tree"
        aria-controls="menu" aria-expanded="false">
      <span id="icone" onClick ={toggleMenu}></span>
      </button>
  </React.Fragment>
}

const Menu = () => {

  

  return <React.Fragment>
        <div id="menu">
      
            <div id="menu-links">
              <h1>
                <a href="./index.html" id="logo">AMANI MOYO</a></h1>
               </div>
              
              <nav>
              <BtnMobile />
                  <ul>
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./explore.html">Explorar</a></li>
                    <li><a href="./assistencia.html">Assistências</a></li>
                    <li><a href="./sobre.html">Sobre</a></li>
                    <li><button id='entrar'>Entrar</button></li>
                    <li>
                    <div className="search-container">
                <input type="text" placeholder="Pesquisar..." />
                
                <img className="search-icon"
                src="../assets/img/icones/search-svg.svg" alt="search-icon" />
        </div>
                    </li>
                </ul>
                
                </nav>
            </div>

  </React.Fragment>
}
const menu = ReactDOM.createRoot(document.getElementById('menu')).render(<Menu />)

