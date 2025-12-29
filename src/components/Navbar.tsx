import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Location', href: '#location' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-2 group">
                            <div className="bg-white p-1 rounded-full shadow-md group-hover:scale-105 transition-transform">
                                <img src="/assets/logo.png" alt="Rick & Carolyn's" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-display font-bold text-xl sm:text-2xl leading-none ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>Fox & Hounds</span>
                                <span className={`text-xs font-sans font-medium tracking-wider ${scrolled ? 'text-accent' : 'text-accent drop-shadow-md'}`}>ENGLISH PUB & RESTAURANT</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-accent ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-3">
                            <a href="https://www.restauranthub.co.nz/rh2/eats/in-region/waikato-region/in-city/taupo-district/in-suburb/taupo-central/fox-hounds-taupo/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full">Find a table</a>
                            <a href="https://www.ubereats.com/nz/store/fox-%26-hounds/1CNFs54PXuquvBxxgQHvxA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-yellow-400 text-primary font-bold py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">Order Now</a>
                        </div>
                    </div> 

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary shadow-xl border-t border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10 mt-4 flex flex-col space-y-4">
                                <div className="flex items-center text-white/80 text-sm">
                                    <MapPin size={16} className="mr-2 text-accent" />
                                    92 Roberts Street, Taupō 3330
                                </div>
                                <div className="flex items-center text-white/80 text-sm">
                                    <Phone size={16} className="mr-2 text-accent" />
                                    <a href="tel:+6473768030">+64 7 376 8030</a>
                                </div>
                                <a href="https://www.restauranthub.co.nz/rh2/eats/in-region/waikato-region/in-city/taupo-district/in-suburb/taupo-central/fox-hounds-taupo/" target="_blank" rel="noopener noreferrer" className="w-full bg-white/10 text-white font-bold py-3 rounded-md shadow-md text-center">Find a table</a>
                                <a href="https://www.ubereats.com/nz/store/fox-%26-hounds/1CNFs54PXuquvBxxgQHvxA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer" className="w-full bg-accent text-primary font-bold py-3 rounded-md shadow-md text-center">Order Now</a>
                            </div> 
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
