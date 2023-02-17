import React from 'react';
import aboutImg from "../../img/About-team.png"
import team1 from "../../img/team1.png"
import team2 from "../../img/team2.png"
import team3 from "../../img/team3.png"
import team4 from "../../img/team4.png"
import team5 from "../../img/team5.png"
import team6 from "../../img/team6.png"
import AboutPlatform from "./AboutPlatform/AboutPlatform";

const AboutUs = () => {
    return (
        <>
            <div id="about-us">
                <div className="container">
                    <div className="about-us">
                            <AboutPlatform/>
                        <h6>
                            Our Team
                        </h6>
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