import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Friends from './friends/Friends';
import Shelter from './shelter/Shelter';
import Donation from './donation/Donation';


const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <About/>
            <Friends/>
            <Shelter/>
            <Donation/>
        </div>
    );
};

export default Home;