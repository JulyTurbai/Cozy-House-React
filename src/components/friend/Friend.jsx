import React, { useState } from 'react';
import Window from '../window/Window';

const Friend = ({ friend }) => {
    const { id, name, img, breed, age, inoculations, diseases, parasites, description } = friend;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="pet-card" key={ id }>
                <img className="pet-card__img" src={ img } alt="pet" />
                <p className="pet-card__name">{ name }</p>
                <button onClick={ openModal } className="pet-card__button">
                    Learn More
                </button>
            </div>

            {isModalOpen && (
                <Window
                    img={img}
                    name={name}
                    breed={breed}
                    age={age}
                    inoculations={inoculations}
                    diseases={diseases}
                    parasites={parasites}
                    description={description}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

export default Friend;
