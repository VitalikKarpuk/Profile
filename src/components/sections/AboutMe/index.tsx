import React from 'react';
import SubHeader from '../../atoms/subHeader';
import styles from './index.module.css';
import { workExperience } from './constants';

const techList = [
    'HTML & CSS & SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Redux, Redux toolkit',
    'Zustand',
    'CSS module, styled-components',
    'Jest, React Testing Library',
    'Headless CMS (Contentful, Contentstack)',
    'Formik',
    'Storybook',
    'Material ui',
    'JSDoc',
    'Git',
    'Github, GutLab, Bitbucket',
    'Google Tag Manage',
    'New Relic',
    'Webpack',
    'Jira, Confluence',
    'Web3',
];

const AboutMeSection = () => {
    return (
        <div className={styles.aboutMeSection}>
            <SubHeader title="A FEW WORDS ABOUT ME" className={styles.subHeader} />
            <h2>
                Hello, I am Vitali Karpuk, a frontend developer. My passion is to create beautiful and functional web
                applications that provide enjoyable and meaningful experiences to users. I specialize in building
                responsive websites and user-friendly interfaces.
            </h2>
            <p>
                Over the past 3 years I have been working with big company and rising startups around the world as a
                frontend developer, working solo and leading small dev teams. In my spare time I enjoy football.
            </p>
            <span className={styles.line} />
            <SubHeader title="EXPERIENCE" className={styles.subHeader} />
            <h2>Over 3 years of experience</h2>
            <p>
                I have worked with the following technologies:
                <ul className={styles.techList}>
                    {techList.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </p>
            <div className={styles.workExperience}>
                {workExperience.map(({ company, period, title, responsibility, id }) => {
                    return (
                        <div key={id}>
                            <h2 className={styles.companyName}>{company}</h2>
                            <div className={styles.period}>{period}</div>
                            <div className={styles.jobTitle}>{title}</div>
                            <ul>
                                {responsibility.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutMeSection;
