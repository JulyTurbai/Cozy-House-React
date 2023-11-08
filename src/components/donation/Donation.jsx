import React from 'react';
import './Donation.scss';
import './DonationMedia.scss'

const Donation = () => {
    return (
        <div className="donation">
        <div className="container">
            <div className="donation-block">
                <img className="donation-block__img" src="img/Dog-donation.png" alt="Dog"/>
                <div className="donation-info">
                    <h3 className="donation-info__main-text">
                        In addition, you 
                        can make a donation
                    </h3>
                    <p className="donation-info__bank-name">
                        Name of the bank / Type of bank account
                    </p>
                    <div className="credit-card">
                        <img className="credit-card__img" src="img/icons/credit-card (1).png" alt="card"/>
                        <p className="credit-card__number">
                            8380 2880 8028 8791 7435
                        </p>
                    </div>
                    <p className="donation-info__text">
                        Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas a ipsum at libero sagittis dignissim sed 
                        ac diam. Praesent ultrices maximus tortor et vulputate. Interdum 
                        et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Donation;