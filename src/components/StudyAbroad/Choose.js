import React, {useState} from 'react';
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
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

const Choose = () => {
    const navigate = useNavigate()
    const [opened, setOpened] = useState('')

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

                        <div className='sel'>
                            <h5 onClick={() => setOpened('1')}
                                className='select'>Higher Education <span>{ opened === '1' ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</span></h5>
                            <div className="option" style={{
                                transition: '.2s',
                                display: opened === '1' ? 'block' : "none"
                            }}>
                                <option>Higher Education</option>
                                <option>Secondary education</option>
                                <option>Higher education</option>
                                <option>Languages courses for youth</option>
                                <option>Children's language camps</option>
                            </div>
                        </div>

                        <div className='sel'>
                            <h5 onClick={() => setOpened('2')}
                                className='select'>Specialization <span>{ opened === '2' ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</span></h5>
                            <div className="option" style={{
                                transition: '.2s',
                                display: opened === '2' ? 'block' : "none"
                            }}>
                                <option selected>Specialization</option>
                                <option>IT Technologies</option>
                                <option>Business</option>
                                <option>Medicine</option>
                                <option>International Relationships</option>
                                <option>Tourism</option>
                            </div>
                        </div>


                        <div className='sel'>
                            <h5 onClick={() => setOpened('3')}
                                className='select'>Сountries <span>{ opened === '3' ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</span></h5>
                            <div className="option" style={{
                                transition: '.2s',
                                display: opened === '3' ? 'block' : "none"
                            }}>
                                <option selected>Сountries</option>
                                <option>America</option>
                                <option>Germany</option>
                                <option>Indonesia</option>
                                <option>South Korea</option>
                            </div>

                        </div>



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