import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../img/logotip.svg";
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    const [load, setLoad] = useState(true)

    setTimeout(() => {
        setLoad(false);
    }, 2000);

    return (
        <section id='footer' style={{
            display: load ? 'none' : 'block'
        }}>
            <div className="container">
                <div className="footer">
                    <div className="footer--first">
                        <Link to={'/'}>
                            <img src={logo} alt=""/>
                        </Link>

                        <div className="navbar">
                            <NavLink className='navbar--nav' to={'/'}>Home</NavLink>
                            <NavLink className='navbar--nav' to={'/AboutUs'}>About Us</NavLink>
                            <NavLink className='navbar--nav' to={'/StudyAbroad'}>Study Abroad</NavLink>
                            <NavLink className='navbar--nav' to={'/Contacts'}>Contacts</NavLink>
                        </div>

                        <h1>
                            <span className='you'><AiFillYoutube/></span>
                            <span className='tel'><FaTelegramPlane/></span>
                            <span className='in'><AiFillInstagram/></span>
                        </h1>

                    </div>

                    <hr noshade width='100%' className='line'/>
                    <p>c 2023 Motion Study LLC</p>

                </div>
            </div>
        </section>
    );
};

export default Footer;