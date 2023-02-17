import React from 'react';
import America from '../../img/America.svg'
import Austria from '../../img/Austria.svg'
import Canada from '../../img/Canada.svg'
import China from '../../img/China.svg'
import Cyprus from '../../img/Cyprus.svg'
import France from '../../img/France.svg'
import German from '../../img/German.svg'
import GreatBritain from '../../img/GreatBritain.svg'
import Ireland from '../../img/Ireland.svg'
import Italy from '../../img/Italy.svg'
import Latvia from '../../img/Latvia.svg'
import Spain from '../../img/Spain.svg'
import {useNavigate} from "react-router-dom";

const Choose = () => {
    const navigate = useNavigate()

    const education = {
        country: ['  America', 'Great Britain', 'Austria', 'Germany', 'Holland', 'Ireland', 'Spain', 'Italy', 'Canada', 'Cyprus', 'China', 'Latvia'],
        img: [America, GreatBritain, Austria, German, France, Ireland, Spain, Italy, Canada, Cyprus, China, Latvia]
    }

    return (
        <section id='choose'>
            <div className="container">
                <div className="choose">
                    <h1>Choose the country</h1>
                    <div className='choose--edu'>
                        <select>
                            <option>Higher Education</option>
                        </select>
                        <select>
                            <option>specialization</option>
                        </select>

                    </div>
                    <div className='countries'>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[0]} alt=""/>
                            <h1>{education.country[0]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[1]} alt=""/>
                            <h1>{education.country[1]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[2]} alt=""/>
                            <h1>{education.country[2]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[3]} alt=""/>
                            <h1>{education.country[3]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[4]} alt=""/>
                            <h1>{education.country[4]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[5]} alt=""/>
                            <h1>{education.country[5]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[6]} alt=""/>
                            <h1>{education.country[6]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[7]} alt=""/>
                            <h1>{education.country[7]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[8]} alt=""/>
                            <h1>{education.country[8]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[9]} alt=""/>
                            <h1>{education.country[9]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[10]} alt=""/>
                            <h1>{education.country[10]}</h1>
                        </div>
                        <div onClick={() => navigate('/unitedStates')} className="countryCard">
                            <img src={education.img[11]} alt=""/>
                            <h1>{education.country[11]}</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;