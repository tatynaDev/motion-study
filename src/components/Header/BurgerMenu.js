import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {HiPhoneXMark} from "react-icons/hi2";
import {MdEmail} from "react-icons/md";

const BurgerMenu = ({button, setButton}) => {
    return (
        <div className="header--burger__menu" style={{display: button ? 'block' : 'none'}}>
            <div className="navs">
                <NavLink onClick={() => setButton(false)}
                    className='link' to={'/'}>Home <span></span></NavLink>
                <NavLink onClick={() => setButton(false)}
                    className='link' to={'/AboutUs'}>About Us <span></span></NavLink>
                <NavLink onClick={() => setButton(false)}
                    className='link' to={'/StudyAbroad'}>Study Abroad <span></span></NavLink>
                <NavLink onClick={() => setButton(false)}
                    className='link' to={'/'}>Contacts <span></span></NavLink>
            </div>

            <div className="btn">
                <button>EN</button>
                <button>RU</button>
                <button>KG</button>
            </div>

            <div className="contact">
                <Link onClick={() => setButton(false)} className='to' to={''}><FaTelegramPlane/></Link>
                <Link onClick={() => setButton(false)} className='to' to={''}><RiInstagramFill/></Link>
                <Link onClick={() => setButton(false)} className='to' to={''}><HiPhoneXMark/></Link>
                <Link onClick={() => setButton(false)} className='to' to={''}><MdEmail/></Link>
            </div>
        </div>
    );
};

export default BurgerMenu;