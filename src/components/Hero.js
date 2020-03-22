import React from 'react';

const Hero = props => {
    const {headline, text, cta} = props;

    return (
        <div className="hero-container width-container">
            <div className="">
                <h1>{headline}</h1>
                <p className="hero-text">{text}</p>
                {
                    cta && cta.ctaText && cta.ctaLink &&
                    <a href={cta.ctaLink} className="cta-button light">{cta.ctaText}</a>
                }
            </div>
        </div>
    )
};

export default Hero;