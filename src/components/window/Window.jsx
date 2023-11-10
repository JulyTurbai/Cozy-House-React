import React from 'react';
import './Window.scss';

const Window = ({ img, name, breed, age, inoculations, diseases, parasites, description, closeModal }) => {
    return (
        <div className="modal">
            <div className="modal__img">
                <img src={img} alt="" />
            </div>
            <div className="modal__info">
                <p className="modal__item--name">{name}</p>
                <p className="modal__item">{breed}</p>
                <p className="modal__item">Age: {age}</p>
                <p className="modal__item">Inoculations: {inoculations}</p>
                <p className="modal__item">Diseases: {diseases}</p>
                <p className="modal__item">Parasites: {parasites}</p>
                <p className="modal__item">{description}</p>
                <button className='modal__button' onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default Window;
