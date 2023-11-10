import React from 'react';

const Friend = ({ friend }) => {
    const { id, name, img,  } = friend;
    
    const FriendInfo = () => {
        document.querySelector('.descr').classList.remove('none');
        document.querySelector('.descr').innerHTML = '';
    
        let str = `
            <div class="modal" style="max-width: 700px; min-height: 400px; background-color: white; 
                padding: 5px; border: 2px solid #f1cdb3; display: flex; justify-content: center; align-items: center; border-radius: 8px;" key=${friend.id}>
                <div class="modal__img" style="margin-right: 30px;">
                    <img src="${friend.img}" alt="" />
                </div>
                <div class="modal__info">
                    <p class="modal__name" style="margin-bottom: 20px; font-weight: bold; font-size: 20px;">${friend.name}</p>
                    <p class="modal__breed" style="margin-bottom: 10px;"> ${friend.breed}</p>
                    <p class="modal__age" style="margin-bottom: 10px;">Age: ${friend.age}</p>
                    <p class="modal__inoculations" style="margin-bottom: 10px;">Inoculations: ${friend.inoculations}</p>
                    <p class="modal__diseases" style="margin-bottom: 10px;">Diseases: ${friend.diseases}</p>
                    <p class="modal__parasites" style="margin-bottom: 10px;">Parasites: ${friend.parasites}</p>
                    <p class="modal__description" style="margin-bottom: 10px;">${friend.description}</p>
                </div>
            </div>
        `;
    
        document.querySelector('.descr').innerHTML = str;
    };
    
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 1100px) {
            .modal {
                display: flex;
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(style);
    

    
    return (
        
            <div className="pet-card" key={ id }>
                <img className="pet-card__img" src={ img } alt="pet"/>
                <p className="pet-card__name">{ name }</p>
                <button onClick={ FriendInfo } className="pet-card__button">
                    Learn More
                </button>
            </div>    
    );
};

export default Friend;