import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    { text: "Best onion rings West of I-35!", author: "Local Guide" },
    { text: "Service with a smile. The food came out hot and fresh.", author: "Mary J." },
    { text: "Those steak fingers are absolutely legendary. Can't beat the price either.", author: "Tom R." },
    { text: "Love the free ice cream! Kids enjoyed it so much.", author: "Sarah L." }
];

export default function Reviews() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote size={48} className="mx-auto text-accent mb-8 opacity-50" />

                    <div className="h-48 flex items-center justify-center">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl font-display font-medium text-gray-800 leading-normal mb-6">
                                    "{reviews[index].text}"
                                </p>
                                <p className="text-primary font-bold tracking-wide uppercase text-sm">
                                    — {reviews[index].author}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === index ? 'bg-primary w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
