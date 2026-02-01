import React from 'react'
import logo from '../assets/sagarLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Header() {
    const piripiri = useNavigate();
  return (
    <header>
        <img src={logo} height="125px" alt="" />
        <nav>
            <ul>
                <NavLink to="./"><li>Home</li></NavLink>
                <NavLink to="./about"><li>About</li></NavLink>
                <NavLink to="./contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
        <button onClick={() => { piripiri('/contact') }}>Get Started</button>
    </header>
  )
}

export default Header
