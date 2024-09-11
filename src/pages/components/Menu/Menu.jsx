import React from 'react'
import "./Menu.css"

function Menu() {
    return (
        <header className='header'>

            <a href="/" className='logo'>Logo</a>

            <nav className='navbar'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/port">Portfolio</a>
            </nav>
        </header>
    )
}

export default Menu