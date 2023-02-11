import React from 'react';
import imgS from '../../img/study.svg'
import {useNavigate} from "react-router-dom";

const StudyAbroad = () => {
    const navigate = useNavigate()

    return (
        <section id='study'>
            <div className="container">
                <div className="study">
                    <h1>Study Abroad</h1>
                    <div className='study--line'></div>

                    <div className="study--block">
                        <div className="study--block__left">
                            <div className="back">
                                <img className='imgS' src={imgS} alt=""/>
                            </div>

                        </div>
                        <div className="study--block__right">
                            <h4>
                               <b>Motion study</b> for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional development programmes for teachers and specialists of companies and organizations.
                            </h4>

                            <h5>
                                <b>Our partners include:</b>
                                <br/>-	Universities and higher education establishments.
                                <br/>-	Private schools and colleges.
                                <br/>-	State schools and colleges.
                                <br/>-	World known language schools for adults.
                                <br/>-	International language schools for 7-18 y.o. schoolchildren.
                                <br/>-	Business schools
                                <br/>-	Executive centres
                                <br/>-	Summer camps
                                <br/>-	Guardianship companies
                            </h5>
                            <button onClick={() => {
                                navigate('/choose')
                                window.scroll(0,0)
                            }}>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudyAbroad;