import React from 'react';

const HelpCards = ({ card }) => {
const { id, img, name } = card;
    
    return (
        <div className="help-card" key={ id }>
            <img className="help-card__img" src={ img } alt=""/>
            <p className="help-card__name">{ name }</p>
        </div>
    );
};

export default HelpCards;