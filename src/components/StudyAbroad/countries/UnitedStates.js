import React, {useState} from 'react';
import img1 from '../../../img/first.svg'
import img2 from '../../../img/second.svg'
import img3 from '../../../img/third.svg'
import img4 from '../../../img/fours.svg'
import img5 from '../../../img/fives.svg'
import img6 from '../../../img/sixs.svg'
import img7 from '../../../img/sevens.svg'
import {TfiLocationPin} from "react-icons/tfi";
import {useNavigate} from "react-router-dom";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

const UnitedStates = () => {
    const navigate = useNavigate()
    const [opened, setOpened] = useState('')

    const universities = [
        {img: img1, title: 'Solbrige University', loc: 'Perth', acc: 'From 16'},
        {img: img2, title: 'La Trobe University', loc: 'Riga', acc: 'From 16'},
        {img: img3, title: 'TSI University', loc: 'Riga', acc: 'From 16'},
        {img: img4, title: 'Solbrige University', loc: 'Perth', acc: 'From 16'},
        {img: img5, title: 'Edith University', loc: 'Melbourne', acc: 'From 16'},
        {img: img6, title: 'DCU University', loc: 'Riga', acc: 'From 16'},
        {img: img7, title: 'Cowan University', loc: 'Boston', acc: 'From 16'},

    ]
    return (
        <section id='states'>
            <div className="container">
                <div className="states">
                    <h1>United States</h1>
                    <div className='states--edu'>
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

                    <div className='uni'>
                        {
                            universities.map(el => (
                                <div onClick={() => navigate('/university')} className="uni--block">
                                    <img src={el.img} alt='#'/>
                                    <div className="fl">
                                        <div className='uni--block__info'>
                                            <h2>Name:</h2>
                                            <h1>{el.title}</h1>
                                        </div>
                                        <div className='uni--block__info'>
                                            <h2>Location <span><TfiLocationPin/></span></h2>
                                            <h3>{el.loc}</h3>
                                        </div>
                                    </div>
                                    <div className='uni--block__info del'>
                                        <h2>Age:</h2>
                                        <h3>{el.acc}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnitedStates;