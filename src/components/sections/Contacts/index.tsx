import React from 'react';
import ContactForm from '../../organisms/ContactForm';

import styles from './index.module.css';
import SubHeader from '../../atoms/subHeader';

const Contacts = () => {
    return (
        <>
            <SubHeader title="CONTACT" />
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <h3>Get in touch — let’s work together.</h3>
                    <div className={styles.address}>
                        <SubHeader title="ADDRESS" className={styles.subHeader} />
                        <span>Minsk Belarus, EU</span>
                    </div>
                </div>
                <ContactForm />
            </div>
        </>
    );
};

export default Contacts;
