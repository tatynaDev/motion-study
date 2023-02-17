import React, {useState} from 'react';
import password from '../../img/Ellipse 6.svg'
import people from '../../img/Ellipse 4.png'
import parish from '../../img/Ellipse 5.png'
import city from '../../img/Ellipse 7.png'
// import frame from '../../img/Frame 23.png'
import heroContactImg1 from '../../img/Group 4.svg'
import heroContactImg2 from '../../img/Group 5.svg'
// import {FiFacebook} from "react-icons/fi";
// import {CiUser} from "react-icons/ci";
import friends from '../../img/Component 41.png'
import book from '../../img/Frame 71.png'
// import user from '../../img/Frame 71 (1).png'
// import time from '../../img/Frame 71 (2).png'
// import prices from '../../img/Frame 71 (3).png'
import rectangle from '../../img/Rectangle 19.png'
import girl from '../../img/Frame 196.png'
import notebook from '../../img/Frame 196 (1).png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import youtube from '../../img/Frame 243.png'
import {BiPhoneCall} from "react-icons/bi";
import {TfiEmail} from "react-icons/tfi";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"
import {Link} from "react-router-dom";
import {SlLink} from "react-icons/sl";
import  OutsideClickHandler  from 'react-outsideclickhandler'
// import {ImWhatsapp} from "react-icons/im";

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 2.1,
    }
    const [isSocialModal, setIsSocialModal] = useState(false);

    return (
        <sectioin id='home'>
            <div className={'home '} style={{
                padding: '100px 0',

            }}>
                <div id="hero">
                    <div className="container">
                        <div className="hero">
                            <div className="hero-desc">
                                <h3 className="hero-desc_subtitle">EXPLORE THE WORLD</h3>
                                <h1 className="hero-desc_title">Study abroad <br/>with our help</h1>
                                <p>Study at the world's top universities and expand your horizons. Get the highest
                                    quality education and achieve success abroad.</p>
                            </div>
                            <div className="hero-block">
                                <div className="hero-block_sm-img sm-1">
                                    <img src={password} alt=""/>
                                </div>
                                <div className="hero-block_lg-img lg-1">
                                    <img src={people} alt=""/>
                                </div>
                                <div className="hero-block_lg-img lg-2">
                                    <img src={parish} alt=""/>
                                </div>
                                <div className="hero-block_sm-img sm-2">
                                    <img src={city} alt=""/>
                                </div>
                                <div className="hero-block_blur-top">
                                    <div></div>
                                </div>
                                <div className="hero-block_blur-bottom">
                                    <div></div>
                                </div>
                            </div>
                            <div className="hero-contact">
                                <div className="hero-contact_group">
                                    <div className="hero-contact_group-bg">
                                        <img src={heroContactImg1} alt=""/>
                                    </div>
                                    <div className="hero-contact_group-desc">
                                        <h5>NAME</h5>
                                        <input type="text" placeholder="|Enter your name"/>
                                    </div>
                                </div>
                                <div className="hero-contact_group group-2">
                                    <div className="hero-contact_group-bg">
                                        <img src={heroContactImg2} alt=""/>
                                    </div>
                                    <div className="hero-contact_group-desc">
                                        <h5>PHONE</h5>
                                        <input type="text" placeholder="Enter your phone"/>
                                    </div>
                                </div>
                                <button className="hero-contact_btn">Сontact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about-us">
                    <div className="container">
                        <div className="about-us">
                            <div className="about-us_desc">
                                <h1 className="about-us_desc-title">This is why we are best from others</h1>
                                <p>We provide full support at all stages of preparation, including assistance in filing
                                    documents and preparing for an interview. Contact us and start your journey to
                                    higher education abroad!</p>
                                <div className="about-us_desc-bg">
                                    <img src={friends} alt=""/>
                                </div>
                            </div>
                            <div className="about-us_blocks">
                                <div className="about-us_blocks-block">
                                    <div className="about-us_blocks-block_bg">
                                        <img src={book} alt=""/>
                                    </div>
                                    <h4>1000+ Partners</h4>
                                    <p>over 1000+ partners worldwide enter the best universities in the world</p>
                                </div>
                                <div className="about-us_blocks-block">
                                    <div className="about-us_blocks-block_bg">
                                        <img src={book} alt=""/>
                                    </div>
                                    <h4>Experts</h4>
                                    <p>We are experts in our field. help you reach new heights</p>
                                </div>
                                <div className="about-us_blocks-block">
                                    <div className="about-us_blocks-block_bg">
                                        <img src={book} alt=""/>
                                    </div>
                                    <h4>Time</h4>
                                    <p>we will help you save your time and nerves when applying to the best
                                        university.</p>
                                </div>
                                <div className="about-us_blocks-block">
                                    <div className="about-us_blocks-block_bg">
                                        <img src={book} alt=""/>
                                    </div>
                                    <h4>Affordable prices</h4>
                                    <p>reasonable prices will always please you. sign up for a consultation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="exams">
                    <div className="container">
                        <div className="exams">
                            <h1 className="exams-title">exams</h1>
                            <p className="exams-p">Exams are tests that assess a person's knowledge, skills, aptitude,
                                or other qualifications in a specific subject or area of study. They are used to
                                evaluate academic performance.</p>
                            <div className="exams-group">
                                <div className="exams-group_block">
                                    <div className="exams-group_block-bg">
                                        <img src={rectangle} alt=""/>
                                    </div>
                                    <div className="exams-group_block-desc">
                                        <span className="exams-group_block-desc_subtitle">cambrige English exams</span>
                                        <h4 className="exams-group_block-desc_title">Your path to learning English, step
                                            by step.</h4>
                                        <p>Cambridge English Qualifications are in-depth exams
                                            that make learning English enjoyable, effective and rewarding.
                                            Our qualifications are based on research into effective
                                            teaching and learning.</p>
                                        <Link className="exams-group_block-desc_link" to={"/Discover-more"}>Discover
                                            more</Link>
                                    </div>
                                </div>
                                <div className="exams-group_blocks">
                                    <div className="exams-group_blocks-block">
                                        <div className="exams-group_blocks-block_bg">
                                            <img src={girl} alt=""/>
                                        </div>
                                        <div className="exams-group_blocks-block_desc">
                                            <Link to={"/Aptis"}
                                                  className="exams-group_blocks-block_desc-link">aptis</Link>
                                            <h4>Choose Aptis for your assessment needs</h4>
                                            <p>Aptis is a computer basedtest which provides fast
                                                results reliably marked by our exsaminest.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="exams-group_blocks-block">
                                        <div className="exams-group_blocks-block_bg">
                                            <img src={notebook} alt=""/>
                                        </div>
                                        <div className="exams-group_blocks-block_desc">
                                            <Link to={"/Ielts"}
                                                  className="exams-group_blocks-block_desc-link">iELTS</Link>
                                            <h4>Here’s all you need to know about IELTS</h4>
                                            <p>IELTS (the International English Language Testing
                                                is the world’s most popular.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="exams-group_blocks-block">
                                        <div className="exams-group_blocks-block_bg">
                                            <img src={notebook} alt=""/>
                                        </div>
                                        <div className="exams-group_blocks-block_desc">
                                            <Link to={"/Other-exams"} className="exams-group_blocks-block_desc-link">other
                                                exams</Link>
                                            <h4>There are a variety of competitive exams besides.</h4>
                                            <p>But covering them
                                                is no big deal. Just study ncert books for these.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="comments">
                    <div className="container">
                        <div className="comments">
                            <h2 className="comments-title">video testimonials from our students</h2>
                            <Slider {...settings}>
                                <div>
                                    <img src={youtube} alt=""/>
                                </div>
                                <div>
                                    <img src={youtube} alt=""/>
                                </div>
                                <div>
                                    <img src={youtube} alt=""/>
                                </div>
                                <div>
                                    <img src={youtube} alt=""/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div id="info">
                    <div className="container">
                        <div className="info">
                            <form className="info-form">
                                <h2 className="info-form_title">Send a message</h2>
                                <div className="info-form_group">
                                    <input type="text" placeholder="First Name" className="input1"/>
                                    <input type="text" placeholder="Last Name" className="input2"/>
                                    <input type="tel" placeholder="phone" className="input3"/>
                                    <input type="email" placeholder="email" className="input4"/>
                                    <input className="info-form_group_last-input" type="text"
                                           placeholder="Group or Company"/>
                                </div>
                                <textarea className="info-form_comment" placeholder="how can we help?"></textarea>
                                <button className="info-form_btn">Submit</button>
                            </form>
                            <div className="info-address">
                                <h4>Contact Info</h4>
                                <div className="info-address_group">
                                    <BiPhoneCall className="info-address_group-icon"/>
                                    <span>+996 500 34 84 39</span>
                                </div>
                                <div className="info-address_group">
                                    <TfiEmail className="info-address_group-icon"/>
                                    <span>motionweb312@gmail.com</span>
                                </div>
                                <div className="info-address_icons">
                                    <FaTelegramPlane className="info-address_icons-icon"/>
                                    <BsWhatsapp className="info-address_icons-icon"/>
                                    <BsInstagram className="info-address_icons-icon"/>
                                </div>
                                <div className="info-address_location">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.684516598785!2d74.56904770781252!3d42.87978510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2sMotion%20Web!5e0!3m2!1sen!2skg!4v1675928666347!5m2!1sen!2skg"
                                        allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                            <div className="info_social-links">
                                <button onClick={() => setIsSocialModal(true)} className="info_social-links_circle">
                                    <SlLink className="info_social-links_circle-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {isSocialModal && (
                        <div id="social-modal">
                                <OutsideClickHandler onOutsideClick={() => setIsSocialModal(false)}>
                                <div className="social-modal">
                                    <h2>Send</h2>
                                    <div className="social-modal_icons">
                                        <div className="social-modal_icons-block whatsapp">
                                            <BsWhatsapp className="social-modal_icons-block_icon"/>
                                        </div>
                                        <div className="social-modal_icons-block instagram">
                                            <BsInstagram className="social-modal_icons-block_icon"/>
                                        </div>
                                        <div className="social-modal_icons-block facebook">
                                            <FaFacebookF className="social-modal_icons-block_icon"/>
                                        </div>
                                        <div className="social-modal_icons-block telegram">
                                            <FaTelegramPlane className="social-modal_icons-block_icon"/>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsSocialModal(false)} className="social-modal_btn">Done
                                    </button>
                                </div>
                            </OutsideClickHandler>
                        </div>
                    )}
                </div>
            </div>
        </sectioin>

    );
};

export default Home;