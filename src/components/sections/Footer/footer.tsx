import React from 'react';
import styles from './index.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
                <div className={styles.socialMedia}>
                    <a
                        href="https://www.linkedin.com/in/vitali-karpuk-7a601418a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="https://github.com/VitaliKarpuk" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="mailto:vitalikkarpuk652@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>&copy; 2023 Your Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
