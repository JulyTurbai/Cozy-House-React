import React from 'react';
import './AboutShelter.scss';
import './AboutShelterMedia.scss';

export const AboutShelter = () => {
    return (
        <div className='about-shelter'>
            <div className="container">
                <div className="about-shelter__block">
                    <div className="about-shelter__main">
                        <img className='about-shelter__img' src="img/about-Pets.png" alt="" />
                        <div className="about-shelter__info">
                            <div className="about-shelter__title">
                                <p>About the shelter<br/>"Cozy House"</p>
                            </div>
                            <div className="about-shelter__descr">
                                <p className='about-shelter__descr--one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Laudantium molestias ullam nesciunt consequatur, soluta aliquam 
                                    vero quisquam ipsam fuga enim distinctio nemo nisi laboriosam, 
                                    velit perferendis saepe autem sequi laborum.Lorem
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Voluptatibus porro expedita ad non, consequuntur unde doloremque ex 
                                    libero beatae possimus reprehenderit at iure. Quos dicta cum minima dolor itaque a!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam, illo laborum officiis 
                                    laboriosam voluptas natus minima dignissimos modi vitae molestiae 
                                    repellendus dolorum repellat voluptate velit omnis. Eligendi, odio recusandae!
                                </p>
                                <p className='about-shelter__descr--two'>
                                    Quos dicta cum minima dolor itaque a!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam, illo laborum officiis 
                                    laboriosam voluptas natus minima dignissimos modi vitae molestiae 
                                    repellendus dolorum repellat voluptate velit omnis. Eligendi, odio recusandae!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutShelter;