// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <div className='container'>
                <Link className='header__logo' to='/login'><img src={logo} alt='logotype'/></Link>
                <ul className='header__items'>  
                    <li className='header__item'><NavLink className='header__nav-link' to='/login'>Главная</NavLink></li>
                    <li className='header__item'><NavLink className='header__nav-link' to='/login/repositories'>Репозитории</NavLink></li>    
                    <li className='header__item'><NavLink className='header__nav-link' to='/login/profile'>Кабинет</NavLink></li>
                </ul>
                <Link   Link className='header__link link-btn' to='/'>Disconnect</Link>    
            </div>
        </div>
    )
}

export default Header;