import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

const LetIsWorkTogether = ({ className }: { className?: string }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            <Link to="/about" className={styles.link}>
                Let’s work together &#x2192;
            </Link>
        </div>
    );
};

export default LetIsWorkTogether;
