import React, {useState} from 'react';
import password from '../../img/Ellipse 6.svg'
import people from '../../img/Ellipse 4.png'
import parish from '../../img/Ellipse 5.png'
import city from '../../img/Ellipse 7.png'
import frame from '../../img/Frame 23.png'
import {FiFacebook, FiPhone} from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import friends from '../../img/Component 41.png'
import book from '../../img/Frame 71.png'
import user from '../../img/Frame 71 (1).png'
import time from '../../img/Frame 71 (2).png'
import prices from '../../img/Frame 71 (3).png'
import rectangle from '../../img/Rectangle 19.png'
import girl from '../../img/Frame 196.png'
import notebook from '../../img/Frame 196 (1).png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import youtube from '../../img/Frame 243.png';
import {BiPhoneCall} from "react-icons/bi";
import {TfiEmail} from "react-icons/tfi";
import {BsInstagram, BsLink45Deg, BsWhatsapp} from "react-icons/bs";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 2.1,
    }
    const [link, setLink] = useState(false);

    function getLink() {
        setLink(!link)
    }

    return (
        <sectioin id='home'>
            <div className={'home '} style={{
                padding: '100px 0',

            }}>
                <div id="study1">
                    <div className="container">
                        <div className="study">
                            <div className="study--one">
                                <div className="study--one__two">
                                    <div className="study--one__two--text">
                                        <h2>EXPLORE THE WORLD</h2>
                                        <h1>Study abroad <br/> with our help</h1>
                                        <p>
                                            Study at the world's top universities and <br/> expand your horizons. Get
                                            the
                                            highest <br/>
                                            quality education and achieve success <br/> abroad.
                                        </p>
                                    </div>


                                    <div className="study--one__two--img">
                                        <div className="study--one__two--img__one">
                                            <div className="study--one__two--img__one--left">
                                                <div className="study--one__two--img__one--left__last">
                                                    <img src={password} alt=""/>
                                                </div>
                                                <div className="study--one__two--img__one--left__img1">
                                                    <img src={people} alt=""/>
                                                </div>
                                            </div>
                                            <div className="study--one__two--img__one--right">
                                                <div className="study--one__two--img__one--right__parish">
                                                    <img src={parish} alt=""/>
                                                </div>
                                                <div className="study--one__two--img__one--right__city">
                                                    <img src={city} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="study--one__two--img__frame">
                                            <img src={frame} alt=""/>
                                        </div>
                                    </div>

                                </div>
                                <div className="study--one__contact">
                                    <div className="study--one__contact--name">
                                        <div className="study--one__contact--name__icons">
                                            <div className="study--one__contact--name__icons--one">
                                                <h1><CiUser/></h1>
                                            </div>
                                            <div className="study--one__contact--name__icons--text">
                                                <h1>NAME</h1>
                                                <span>|Enter your name</span>
                                            </div>
                                        </div>
                                        <div className="study--one__contact--name__phone">
                                            <div className="study--one__contact--name__phone--one">
                                                <h1><FiPhone/></h1>
                                            </div>
                                            <div className="study--one__contact--name__phone--text">
                                                <h1>PHONE</h1>
                                                <span>Enter your phone</span>
                                            </div>
                                        </div>
                                        <div className="study--one__contact--name__btn">
                                            <button>Сontact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="best">
                    <div className="container">
                        <div className="best">
                            <div className="best--one">
                                <div className="best--one__text">
                                    <h1>
                                        This is why we are <br/>
                                        best from others
                                    </h1>
                                    <p>
                                        We provide full support at all stages of preparation, including <br/> assistance
                                        in
                                        filing documents and preparing for an interview. <br/> Contact us and start your
                                        journey to higher education <br/> abroad!
                                    </p>
                                    <img src={friends} alt=""/>
                                </div>
                            </div>
                            <div className="best--two">
                                <div className="best--two__book">
                                    <div className="best--two__book--one">
                                        <div className="best--two__book--one__partners">
                                            <div className="best--two__book--one__partners--img">
                                                <img src={book} alt=""/>
                                            </div>
                                            <div className="best--two__book--one__partners--text">
                                                <h1>1000+ Partners</h1>
                                                <p>
                                                    over 1000+ partners worldwide <br/>
                                                    enter the best universities in <br/>the world
                                                </p>
                                            </div>
                                        </div>
                                        <div className="best--two__book--one__partners">
                                            <div className="best--two__book--one__partners--img">
                                                <img src={user} alt=""/>
                                            </div>
                                            <div className="best--two__book--one__partners--text">
                                                <h1>Experts</h1>
                                                <p>
                                                    We are experts in our field. <br/> help you reach new heights
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="best--two__book--two">
                                        <div className="best--two__book--two__partners">
                                            <div className="best--two__book--one__partners--img">
                                                <img src={time} alt=""/>
                                            </div>
                                            <div className="best--two__book--one__partners--text">
                                                <h1>Time</h1>
                                                <p>
                                                    we will help you save your time <br/> and nerves when applying
                                                    to <br/> the best university.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="best--two__book--two__partners">
                                            <div className="best--two__book--one__partners--img">
                                                <img src={prices} alt=""/>
                                            </div>
                                            <div className="best--two__book--one__partners--text">
                                                <h1>Affordable prices</h1>
                                                <p>
                                                    reasonable prices will always <br/> please you. sign up for
                                                    a <br/> consultation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="exams">
                    <div className="container">
                        <div className="exams">
                            <div className="exams--text">
                                <h1>EXAMS</h1>
                                <p>
                                    Exams are tests that assess a person's knowledge, skills, aptitude, <br/> or other
                                    qualifications in a specific subject or area of study. They are <br/> used to
                                    evaluate
                                    academic performance.
                                </p>
                            </div>

                            <div className="exams--one">
                                <div className="exams--one__img">
                                    <div className="exams--one__img--more">
                                        <img src={rectangle} alt=""/>
                                    </div>
                                    <div className="exams--one__img--text">
                                        <h2>cambrige English exams</h2>
                                        <h1>Your path to learning English, step by step.</h1>
                                        <p>
                                            Cambridge English Qualifications are in-depth exams <br/>
                                            that make learning English enjoyable, effective and rewarding. <br/>
                                            Our qualifications are based on research into effective <br/>
                                            teaching and learning.
                                        </p>
                                        <div className="exams--one__img--text__a">
                                            <a href="#">Discover more</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="exams--one__block">
                                    <div className="exams--one__block--flex">
                                        <div className="exams--one__block--flex__img">
                                            <img src={girl} alt=""/>
                                        </div>
                                        <div className="exams--one__block--flex__text">
                                            <a href="#">aptis</a>
                                            <h1>
                                                Choose Aptis for your <br/>
                                                assessment needs
                                            </h1>
                                            <p>
                                                Aptis is a computer basedtest which provides fast <br/>
                                                results reliably marked by our exsaminest.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="exams--one__block--flex">
                                        <div className="exams--one__block--flex__img">
                                            <img src={notebook} alt=""/>
                                        </div>
                                        <div className="exams--one__block--flex__text">
                                            <a href="#">aptis</a>
                                            <h1>
                                                Choose Aptis for your <br/>
                                                assessment needs
                                            </h1>
                                            <p>
                                                Aptis is a computer basedtest which provides fast <br/>
                                                results reliably marked by our exsaminest.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="exams--one__block--flex">
                                        <div className="exams--one__block--flex__img">
                                            <img src={girl} alt=""/>
                                        </div>
                                        <div className="exams--one__block--flex__text">
                                            <a href="#">aptis</a>
                                            <h1>
                                                Choose Aptis for your <br/>
                                                assessment needs
                                            </h1>
                                            <p>
                                                Aptis is a computer basedtest which provides fast <br/>
                                                results reliably marked by our exsaminest.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="video">
                    <div className="container">
                        <div className="video">
                            <div className="video--text">
                                <h1>video testimonials from our students</h1>
                            </div>
                            <Slider {...settings}>
                                <div className="img">
                                    <img src={youtube} alt=""/>
                                </div>
                                <div className="img">
                                    <img src={youtube} alt=""/>
                                </div>
                                <div className="img">
                                    <img src={youtube} alt=""/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div id="contact">
                    <div className="container">
                        <div className="contact">
                            <div className="contact--one">
                                <div className="contact--one__text">
                                    <h1>Send a message</h1>
                                </div>
                                <div className="contact--one__input">
                                    <div className="contact--one__input--first">
                                        <input type="text" placeholder='First Name'/>
                                    </div>
                                    <div className="contact--one__input--last">
                                        <input type="text" placeholder='Last Name'/>
                                    </div>
                                </div>
                                <div className="contact--one__send">
                                    <div className="contact--one__send--phone">
                                        <input type="text" placeholder='phone'/>
                                    </div>
                                    <div className="contact--one__send--email">
                                        <input type="text" placeholder='email'/>
                                    </div>

                                </div>
                                <div className="contact--one__group">
                                    <input type="text" placeholder='contact--one'/>
                                </div>
                                <div className="contact--one__tare">
                                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                                </div>
                                <div className="contact--one__btn">
                                    <button>Submit</button>
                                </div>
                            </div>
                            <div className="contact--two">
                                <div className="contact--two__text">
                                    <div className="contact--two__text--h1">
                                        <h1>contact Info</h1>
                                    </div>
                                    <div className="contact--two__text--icons">
                                        <div className="contact--two__text--icons__one">
                                            <h1><BiPhoneCall/></h1>
                                        </div>
                                        <div className="contact--two__text--icons__phone">
                                            <h1>+996 500 34 84 39</h1>
                                        </div>
                                    </div>
                                    <div className="contact--two__text--email">
                                        <div className="contact--two__text--email__icons">
                                            <h1><TfiEmail/></h1>
                                        </div>
                                        <div className="contact--two__text--email__text">
                                            <h1>motionweb312@gmail.com</h1>
                                        </div>
                                    </div>
                                    <div className="contact--two__text--telegram">
                                        <h1><FaTelegramPlane/></h1>
                                        <h1 style={{margin: '0 39px'}}><BsWhatsapp/></h1>
                                        <h1><BsInstagram/></h1>
                                    </div>
                                    <div className="contact--two__text--map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1676070362767!5m2!1sru!2skg"
                                            width="600" height="450" allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                                <div className="contact--two__modal"></div>
                                <div className="contact--two__btn">
                                    <button onClick={getLink}><BsLink45Deg/></button>
                                </div>
                            </div>
                        </div>
                        <div className="modal" style={{
                            transform: link ? 'scale(1)' : 'scale(0)'
                        }}>
                            <div className="modal--text">
                                <h1>send</h1>
                            </div>
                            <div className="modal--one">
                                <div className="modal--one__what">
                                    <BsWhatsapp style={{fontSize: '28px'}}/>
                                </div>
                                <div className="modal--one__inst">
                                    <FaInstagram style={{fontSize: '28px'}}/>
                                </div>
                                <div className="modal--one__face">
                                    <FiFacebook style={{fontSize: '28px'}}/>
                                </div>
                                <div className="modal--one__telegram">
                                    <FaTelegramPlane style={{fontSize: '28px'}}/>
                                </div>
                            </div>
                            <div className="modal--btn">
                                <button>Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </sectioin>

    );
};

export default Home;