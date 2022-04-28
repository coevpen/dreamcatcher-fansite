import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to=''>Members</Link>
            <Link to=''>Discography</Link>
            <Link to=''>Links</Link>
        </nav>
    );
};

export default Navbar;