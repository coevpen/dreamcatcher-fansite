import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    const{
        pageSelected,
        setPageSelected
    } = props;
    return (
        <nav className="pl-3 pt-3 text-base">
            <Link to="/" className="p-4 text-white drop-shadow-[0_5px_5px_rgb(255,0,0,1)] hover:text-red-600 hover:uppercase" onClick={() => setPageSelected("Home")}>Home</Link>
            <Link to="/members" className="p-4 text-white drop-shadow-[0_5px_5px_rgb(255,0,0,1)] hover:text-red-600 hover:uppercase" onClick={() => setPageSelected("Members")}>Members</Link>
            <Link to="/discography" className="p-4 text-white drop-shadow-[0_5px_5px_rgb(255,0,0,1)] hover:text-red-600 hover:uppercase" onClick={() => setPageSelected("Discography")}>Discography</Link>
            <Link to="/links" className="p-4 text-white drop-shadow-[0_5px_5px_rgb(255,0,0,1)] hover:text-red-600 hover:uppercase" onClick={() => setPageSelected("Links")}>Links</Link>
        </nav>
    );
};

export default Navbar;