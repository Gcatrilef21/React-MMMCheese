import CartIcon from '../CartWidget/CartIcon'
import logo from '../NavBar/logo.svg'
import './NavBar.css'
import {  NavLink } from 'react-router-dom'

const routes = [
    {
        path:'/',
        text: 'Inicio'
    },
    {
        path:'/products',
        text: 'Productos'
    },{
        path:'/contact',
        text: 'Contacto'
    }
]

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
                    {routes.map((routes) => (
                        <NavLink to={routes.path} className="nav-item">{routes.text}</NavLink>
                    ))}
                </ul>
                <CartIcon />
            </nav>

        </header>
    )
}

export default Navbar