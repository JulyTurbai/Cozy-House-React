import React from 'react';

const Friend = ({ friend }) => {
    const { id, name, img } = friend;
    
    return (
            <div className="pet-card" key={ id }>
                <img className="pet-card__img" src={ img } alt="pet"/>
                <p className="pet-card__name">{ name }</p>
                <button className="pet-card__button">
                    Learn More
                </button>
            </div>
    );
};

export default Friend;