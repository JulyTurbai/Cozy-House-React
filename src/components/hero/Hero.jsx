import React from 'react';
import './Hero.scss';
import './HeroMedia.scss';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-block">
                    <div className="hero-content">
                        <h1 className="hero-content__main-text">
                            Not only people<br/> 
                            need a house
                        </h1>
                        <p className="hero-content__descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida 
                            est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula 
                            condimentum erat fringilla et.
                        </p>
                        <div className="button">
                            <NavLink to='/friends' className="button__text">
                                Make a friend
                            </NavLink>
                        </div>
                        {/* <button className="button">
                            <a className="button__text" href="#">Make a friend</a>
                        </button> */}
                    </div>
                    <img className="hero-block__img" src="img/Donny.png" alt="pets"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;