import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to='/user'>Search User</NavLink>
        <nav>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/blogs' className='nav-link'>Blogs</NavLink>
            <NavLink to='/add-blog' className='nav-link'>Add Blog</NavLink>
            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </nav>
        </div>
    )
}

export default Navbar
