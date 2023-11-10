import React, { useEffect, useState } from 'react';
import './Pets.scss';
import './PetsMedia.scss';

const url = {
    animals: `${process.env.REACT_APP_PUBLIC_API_URL}/animals`
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
                                    <div className="pet-card__img">
                                        <img src={ pet.img } alt="pet"/>
                                    </div>
                                    <div className="pet-card__info">
                                        <div className="pet-card__main">
                                            <p className="pet-card__name">{ pet.name }</p>
                                            <p className="pet-card__breed">{ pet.breed }</p>
                                        </div>
                                        <ul className="pet-card__items">
                                            <li className="pet-card__item">Age: { pet.age }</li>
                                            <li className="pet-card__item">Inoculations: { pet.inoculations }</li>
                                            <li className="pet-card__item">Diseases: { pet.diseases }</li>
                                            <li className="pet-card__item">Parasites: { pet.parasites }</li>
                                            <li className="pet-card__item--descr">{ pet.description }</li>
                                        </ul>
                                    </div>
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