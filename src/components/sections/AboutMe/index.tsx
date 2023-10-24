import React from 'react';
import SubHeader from '../../atoms/subHeader';
import styles from './index.module.css';

const techList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'Git',
    'Contentful',
    'Contentstack',
    'Jest',
    'React Testing Library',
    'JSDoc',
    'Storybook',
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
            <p>
                I have worked on various projects, including major companies and startups, such as:
                <ul className={styles.listProjects}>
                    <li>
                        <a href="https://www.arbys.com" target="_blank" rel="noopener noreferrer">
                            Arby`s{' '}
                        </a>
                        - collaboration with the renowned restaurant brand Arby`s.
                    </li>
                    <li>
                        <a href="https://www.buffalowildwings.com" target="_blank" rel="noopener noreferrer">
                            Buffalowildwings{' '}
                        </a>
                        - involvement in the development of the Buffalo Wild Wings website.
                    </li>
                    <li>
                        <a href="https://minascan.io/mainnet/home" target="_blank" rel="noopener noreferrer">
                            Minascan{' '}
                        </a>
                        - interface development for Mina Protocol.
                    </li>
                </ul>
                My experience includes developing functional user interfaces and creating responsive web applications.
            </p>
        </div>
    );
};

export default AboutMeSection;
