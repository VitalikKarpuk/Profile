import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './index.module.css';

interface MobileMenuProps {
    menuList: { name: string; url: string }[];
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuList, isOpen, onClose }) => {
    const menuClasses = classNames(styles.mobileMenu, { [styles.open]: isOpen });

    return (
        <div className={menuClasses}>
            <div className={styles.menuContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    <span className={styles.closeIcon}></span>
                </button>
                <ul className={styles.menuList}>
                    {menuList.map(({ name, url }) => (
                        <li key={name}>
                            <Link to={url} onClick={onClose}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
