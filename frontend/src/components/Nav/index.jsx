import { NavLink } from 'react-router-dom';
import navStyles from './Nav.module.css'
import logo from "../../assets/SparkCraftLogo.svg"


function Nav() {
    return (
        <header>
            <nav className={navStyles.navbar}>
                <img src={logo} alt="" className={navStyles.logo} />
                <ul className={navStyles.navbar_links}>
                    <li><NavLink className={navStyles.navbar_links_link} to="/">Home</NavLink ></li>
                    <li><NavLink className={navStyles.navbar_links_link} to="/products">Technology</NavLink></li>
                    <li><NavLink className={navStyles.navbar_links_link} to="/contact">Contact</NavLink></li>
                </ul>
                <i className="fa-solid fa-bars" id="navbar--hamburger"></i>
            </nav>
        </header> 
    )
}

export default Nav
