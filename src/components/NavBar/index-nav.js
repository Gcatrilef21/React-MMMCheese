import CartIcon from '../CartWidget/CartIcon'
import logo from '../NavBar/logo.svg'

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar-container">
                <img className="imglogo" src={logo} alt="LogoQueso"/>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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