import React from 'react';
import Logo from './img/logo.png';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.css';
import classNames from 'classnames';
// import Portal from '../../atoms/portal';
// import MobileMenu from '../../organisms/MobileMenu';
interface ILink {
    url: string;
    name: string;
}

const Header = () => {
    const location = useLocation();
    // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth >= 762) {
    //             setMobileMenuOpen(false);
    //         }
    //     };

    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // const toggleMobileMenu = () => {
    //     setMobileMenuOpen(!isMobileMenuOpen);
    // };

    const menuList: ILink[] = [];
    //     {
    //         url: '/Profile',
    //         name: 'Home',
    //     },
    //     {
    //         url: '/about',
    //         name: 'About Me',
    //     },
    //     {
    //         url: '/projects',
    //         name: 'Projects',
    //     },
    //     {
    //         url: '/contact',
    //         name: 'Contact',
    //     },
    // ];

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={Logo} title="logo" />
                <div className={styles.logoText}>
                    <h1>Vitali Karpuk</h1>
                    <p>WEB & Front-end Developer</p>
                </div>
            </Link>
            <div className={styles.navigationDesktop}>
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
            {/* <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isMobileMenuOpen && (
                <Portal>
                    <MobileMenu
                        menuList={menuList}
                        isOpen={isMobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                    />
                </Portal>
            )} */}
        </div>
    );
};

export default Header;
