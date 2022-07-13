import React from 'react';
import { useState } from 'react';
import './styles/navigation.css';

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            {/* <a href="/" className="brand-name">
                MacroSoft
            </a> */}
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                {/* icon from heroicons.com */}
                Categories
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li> <a href="#">PS 4</a> </li>
                    <li> <a href="#">PS 5</a> </li>
                    <li> <a href="#">Xbox</a> </li>
                    <li> <a href="#">Nintedo Switch</a> </li>
                </ul>
            </div>
        </nav>
    );
}