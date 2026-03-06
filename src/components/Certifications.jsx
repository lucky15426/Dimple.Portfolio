import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
    const certs = [
        { title: 'Canva for Work', issuer: 'Canva Design School • July 2025' },
        { title: 'Canva Essentials', issuer: 'Canva Design School • July 2025' }
    ];

    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div className="cert-grid" style={gridStyle}>
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            style={cardStyle}
                        >
                            <div style={iconStyle}><Award size={24} /></div>
                            <div className="cert-body">
                                <h4 style={titleStyle}>{cert.title}</h4>
                                <p style={issuerStyle}>{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '900px', margin: '0 auto' };
const cardStyle = {
    background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f0e4ea',
    display: 'flex', alignItems: 'center', gap: '16px'
};
const iconStyle = {
    width: '50px', height: '50px', borderRadius: '12px', background: '#fdf5f8',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c48b9f'
};
const titleStyle = { fontSize: '1rem', fontWeight: 600, marginBottom: '2px' };
const issuerStyle = { fontSize: '0.85rem', color: '#7a6b72' };

export default Certifications;
