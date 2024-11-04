import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='flex gap-4 justify-center p-8'>
                <NavLink className='btn btn-neutral' to='/'>
                    Home
                </NavLink>
                <NavLink className='btn btn-neutral' to='/about'>
                    About
                </NavLink>
                <NavLink className='btn btn-neutral' to='/users'>
                    Users
                </NavLink>
                <NavLink className='btn btn-neutral' to='/posts'>
                    Posts
                </NavLink>
                <NavLink className='btn btn-neutral' to='/form'>
                    Form
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
