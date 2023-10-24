import React from 'react';
import styles from './index.module.css';
import photo from './img/photo.png';
import { Link } from 'react-router-dom';
import LetIsWorkTogether from '../../organisms/LetIsWorkTogether';

const MainContent = () => {
    return (
        <>
            <div className={styles.mainContentWrapper}>
                <div className={styles.content}>
                    <p>Vitali Karpuk</p>
                    <h2>Senior Front-end Developer</h2>
                    <div className={styles.welcome}>
                        Hello and welcome to my portfolio! I am Vitali, a frontend web developer with a passion for
                        creating exceptional web applications. I specialize in crafting interactive and user-friendly
                        interfaces using the latest technologies.
                    </div>

                    <Link className={styles.readAboutMeLink} to={'./about'}>
                        Read About Me
                    </Link>
                </div>

                <img src={photo} alt="photo" />
            </div>
            <LetIsWorkTogether className={styles.letIsWorkTogether} />
        </>
    );
};

export default MainContent;
