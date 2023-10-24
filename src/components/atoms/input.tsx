import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

interface InputProps {
    type?: 'text' | 'email' | 'password';
    name?: string;
    value: string;
    placeholder: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', name, value, placeholder, required, onChange, className }) => {
    return (
        <input
            className={classNames(styles.formInput, className)}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    );
};

export default Input;
