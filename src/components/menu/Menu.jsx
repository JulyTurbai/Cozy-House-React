import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="menu menu">
            <div className="burger">
                <div className="burger__line"></div>
                <div className="window-menu">
                    <li className="window-menu__item">
                    <NavLink className="window-menu__link" to="/aboutshelter">About the shelter</NavLink>
                    </li>
                    <li className="window-menu__item">
                        <NavLink className="window-menu__link" to="/ourpets">Our pets</NavLink>
                    </li>
                    <li className="window-menu__item">
                        <NavLink className="window-menu__link" to="/shelter">To help the shelter</NavLink>
                    </li>
                    <li className="window-menu__item">
                        <NavLink className="window-menu__link" to="/contacts">Contacts</NavLink>
                    </li>
                </div>
            </div>
            <ul className="menu__items">
                <li className="menu__item">
                <NavLink className="menu__link" to="/aboutshelter">About the shelter</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/ourpets">Our pets</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/shelter">To help the shelter</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/contacts">Contacts</NavLink>
                </li>
            </ul>
     </nav>
    );
};

export default Menu;