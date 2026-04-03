import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3 className='mb-5 text-4xl bg-green-500 p-2'>This is My Header</h3>
            <nav className='flex gap-3 justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptops">Laptop</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;