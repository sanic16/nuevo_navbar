import { useState } from "react"
import { FaAddressBook, FaBars, FaBriefcase, FaHouseUser, FaTimes } from "react-icons/fa"

import './navbar.css'
import { MdElectricalServices } from "react-icons/md"
import { FaCircleInfo } from "react-icons/fa6"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)  
  return (
    <nav className="navbar">
        <div className="container navbar__container">
            <div className="navbar__logo">
                <h5>ElectroUSAC</h5> <MdElectricalServices />
            </div>

        
            <ul className={`navbar__menu ${showMenu ? 'active' : null}`}>
                <li><a href="#home" className="navbar__link"><FaHouseUser /> Inicio</a></li>
                <li><a href="#about" className="navbar__link"><FaCircleInfo /> Nosotros</a></li>
                <li><a href="#services" className="navbar__link"><FaBriefcase /> Servicios</a></li>
                <li><a href="#contact" className="navbar__link"><FaAddressBook /> Contacto</a></li>
                <li><a href="#signup" className="navbar__signup">
                    Registrarse
                </a></li>
            </ul>
        

            <button 
                className="navbar__btn"
                onClick={() => setShowMenu(prev => !prev)}
            >
                {
                    showMenu ? <FaTimes /> : <FaBars /> 
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar