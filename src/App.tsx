import React, { useEffect } from 'react';
import './App.css';
// import AppRouter from './appRouter';
import Header from './components/sections/Header/header';
import Footer from './components/sections/Footer/footer';
import ProjectsPage from './pages/Projects/projects';
// import ChatWithChatGPT from './components/organisms/ChatWithChatGPT';

function App() {
    const handleWindowResize = () => {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div>
            <Header />

            <ProjectsPage />
            {/* <AppRouter /> */}
            <Footer />
            {/* <ChatWithChatGPT /> */}
        </div>
    );
}

export default App;
