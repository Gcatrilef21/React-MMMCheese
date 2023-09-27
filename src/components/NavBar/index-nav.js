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
            <aside className="name1">
                mmm
                <span className="name2">cheese</span>
            </aside>
            <nav className="navbar-container">
                <ul>
                    {routes.map((routes) => (
                        <NavLink to={routes.path} className= {( {isActive} ) => isActive ? 'navbar-contain' : 'navbar-letter'}>{routes.text}</NavLink>
                        ))}
                <CartIcon />
                </ul>
            <img className="imglogo" src={logo} alt="LogoQueso"/>
            </nav>

        </header>
    )
}

export default Navbar