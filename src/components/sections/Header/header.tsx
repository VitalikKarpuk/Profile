import React from 'react';
import Logo from './img/logo.png';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.css';
import classNames from 'classnames';
interface ILink {
    url: string;
    name: string;
}

const Header = () => {
    const location = useLocation();
    const menuList: ILink[] = [
        {
            url: '/',
            name: 'Home',
        },
        {
            url: '/about',
            name: 'About Me',
        },
        {
            url: '/projects',
            name: 'Projects',
        },
        {
            url: '/contact',
            name: 'Contact',
        },
    ];
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={Logo} title="logo" />
                <div className={styles.logoText}>
                    <h1>Vitali Karpuk</h1>
                    <p>WEB & Senior Front-end Developer</p>
                </div>
            </Link>
            <div className={styles.navigation}>
                {menuList.map(({ name, url }) => {
                    const isActive = location.pathname === url;
                    return (
                        <div key={name}>
                            <Link
                                to={url}
                                className={classNames(styles.menuLink, {
                                    [styles.activeMenuLink]: isActive,
                                })}
                            >
                                {name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
