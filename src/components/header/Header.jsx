import React from 'react';
import './Header.scss';
import './HeaderMedia.scss'
import Menu from '../menu/Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div className="logo">
                        <p className="logo__name"><NavLink to="/">Cozy House</NavLink></p>
                        <p className="logo__descr">Shelter for pets in Boston</p>
                    </div>
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

export default Header;