import React from 'react';
import "./Footer.scss";
import "./FooterMedia.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="info-block">
                        <div className="contacts">
                            <h2 className="contacts__main-text">
                                For questions 
                                and suggestions
                            </h2>
                            <div className="contacts-mail">
                                <img className="contacts-mail__img" src="./img/icons/envelope.png" alt="envelope"/>
                                <p className="contacts-mail__text">
                                    email@shelter.com
                                </p>
                            </div>
                            <div className="contacts-phone">
                                <img className="contacts-phone__img" src="./img/icons/telephone.png" alt="phone"/>
                                <p className="contacts-phone__number">
                                    13 674 567 75 54
                                </p>
                            </div>
                        </div>
                        <div className="adress">
                            <h2 className="adress__text">
                                We are waiting 
                                for your visit
                            </h2>
                            <div className="adress-points">
                                <img className="adress-points__img" src="./img/icons/pin.png" alt="pin"/>
                                <p className="adress-points__coordinate">
                                    Boston, Central Street, 1st
                                    (Entrance from the store)
                                </p>
                            </div>
                            <div className="adress-points--last">
                                <img className="adress-points__img" src="./img/icons/pin.png" alt="pin"/>
                                <p className="adress-points__coordinate">
                                    London, South Park, 18st
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className="footer-block__img" src="./img/Dog-footer.png" alt="dog"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;