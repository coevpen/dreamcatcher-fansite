import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="pl-3 pt-3 text-base">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/members" className="nav-link">Members</Link>
            <Link to="/discography" className="nav-link">Discography</Link>
            <Link to="/links" className="nav-link">Links</Link>
        </nav>
    );
};

export default Navbar;