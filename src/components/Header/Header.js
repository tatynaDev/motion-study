import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../../img/logo.svg'
import {FiSearch} from "react-icons/fi";

const Header = () => {
    const [load, setLoad] = useState(true)

    setTimeout(() => {
        setLoad(false);
    }, 5900);

    return (
        <section id='header' style={{
            display: load ? 'none' : 'block'
        }}>
            <div className="header--line"></div>
            <div className="container">
                <div className="header">
                    <Link to={'/'}>
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="header--nav">
                        <NavLink className='header--nav__link' to={'/'}>Home <span></span></NavLink>
                        <NavLink className='header--nav__link' to={'/AboutUs'}>About Us <span></span></NavLink>
                        <NavLink className='header--nav__link' to={'/StudyAbroad'}>Study Abroad <span></span></NavLink>
                        <NavLink className='header--nav__link' to={'/Contacts'}>Contacts <span></span></NavLink>
                    </div>

                    <div className="header--choose">

                        <input className='country'
                               type="text"
                               list='data-list'
                               aria-label='search'
                               placeholder='🔍 Поиск..'
                        />
                        <datalist id='data-list'>
                            <option value="South Korea">South Korea</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="France">France</option>
                            <option value="America">America</option>
                        </datalist>

                        <select>
                            <option value="en">En</option>
                            <option value="kg">KG</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;