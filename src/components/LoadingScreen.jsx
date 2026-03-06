import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from './Aurora';

const LoadingScreen = () => {
    const [textIndex, setTextIndex] = useState(0);
    const loadingTexts = [
        "Designing your experience...",
        "Editing the perfect view...",
        "Capturing creative moments...",
        "Bringing stories to life...",
        "Ready to showcase..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={containerStyle}
        >
            {/* Aurora Background */}
            <div style={auroraWrapperStyle}>
                <Aurora
                    colorStops={["#f5d0e0", "#d4759a", "#e8a0c0"]}
                    blend={0.5}
                    amplitude={1.5}
                    speed={1.5}
                />
            </div>

            <div style={contentStyle}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={logoWrapperStyle}
                >
                    <h1 style={logoTextStyle}>
                        Dimple<span>'s</span>
                    </h1>
                    <p style={subLogoTextStyle}>Portfolio</p>
                    <div style={underlineStyle} />
                </motion.div>

                <div style={loaderWrapperStyle}>
                    <div style={progressContainerStyle}>
                        <motion.div
                            style={progressBarStyle}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div style={textWrapperStyle}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={textIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                style={textStyle}
                            >
                                {loadingTexts[textIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(160deg, #fdf5f8 0%, #fefbfc 50%, #f8eef3 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    overflow: 'hidden'
};

const auroraWrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.9
};

const contentStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(12px)',
    borderRadius: '24px',
    padding: '60px 50px',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 8px 32px rgba(196, 139, 159, 0.1)'
};

const logoWrapperStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const logoTextStyle = {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: '700',
    color: '#ba2c84ff',
    letterSpacing: '-1.5px',
    lineHeight: '1',
    margin: 0
};

const subLogoTextStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#c48b9f',
    letterSpacing: '8px',
    textTransform: 'uppercase',
    marginTop: '4px',
    marginLeft: '8px'
};

const underlineStyle = {
    width: '40px',
    height: '3px',
    background: '#c48b9f',
    borderRadius: '2px',
    marginTop: '24px'
};

const loaderWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
};

const textWrapperStyle = {
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const textStyle = {
    fontSize: '0.9rem',
    color: '#da317dff',
    fontWeight: '500',
    letterSpacing: '1px'
};

const progressContainerStyle = {
    width: '180px',
    height: '2px',
    background: '#f0e4ea',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '8px'
};

const progressBarStyle = {
    height: '100%',
    background: '#e4457dff',
    width: '0%'
};

export default LoadingScreen;
