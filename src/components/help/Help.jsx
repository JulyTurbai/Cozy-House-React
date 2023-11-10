import React, { useEffect, useState } from 'react';
import HelpCards from '../helpCards/HelpCards';

const url = {
    cards: `${process.env.REACT_APP_PUBLIC_API_URL}/cards`
}

const Help = () => {
    const [cards, setCards ] = useState([]);

    useEffect(() => {
        fetch(url.cards)
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div className="help-block">
            {
                cards.map(card => <HelpCards key={ card.id }card={ card }/>)
            }
        </div>
    );
};

export default Help;