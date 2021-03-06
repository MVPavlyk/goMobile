import React from 'react';
import css from './Footer.module.css';
import rootCss from '../../root.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={rootCss.container}>
                <div className={css.footer_wrap}>
                    <div className={css.footer_links}>
                        <NavLink className={css.footer_link} to={'/goMobile'}>Places</NavLink>
                        <NavLink className={css.footer_link} to={'/goMobile'}>Cooperation</NavLink>
                        <NavLink className={css.footer_link} to={'/goMobile'}>About us</NavLink>
                    </div>
                    <div>
                        <NavLink className={css.footer_logo} to={'/goMobile'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.footer_info}>
                        <div className={css.footer_info_titles}>Contacts</div>
                        <a className={css.footer_info_content} href={'/goMobile'}>example@gmail.com</a>
                        <a className={css.footer_info_content} href={'/goMobile'}>t/me.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};