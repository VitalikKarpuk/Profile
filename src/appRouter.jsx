import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import AboutMe from './pages/AboutMe/about';
import Contact from './pages/Contact/contact';
import Projects from './pages/Projects/projects';

import styles from './appRouter.module.css';

const AppRouter = () => {
    return (
        <div className={styles.mainContent}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
