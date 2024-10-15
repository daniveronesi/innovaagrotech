import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Logo from './imgs/Logo.svg'

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="logo">
          <a href="/"> <img src={Logo} alt="Logo Innova Agrotech" /> </a>
          {/*<span>INNOVA AGROTECH</span>*/}
        </div>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Pesquisar produtos" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/sobre-nos">Sobre nós</a></li>
          <li><a href="/fale-conosco">Fale Conosco</a></li>
          <li><a href="/login">Log in</a></li>
        </ul>
      </nav>
  )
}

export default Navbar