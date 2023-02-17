import React from 'react';
import aboutImg from "../../../img/About-team.png";

const AboutPlatform = () => {
    return (
        <>
            <div className="about-us--start">
                <div className="about-us--start__images">
                    <div className="about-us--start__images--line"></div>
                    <div className="about-us--start__images--img">
                        <img src={aboutImg} alt=""/>
                    </div>
                </div>
                <div className="about-us--start__titles">
                    <h1>About Us</h1>
                    <h2>Best Education
                        Platform</h2>
                    <h3>Apparently we had reached a great height in
                        the atmosphere, for the sky was a dead black.</h3>
                    <h4>By the same illusion which lifts the horizon of the sea to
                        the level of the spectator on a hillside, the sable cloud
                        beneath was dished out, and the car seemed to float in the middle.</h4>
                </div>
            </div>
        </>
    );
};

export default AboutPlatform;