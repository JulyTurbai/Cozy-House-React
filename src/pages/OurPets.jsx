import React, { useEffect, useState } from 'react';
import './Pets.scss';

const url = {
    animals: 'http://localhost:3000/animals'
}

const OurPets = () => {
    const [ pets, setPets ] = useState([]);
    
    useEffect(() => {
        fetch(url.animals)
         .then(res => res.json())
         .then(data => setPets(data))
    }, [])
    
    return (
        <div  className='pets'>
            <div className="container">
                <div className="pets__block">
                    <div className="pets__title">
                        Our Pets
                    </div>
                    <div className="pets cards">
                        <div className="pets">
                            {
                                pets.map(pet => (
                                <div className="pet-card" key={ pet.id }>
                                    <img className="pet-card__img" src={ pet.img } alt="pet"/>
                                    <p className="pet-card__name">{ pet.name }</p>
                                    <button className="pet-card__button">
                                        Learn More
                                    </button>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPets;