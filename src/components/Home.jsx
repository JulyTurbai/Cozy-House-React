import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Friends from './friends/Friends';
import Shelter from './shelter/Shelter';

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <About/>
            <Friends/>
            <Shelter/>
        </div>
    );
};

export default Home;