import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import rootCss from '../../root.module.css';
import css from './Header.module.css';
import logo from '../../img/logo.svg';

const Header = () => {

    const [show, setShow] = useState(false);

    const showBurger = () => {
        setShow(!show);
    };

    return (
        <div className={css.main_header}>
            <div className={rootCss.container}>
                <div className={css.header_wrap}>
                    <div>
                        <NavLink className={css.header_logo} to={'/goMobile'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.header_links}>
                        <NavLink className={css.header_link} to={'/goMobile'}>Places</NavLink>
                        <NavLink className={css.header_link} to={'/goMobile'}>Cooperation</NavLink>
                        <NavLink className={css.header_link} to={'/goMobile'}>About us</NavLink>
                        <NavLink className={css.header_link} to={'/goMobile'}>Login</NavLink>
                    </div>
                    <div className={css.burger_btn} onClick={() => showBurger()}>
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>
                </div>
            </div>
            <div className={show ? css.burger_menu_show : css.burger_menu}>
                <NavLink className={css.header_link} to={'/goMobile'}>Login</NavLink>
                <NavLink className={css.header_link} to={'/goMobile'}>Places</NavLink>
                <NavLink className={css.header_link} to={'/goMobile'}>Cooperation</NavLink>
                <NavLink className={css.header_link} to={'/goMobile'}>About us</NavLink>
            </div>
        </div>
    );
};

export {Header};