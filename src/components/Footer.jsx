import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={footerStyle}>
            <div className="container">
                <div className="footer-content" style={contentStyle}>
                    <div className="footer-brand">
                        <h3 style={brandStyle}>Dimple<span style={{ color: '#e8c4d4' }}>.</span></h3>
                        <p style={roleStyle}>Graphic Designer & Video Editor</p>
                    </div>
                    <div className="footer-socials" style={socialsGridStyle}>
                        <a href="https://www.instagram.com/dimple_1685?igsh=anoxams5djBheTls" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialLinkStyle}><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/in/dimple9119/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialLinkStyle}><Linkedin size={20} /></a>
                        <a href="mailto:dimple1682005@gmail.com" aria-label="Email" style={socialLinkStyle}><Mail size={20} /></a>
                    </div>
                </div>
                <div className="footer-bottom" style={bottomStyle}>
                    <p>&copy; 2026 Dimple. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const footerStyle = { background: '#3a2d35', padding: '48px 0 24px', color: 'rgba(255, 255, 255, 0.7)' };
const contentStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' };
const brandStyle = { fontSize: '1.4rem', fontWeight: 700, color: '#fff' };
const roleStyle = { fontSize: '0.85rem', marginTop: '4px' };
const socialsGridStyle = { display: 'flex', gap: '12px' };
const socialLinkStyle = {
    width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)'
};
const bottomStyle = { textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.82rem' };

export default Footer;
