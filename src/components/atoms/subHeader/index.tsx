import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

const SubHeader = ({ title, className }: { title: string; className?: string }) => {
    return <div className={classNames(styles.title, className)}>{title}</div>;
};

export default SubHeader;
