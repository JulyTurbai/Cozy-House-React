import React from 'react';
import './About.scss';
import './AboutMedia.scss';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-block">
                    <img className="about-block__img" src="img/about-Pets.png" alt="pets"/>
                    <div className="about-block__content">
                        <h2 className="head-text">
                            About the shelter<br/>
                            “Cozy House”
                        </h2>
                        <p className="about-block__descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. 
                            Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.<br/><br/>
                            Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, 
                            ac ornare felis justo nec leo. Praesent mattis nibh quis 
                            ultrices pharetra. Morbi tempus at ante sit amet tristique. 
                            Maecenas dignissim justo orci, in laoreet urna dapibus nec. 
                            Praesent quis tortor faucibus, tristique ante vitae, dignissim 
                            lorem. Sed at ligula et sem mattis gravida ac vel erat. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;