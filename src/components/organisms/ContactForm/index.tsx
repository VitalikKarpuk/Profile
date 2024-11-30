import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';

import styles from './index.module.css';
import classNames from 'classnames';
import sendMessage from '../../../common/emailjs';
import Input from '../../atoms/input';

export interface IFormData {
    name: string;
    email: string;
    message: string;
    interest: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        message: '',
        interest: '',
    });

    // const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextareaInput = () => {
        if (textareaRef.current) {
            const paddings = 20;
            const textarea = textareaRef.current;
            textarea.style.height = `${textarea.scrollHeight - paddings}px`;
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage(formData);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.formContainer}>
            <div id="contact-form">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.formTitle}>
                        Got a project? Drop me a line if you want to work together on something exciting. Big or small.
                        Mobile or web.
                    </h2>
                    <div>
                        <label className={styles.formLabel} htmlFor="name">
                            Your Name
                        </label>
                        <Input
                            name="name"
                            value={formData.name}
                            placeholder="What’s your name?"
                            required
                            onChange={handleChange}
                            className={styles.formInput}
                        />
                    </div>
                    <div>
                        <label className={styles.formLabel} htmlFor="email">
                            Your Email
                        </label>
                        <input
                            className={styles.formInput}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="What’s your email address?"
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.formLabel} htmlFor="interest">
                            What are you interested in?
                        </label>
                        <select
                            className={classNames(styles.formInput, styles.select)}
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="one-off-project">Need help with a one-off project</option>
                            <option value="long-term-partnership">Looking for a long term partnership</option>
                            <option value="full-time-hire">Want to hire me full-time</option>
                            <option value="just-say-hi">Just wanted to say hi!</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.formLabel} htmlFor="message">
                            Message
                        </label>
                        <textarea
                            ref={textareaRef}
                            className={classNames(styles.formInput, styles.formTextarea)}
                            id="message"
                            name="message"
                            value={formData.message}
                            rows={1}
                            onChange={handleChange}
                            onInput={handleTextareaInput}
                            placeholder="What’s your message?"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.formSubmitBtn}>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
