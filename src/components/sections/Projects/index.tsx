import React from 'react';
import SubHeader from '../../atoms/subHeader';
import Arbys from './img/arbys.png';
import Bww from './img/bww.png';
import Mina from './img/mina.png';
import Sui from './img/Sui.png';
import Acuvue from './img/acuvue.png';
import { ReactComponent as ExternalIcon } from './img/externalLink.svg';

import styles from './index.module.css';
import { Link } from 'react-router-dom';

interface IProject {
    name: string;
    header: string;
    description: string;
    technologies: string[];
    img: string;
    link: string;
}

const projectList: IProject[] = [
    {
        name: 'Arbys',
        header: "Arby's | We Have The Meats®",
        description:
            'Web app for leading global fast-food restaurant chain with more than 2,800 restaurants worldwide.',
        technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Redux Toolkit',
            'CSS module',
            'Formik',
            'Node',
            'Storybook',
            'Contentful',
            'React Testing Library',
        ],
        img: Arbys,
        link: 'https://www.arbys.com/',
    },
    {
        name: 'Bww',
        header: 'Buffalo Wild Wings | Wings. Beer. Sports',
        description: 'Web app for Buffalo Wild Wings.',
        technologies: [
            'HTML & CSS',
            'React',
            'Next.js',
            'TypeScript',
            'Redux Toolkit',
            'CSS module',
            'Formik',
            'Node',
            'Storybook',
            'Contentful',
            'React Testing Library',
        ],
        img: Bww,
        link: 'https://www.buffalowildwings.com/',
    },
    {
        name: 'Minascan',
        header: 'Minascan Block Explorer',
        description:
            'Web app for Block Explorer and Analytics Platform for Mina, a lightweight succinct blockchain that uses ZK-proofs.',
        technologies: ['HTML & SASS', 'React', 'Redux', 'SCSS module', 'NPM packages'],
        img: Mina,
        link: 'https://minascan.io/',
    },
    {
        name: 'Suiscan',
        header: 'Blockchain explorer',
        description: 'Web app for Block Explorer and Analytics Platform for Sui.',
        technologies: ['HTML & SASS', 'React', 'Redux', 'SCSS module', 'NPM packages'],
        img: Sui,
        link: 'https://suiscan.xyz/',
    },
    {
        name: 'ACUVUE',
        header: 'ACUVUE',
        description: 'Web app for Block Explorer and Analytics Platform for Sui.',
        technologies: [
            'HTML & CSS',
            'React',
            'Next.js',
            'TypeScript',
            'Redux Toolkit',
            'Styled-components',
            'Formik',
            'Node',
            'Storybook',
            'Contentful',
            'React Testing Library',
            'Jest',
        ],
        img: Acuvue,
        link: 'https://www.acuvue.com/en-us/',
    },
];

const renderTechnologies = (technologies: string[]): JSX.Element[] => {
    return technologies.map((technologie) => {
        return (
            <span key={technologie} className={styles.technologie}>
                {technologie}
            </span>
        );
    });
};
const Projects = () => {
    return (
        <div className={styles.wrapper}>
            {projectList.map(({ name, header, description, technologies, img, link }) => {
                return (
                    <div key={name} className={styles.projectWrapper}>
                        <img src={img} alt={name} className={styles.img} />
                        <div>
                            <Link to={link} target="_blank">
                                <SubHeader title={header} />
                                <ExternalIcon />
                            </Link>
                            <p>{description}</p>
                            <div className={styles.technologies}>{renderTechnologies(technologies)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
