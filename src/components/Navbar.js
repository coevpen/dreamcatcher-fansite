import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="pl-3 pt-3 text-base">
            <Link to="/dreamcatcher-fansite" className="nav-link">Home</Link>
            <Link to="/dreamcatcher-fansite/about" className="nav-link">About</Link>
            <Link to="/dreamcatcher-fansite/members" className="nav-link">Members</Link>
            <Link to="/dreamcatcher-fansite/discography" className="nav-link">Discography</Link>
            <Link to="/dreamcatcher-fansite/links" className="nav-link">Links</Link>
        </nav>
    );
};

export default Navbar;