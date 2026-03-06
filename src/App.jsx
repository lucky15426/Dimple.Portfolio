import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced to 2.5s for a better balance between UX and "wow" factor
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            <AnimatePresence mode="wait">
                {loading ? (
                    <LoadingScreen key="loader" />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Navbar />
                        <Hero />
                        <About />
                        <Education />
                        <Experience />
                        <Portfolio />
                        <Skills />
                        <Certifications />
                        <Contact />
                        <Footer />
                        <BackToTop />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
