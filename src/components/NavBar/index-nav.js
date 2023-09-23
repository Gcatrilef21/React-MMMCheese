import CartIcon from '../CartWidget/CartIcon'
import ItemContainer from '../ItemContainer/ItemContainer'
import logo from '../NavBar/logo.svg'
import './NavBar.css'

const Navbar = () => {
    return (
        <header className="header">
            <img className="imglogo" src={logo} alt="LogoQueso"/>
            <aside className="name1">
                mmm
                <span className="name2">cheese</span>
            </aside>
            <nav className="navbar-container">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="">productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">contacto</a>
                    </li>
                </ul>
                <CartIcon />
            </nav>

        </header>
    )
}

export default Navbar