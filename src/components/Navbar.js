import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    const{
        pageSelected,
        setPageSelected
    } = props;
    return (
        <nav className="pl-3 pt-3 text-base">
            {[
                ['Home', '/'],
                ['Members', '/members'],
                ['Discography', '/discography'],
                ['Links', '/links']
            ].map(([title, url]) => (
                <a href={url} className="p-4 text-white drop-shadow-[0_5px_5px_rgb(255,0,0,1)] hover:text-red-600 hover:uppercase " onClick={() => setPageSelected({title})}>{title}</a>
            ))}
        </nav>
    );
};

export default Navbar;