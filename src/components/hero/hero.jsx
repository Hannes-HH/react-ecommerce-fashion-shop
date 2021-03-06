import React from 'react'; 
import './hero.styles.scss'; 

const Hero = () => {
    return (
    <section className="hero is-large is-info hero-image">
    <div className="hero-body">
    <p className="hero-title">
    We create clothing, sneakers and various Lifestyle Accessories. 
    </p>
    <div className="shop-now-btn">
        <button className="button is-black" id="shop-now">SHOP NOW</button>
    </div>
    </div>
    </section>
    )
}; 

export default Hero; 