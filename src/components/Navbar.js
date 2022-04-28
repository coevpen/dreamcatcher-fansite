import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    const{
        pageSelected,
        setPageSelected
    } = props;
    return (
        <nav className="pl-3 pt-3 text-base">
            <Link to="/" className="nav-link" onClick={() => setPageSelected("Home")}>Home</Link>
            <Link to="/members" className="nav-link" onClick={() => setPageSelected("Members")}>Members</Link>
            <Link to="/discography" className="nav-link" onClick={() => setPageSelected("Discography")}>Discography</Link>
            <Link to="/links" className="nav-link" onClick={() => setPageSelected("Links")}>Links</Link>
        </nav>
    );
};

export default Navbar;