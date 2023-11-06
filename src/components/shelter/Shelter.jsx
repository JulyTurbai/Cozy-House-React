import React from 'react';
import Help from '../help/Help';
import './Shelter.scss';
import './ShelterMedia.scss'

const Shelter = () => {
    return (
        <div className="shelter">
            <div className="container">
                <div className="shelter-block">
                    <h2 className="head-text">
                        Than you can help
                        our shelter
                    </h2>
                    <Help/>
                </div>
            </div>
        </div>
    );
};

export default Shelter;