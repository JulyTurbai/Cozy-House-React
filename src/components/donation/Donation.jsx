import React from 'react';

const Donation = () => {
    return (
        <div class="donation">
        <div class="container">
            <div class="donation-block">
                <img class="donation-block__img" src="img/Dog-donation.png" alt="Dog"/>
                <div class="donation-info">
                    <h3 class="donation-info__main-text">
                        In addition, you 
                        can make a donation
                    </h3>
                    <p class="donation-info__bank-name">
                        Name of the bank / Type of bank account
                    </p>
                    <div class="credit-card">
                        <img class="credit-card__img" src="img/icons/credit-card (1).png" alt="card"/>
                        <p class="credit-card__number">
                            8380 2880 8028 8791 7435
                        </p>
                    </div>
                    <p class="donation-info__text">
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