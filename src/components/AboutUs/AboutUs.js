import React from 'react';
import aboutImg from "../../img/About-team.png"
import team1 from "../../img/team1.png"
import team2 from "../../img/team2.png"
import team3 from "../../img/team3.png"
import team4 from "../../img/team4.png"
import team5 from "../../img/team5.png"
import team6 from "../../img/team6.png"

const AboutUs = () => {
    return (
        <>
            <div id="about-us">
                <div className="container">
                    <div className="about-us">
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
                        <div className="about-us--text">
                            <h1>
                                Our Team
                            </h1>
                        </div>
                        <div className="about-us--teams">
                            <div className="about-us--teams__block">
                                <img src={team1} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                            <div className="about-us--teams__block">
                                <img src={team2} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                            <div className="about-us--teams__block">
                                <img src={team3} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                            <div className="about-us--teams__block">
                                <img src={team4} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                            <div className="about-us--teams__block">
                                <img src={team5} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                            <div className="about-us--teams__block">
                                <img src={team6} alt=""/>
                                <div className="about-us--teams__block--about">
                                    <h5>Miss.Anushin oont </h5>
                                    <h6>CEO & co-Founder</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;