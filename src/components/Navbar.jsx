import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a href="#" className="nav-logo">Dimple<span>.</span></a>

            <button
                className={`nav-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                <li><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>

            {/* Mobile overlay to close menu */}
            {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
        </nav>
    );
};

export default Navbar;
