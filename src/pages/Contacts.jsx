import React from 'react';
import './Contacts.scss';
import './ContactsMedia.scss';

const Contacts = () => {
    return (
       <div className="contacts-shelter">
            <div className="container">
                <div className="contacts-shelter__main">
                    <div className="contacts-shelter__block">
                        <div className="contacts-shelter__part-one">
                            <div className="contacts-shelter__email">
                                <p>Email: email@shelter.com</p>
                            </div>
                            <div className="contacts-shelter__phone">
                                <p>Phone: 13 674 567 75 54</p>
                            </div>
                        </div>
                        <div className="contacts-shelter__part-two">
                            <div className="contacts-shelter__adress-one">
                                <p>Boston, Central Street, 1st
                                (Entrance from the store)
                                </p>
                            </div>
                            <div className="contacts-shelter__adress-two">
                                <p>London, South Park, 18st</p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-shelter__img">
                        <img src="img/Contacts.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;