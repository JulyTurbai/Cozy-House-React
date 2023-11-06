import React from 'react';

const Menu = () => {
    return (
        <nav className="menu menu">
            <div className="burger">
                <div className="burger__line"></div>
                <div className="window-menu">
                    <li className="window-menu__item">
                        <a className="window-menu__link" href="#">About the shelter</a>
                    </li>
                    <li className="window-menu__item">
                        <a className="window-menu__link" href="#">Our pets</a>
                    </li>
                    <li className="window-menu__item">
                        <a className="window-menu__link" href="#">To help the shelter</a>
                    </li>
                    <li className="window-menu__item">
                        <a className="window-menu__link" href="#">Contacts</a>
                    </li>
                </div>
            </div>
            <ul className="menu__items">
                <li className="menu__item">
                    <a className="menu__link" href="#">About the shelter</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Our pets</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">To help the shelter</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Contacts</a>
                </li>
            </ul>
     </nav>
    );
};

export default Menu;