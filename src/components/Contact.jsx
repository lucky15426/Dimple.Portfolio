import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formRef.current || isSending) return;

        setIsSending(true);

        // Explicitly map all possible placeholder variations for compatibility
        const templateParams = {
            name: formRef.current.name.value,
            from_name: formRef.current.name.value,
            email: formRef.current.email.value,
            reply_to: formRef.current.email.value,
            message: formRef.current.message.value,
            title: 'Portfolio Contact Form' // Fixes {{title}} in subject line
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setIsSent(true);
                e.target.reset();
                setTimeout(() => setIsSent(false), 3000);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                alert('Something went wrong, please try again later.');
            })
            .finally(() => setIsSending(false));
    };


    const contactItems = [
        {
            label: 'Email',
            val: 'dimple1682005@gmail.com',
            href: 'mailto:dimple1682005@gmail.com',
            icon: <Mail size={18} />
        },
        {
            label: 'Phone',
            val: '+91 9910880231',
            icon: <Phone size={18} />
        },
        {
            label: 'LinkedIn',
            val: 'https://www.linkedin.com/in/dimple9119/',
            href: 'https://www.linkedin.com/in/dimple9119/',
            icon: <Linkedin size={18} />
        }
    ];

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={infoStyle}
                    >
                        {contactItems.map((item, index) => (
                            <div key={index} className="contact-item" style={itemStyle}>
                                <div style={iconBoxStyle}>{item.icon}</div>
                                <div>
                                    <h4 style={labelStyle}>{item.label}</h4>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" style={valStyle}>{item.val}</a>
                                    ) : (
                                        <span style={valStyle}>{item.val}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        ref={formRef}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={formStyle}
                    >
                        <div className="form-group" style={groupStyle}>
                            <input name="name" type="text" placeholder="Your Name" required style={inputStyle} />
                        </div>
                        <div className="form-group" style={groupStyle}>
                            <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
                        </div>
                        <div className="form-group" style={groupStyle}>
                            <textarea name="message" rows="5" placeholder="Your Message" required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary btn-full ${isSent ? 'success' : ''}`}
                            disabled={isSending}
                            style={{ ...btnStyle, background: isSent ? '#4caf50' : '#c48b9f', opacity: isSending ? 0.8 : 1 }}
                        >
                            {isSent ? (
                                <>
                                    <Check size={18} /> Sent!
                                </>
                            ) : (
                                <>
                                    <Send size={18} /> {isSending ? 'Sending...' : 'Send Message'}
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px', alignItems: 'start' };
const infoStyle = { display: 'flex', flexDirection: 'column', gap: '24px' };
const itemStyle = { display: 'flex', alignItems: 'center', gap: '16px' };
const iconBoxStyle = {
    width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #fdf5f8, #e8c4d4)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c48b9f'
};
const labelStyle = { fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' };
const valStyle = { fontSize: '0.88rem', color: '#7a6b72' };

const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };
const groupStyle = { width: '100%' };
const inputStyle = {
    width: '100%', padding: '14px 20px', borderRadius: '10px', border: '1.5px solid #f0e4ea',
    background: '#fff', fontSize: '0.9rem', outline: 'none'
};
const btnStyle = { width: '100%', justifyContent: 'center', color: '#fff' };

export default Contact;
