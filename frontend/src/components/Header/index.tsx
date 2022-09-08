import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
  return (
    <header>
    <div className="dsmeta-header">
      <img src={logo} alt="DS-Meta" />
      <h1>DS-Meta</h1>
      <p>Desenvolvido por 
        <a href="https://github.com/LexTOliver">Alexandre Oliveira</a>
      </p>
    </div>
  </header>
  )
}

export default Header
