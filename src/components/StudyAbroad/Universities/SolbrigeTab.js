import React, {useEffect, useState} from 'react';
import solbrige from '../../../img/image 101.svg'
import {ImCalendar} from "react-icons/im";
import {AiFillBank} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import {FaTelegram} from "react-icons/fa";
import I1 from '../../../img/I1.png'
import I2 from '../../../img/I2.png'
import I3 from '../../../img/I3.png'
import I4 from '../../../img/I4.png'
import I5 from '../../../img/I5.png'
import I6 from '../../../img/I6.png'

const SolbrigeTab = () => {
    const [tab, setTab] = useState('')

    useEffect(() => {
        setTab('first')
    }, [])

    return (
        <>
            <div className='categories'>
                <button onClick={() => setTab('first')} style={{borderBottom: tab !== 'first' && 'none'}}>Description</button>
                <button onClick={() => setTab('second')} style={{borderBottom: tab !== 'second' && 'none'}}>Cost</button>
                <button onClick={() => setTab('third')} style={{borderBottom: tab !== 'third' && 'none'}}>Photo</button>
            </div>

            <div className="first" style={{
                display: tab === 'first' ? 'block' : 'none'
            }}>
                <div className="tabs1">
                    <div className="description">
                        <div className="description--first">
                            <img src={solbrige} alt=""/>
                            <div className="description--first__des">
                                <h1 className='des'>landscape design</h1>
                                <p>University of Fashion and <br/>Design</p>
                            </div>
                        </div>
                        <div className="description--second">
                            <p>Nominal duration: </p>
                            <p>4.5 years(240 ECTS) </p>
                        </div>
                        <div className="description--third">
                            <p>Awards:</p>
                            <p className='text'><b>B.Sc.</b> (Professional Bachelor’s degree in Business Management,
                                qualification: Business Manager or E-Business Manager)</p>
                        </div>
                        <hr noshade className='line' width={580} size={2}/>
                        <div className="description--four">
                            <h2>Tuition fee:</h2>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3>€1,400 per semester
                                    US$1,502.87</h3>
                                <hr noshade style={{margin: '10px 0'}}/>
                            </div>
                        </div>
                        <div className="description--five">
                            <h2>Application fee:</h2>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3>€120 one-time
                                    US$128.83</h3>
                                <hr noshade style={{margin: '10px 0'}}/>
                            </div>
                        </div>
                        <div className="description--five">
                            <h2>Registration fee:</h2>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h4>US$150 one-time

                                    <br/>You need to choose student status:
                                    <br/>Base – 150 USD
                                    <br/>Standard – 500 USD
                                    <br/>VIP – 900 USD

                                </h4>
                            </div>
                        </div>
                        <hr noshade className='line' width={580} size={2}/>
                        <div className='description--six'>
                            <h2>Tuition fee:</h2>
                            <div>
                                <h2>High school / secondary education (or higher)
                                    Completed Secondary Education ( 12 years, in some countries 11 years)</h2>
                                <hr className='line'/>
                            </div>
                        </div>
                        <div className='description--six'>
                            <h2>Entry qualication:</h2>
                            <div>
                                <h2>
                                    The entry qualification documents are accepted in the following languages: English /
                                    Lithuanian.Often you can get a suitable transcript from your school. If this is not the
                                    case, you will need official translations along with verified copies of the original.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="apply">
                        <div className="apply--text">
                            <h2>Apply Now!!! <span>Fall semester 2023</span></h2>
                        </div>

                        <div className="apply--pre">
                            <h3><ImCalendar/></h3>
                            <div className="deadline">
                                <h2>Pre-deadline</h2>

                                <p> Please ask your manager in Baltic Center about correct deadline for your country</p>

                                <p>20 Jun 2023, 23:59:59Eastern European Time</p>
                            </div>
                        </div>
                        <div className="apply--pre">
                            <h3><ImCalendar/></h3>
                            <div className="deadline">
                                <h2>Application deadline</h2>

                                <p> 31 Aug 2023, 23:59:59Eastern European Time</p>

                                <p>Autumn Intake</p>
                            </div>
                        </div>
                        <div className="apply--pre">
                            <h3><AiFillBank/></h3>
                            <div className="deadline">
                                <h2>Studies commence</h2>
                                <p>4 Sept 2023</p>
                            </div>
                        </div>

                        <div className="apply--text">
                            <h2>Apply Now!!! <br/><span>Fall semester 2023</span></h2>
                        </div>

                        <div className="apply--pre">
                            <h3><AiFillBank/></h3>
                            <div className="deadline">
                                <h2>Studies commence</h2>
                                <p>4 Sept 2023</p>
                            </div>
                        </div>

                        <hr size={1} color='#1d1d1d'/>

                        <div className='share'>
                            <h2>Share on:</h2>
                            <h1>
                                <IoLogoWhatsapp className='what'/>
                                <BsInstagram className='inst'/>
                                <FaTelegram className='tel'/>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="second" style={{
                display: tab === 'second' ? 'block' : 'none'
            }}>
                <p>
                    <span style={{
                        color:'#36ADF0'
                    }}>The Cost Of Studying</span> at the Istituto Europeo di Design for the 2023-2024 academic year:
                </p>
                <p>
                    – Academic year (training) – from 1,566,000 rubles.
                    <br/>– Academic year (accommodation) – from 870,000 rubles.
                </p>
            </div>

            <div className="third" style={{
                display: tab === 'third' ? 'block' : 'none'
            }}>
                <img src={I1} alt=""/>
                <img src={I2} alt=""/>
                <img src={I3} alt=""/>
                <img src={I4} alt=""/>
                <img src={I5} alt=""/>
                <img src={I6} alt=""/>
            </div>

        </>
    );
};

export default SolbrigeTab;