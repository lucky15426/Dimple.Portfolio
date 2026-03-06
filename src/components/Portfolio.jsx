import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Megaphone, Film, Play, X, PlayCircle } from 'lucide-react';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Video Editing Showreel',
            category: 'video',
            desc: 'A compilation of my best video edits and transitions using Premiere Pro and After Effects.',
            icon: <Play size={24} />,
            gradient: 'linear-gradient(135deg, #3a2d35, #c48b9f)',
            videoUrl: '' // Add video path here, e.g., '/videos/showreel.mp4'
        },
        {
            id: 2,
            title: 'Brand Identity Design',
            category: 'design',
            desc: 'Complete visual identity systems including logos, color palettes, and typography.',
            icon: <Palette size={24} />,
            gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)'
        },
        {
            id: 3,
            title: 'Social Media Reels',
            category: 'video',
            desc: 'Dynamic, high-retention reels optimized for Instagram and TikTok growth.',
            icon: <Film size={24} />,
            gradient: 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
            videoUrl: ''
        },
        {
            id: 4,
            title: 'Campaign Creatives',
            category: 'design',
            desc: 'Strategic design assets for marketing campaigns and digital advertisements.',
            icon: <Megaphone size={24} />,
            gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)'
        },
        {
            id: 5,
            title: 'Kinetic Typography',
            category: 'video',
            desc: 'Animated text videos that bridge the gap between design and motion.',
            icon: <PlayCircle size={24} />,
            gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
            videoUrl: ''
        },
        {
            id: 6,
            title: 'Editorial Layouts',
            category: 'design',
            desc: 'Clean and professional layouts for digital magazines and brand books.',
            icon: <Palette size={24} />,
            gradient: 'linear-gradient(135deg, #efebe9, #d7ccc8)'
        }
    ];

    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    My Creative Work
                </motion.h2>
                <p className="section-subtitle">A showcase of my video editing and graphic design projects</p>

                <div className="portfolio-grid" style={gridStyle}>
                    {projects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            className="portfolio-item"
                            onMouseEnter={() => setHoveredId(proj.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(proj)}
                            style={itemStyle}
                        >
                            <div className="portfolio-thumb" style={{ ...thumbStyle, background: proj.gradient }}>
                                {proj.videoUrl && hoveredId === proj.id ? (
                                    <video
                                        src={proj.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        style={videoStyle}
                                    />
                                ) : (
                                    <div style={placeholderIconStyle}>{proj.icon}</div>
                                )}
                            </div>
                            <div className="portfolio-overlay" style={overlayStyle}>
                                <h4>{proj.title}</h4>
                                <p>{proj.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Logic */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="modal active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={modalOverlayStyle}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                style={modalContentStyle}
                            >
                                <button className="modal-close" onClick={() => setSelectedProject(null)} style={closeBtnStyle}>
                                    <X size={24} />
                                </button>
                                <div className="modal-img" style={{ ...modalImgStyle, background: selectedProject.gradient }}>
                                    {selectedProject.videoUrl ? (
                                        <video
                                            src={selectedProject.videoUrl}
                                            controls
                                            autoPlay
                                            style={{ ...videoStyle, borderRadius: '10px' }}
                                        />
                                    ) : (
                                        selectedProject.icon
                                    )}
                                </div>
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.desc}</p>
                                <p style={{ fontSize: '0.85rem', marginTop: '16px', color: '#a89da2' }}>
                                    Category: <span style={{ textTransform: 'capitalize', color: '#c48b9f', fontWeight: 'bold' }}>{selectedProject.category}</span>
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '60px' };
const itemStyle = {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    aspectRatio: '4/5',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
};
const thumbStyle = { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.5s ease' };
const videoStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const placeholderIconStyle = { color: 'rgba(255,255,255,0.8)', fontSize: '3.5rem' };
const overlayStyle = {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, rgba(60, 35, 45, 0) 40%, rgba(60, 35, 45, 0.95) 100%)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px',
    transition: '0.4s ease'
};

const modalOverlayStyle = {
    position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(30, 20, 25, 0.8)', backdropFilter: 'blur(12px)'
};
const modalContentStyle = {
    background: '#fff', borderRadius: '24px', padding: '40px', maxWidth: '600px', width: '90%', position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
};
const closeBtnStyle = { position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer', color: '#7a6b72', transition: '0.3s' };
const modalImgStyle = { width: '100%', height: '320px', borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', overflow: 'hidden' };

export default Portfolio;
