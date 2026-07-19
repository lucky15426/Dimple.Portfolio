import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, MapPin, Image, CalendarHeart, FileText, Music, Shirt } from 'lucide-react';
import img1 from '../assets/1st-image.png';
import img2 from '../assets/2nd-image.png';
import img3 from '../assets/3rd-image.png';

const projects = [
    { id: 1, image: img1, deployedLink: 'https://artisanroutestudio2026.my.canva.site/17th-july-burgundy-and-ivory' },
    { id: 2, image: img2, deployedLink: 'https://artisanroutestudio2026.my.canva.site/rose-pink-13th-july' },
    { id: 3, image: img3, deployedLink: 'https://artisanroutestudio2026.my.canva.site/pastel-green-15th-july' },
];

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                {/* Heading */}
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>

                {/* Project info block */}
                <motion.div
                    className="project-info-block"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="project-info-accent-bar" />
                    <div className="project-info-inner">
                        <div className="project-info-left">
                            <div className="project-info-header">
                                <span className="project-info-title">✦ Interactive Wedding Invitation Websites</span>
                                <span className="project-info-badge">Freelance</span>
                            </div>
                            <p className="project-info-studio">Artisans Route Studio</p>
                            <p className="project-info-desc">
                                Crafted bespoke digital wedding invitations that go beyond paper — blending elegance with interactivity. Each website was tailored to the couple's story, bringing their special day to life online.
                            </p>
                            <div className="project-info-features">
                                <span className="project-feature-chip"><CalendarHeart size={13} /> RSVP Forms</span>
                                <span className="project-feature-chip"><MapPin size={13} /> Venue Maps</span>
                                <span className="project-feature-chip"><Image size={13} /> Photo Gallery</span>
                                <span className="project-feature-chip"><Shirt size={13} /> Dress Code</span>
                                <span className="project-feature-chip"><Music size={13} /> Multimedia</span>
                                <span className="project-feature-chip"><FileText size={13} /> Event Details</span>
                            </div>
                        </div>
                        <div className="project-info-quote">
                            <span className="project-quote-mark">&ldquo;</span>
                            <p className="project-quote-text">"Designing moments that become lifelong memories."</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            onClick={() => setSelected(project)}
                        >
                            <div className="project-image-wrap">
                                <img src={project.image} alt={`Project ${project.id}`} className="project-img" />
                                <div className="project-overlay">
                                    <span className="project-view-btn">View</span>
                                </div>
                            </div>
                            <div className="project-link-row">
                                <a
                                    href={project.deployedLink}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={14} />
                                    Live Link
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="project-modal-close" onClick={() => setSelected(null)}>
                                <X size={20} />
                            </button>
                            <div className="project-modal-image">
                                <img src={selected.image} alt={`Project ${selected.id}`} />
                            </div>
                            <div className="project-modal-body">
                                <a
                                    href={selected.deployedLink}
                                    className="project-modal-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={16} />
                                    Visit Live Project
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
