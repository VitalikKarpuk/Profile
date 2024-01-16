import React from 'react';
import { ReactComponent as InstagramIcon } from './img/instagram.svg';
import { ReactComponent as LinkedinIcon } from './img/linkedin.svg';
import { ReactComponent as GitHubIcon } from './img/gitHub.svg';
import { ReactComponent as TelegramIcon } from './img/telegram.svg';

import styles from './index.module.css';

interface ISocialLink {
    url: string;
    icon?: React.ReactNode;
}

const Footer = () => {
    const listSocialLinks: ISocialLink[] = [
        {
            url: 'https://www.linkedin.com/in/vitali-karpuk-7a601418a/',
            icon: <LinkedinIcon />,
        },
        {
            url: 'https://github.com/VitalikKarpuk',
            icon: <GitHubIcon />,
        },
        {
            url: 'https://www.instagram.com/vitalikarpuk',
            icon: <InstagramIcon />,
        },
        {
            url: 'https://www.t.me/VitaliKarpuk',
            icon: <TelegramIcon />,
        },
    ];
    return (
        <footer>
            <div className={styles.content}>
                <p className={styles.copyright}>&copy; 2024 Vitali Karpuk</p>
                <div className={styles.contactInfo}>
                    <a href="mailto:vitalikkarpuk652@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email: vitalikkarpuk652@gmail.com
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    {listSocialLinks.map(({ url, icon }) => {
                        return (
                            <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
                                {icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
