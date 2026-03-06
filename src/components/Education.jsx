import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';

const Education = () => {
    const achievements = [
        { val: '2x Year', label: 'Teacher’s Donation Scholarship (Academic Merit)' },
        { val: '88.2%', label: 'Class 12 Marks' },
        { val: '97.4%tile', label: 'Best 3 CUET Subjects' }
    ];

    return (
        <section className="section education" id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>
                <p className="section-subtitle">Academic Journey & Achievements</p>

                <motion.div
                    className="education-grid"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={gridStyle}
                >
                    <div className="edu-card" style={cardStyle}>
                        <div className="edu-header" style={headerStyle}>
                            <div style={iconBoxStyle}><School size={30} /></div>
                            <div className="edu-info">
                                <h3 style={degreeStyle}>Bachelor's of Elementary Education</h3>
                                <p style={schoolStyle}>Miranda House, University of Delhi | 2023 – 2027</p>
                            </div>
                        </div>
                        <div className="edu-achievements" style={achievementsGridStyle}>
                            {achievements.map((item, index) => (
                                <div key={index} className="achievement-item" style={achievementStyle}>
                                    <span className="achievement-val" style={valStyle}>{item.val}</span>
                                    <p style={labelStyle}>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const gridStyle = { maxWidth: '800px', margin: '0 auto' };
const cardStyle = { background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #f0e4ea' };
const headerStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' };
const iconBoxStyle = {
    width: '60px', height: '60px', background: 'linear-gradient(135deg, #fdf5f8, #e8c4d4)',
    borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c48b9f'
};
const degreeStyle = { fontSize: '1.2rem', fontWeight: 600, marginBottom: '4px' };
const schoolStyle = { fontSize: '0.9rem', color: '#7a6b72' };
const achievementsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' };
const achievementStyle = { textAlign: 'center', padding: '16px', background: '#fdf5f8', borderRadius: '10px' };
const valStyle = { display: 'block', fontSize: '1.2rem', fontWeight: 700, color: '#c48b9f', marginBottom: '4px' };
const labelStyle = { fontSize: '0.72rem', color: '#7a6b72', lineHeight: 1.3 };

export default Education;
