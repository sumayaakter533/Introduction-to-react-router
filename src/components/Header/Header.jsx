import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className='flex gap-4 justify-center p-8'>
                <Link className='btn btn-neutral' to='/'>
                    Home
                </Link>
                <Link className='btn btn-neutral' to='/about'>
                    About
                </Link>
                <Link className='btn btn-neutral' to='/users'>
                    Users
                </Link>
                <Link className='btn btn-neutral' to='/posts'>
                    Posts
                </Link>
            </nav>
        </div>
    );
};

export default Header;
