
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-auto sm:min-h-screen flex flex-col justify-center w-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                <img
                    src="/assets/hero-burger.png"
                    alt="Juicy Burger"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-4 sm:pt-0 md:pt-20 lg:pt-28 pb-0 sm:pb-12 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:max-w-2xl"
                >
                    <div className="flex items-center justify-center md:justify-start mt-6 space-x-2 mb-4 mt-24 sm:mt-0">
                        <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <Star size={12} fill="currentColor" /> Est. 1982
                        </span>
                        <span className="text-white/80 text-sm font-medium tracking-wide">Family Owned & Operated</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight  drop-shadow-lg">
                        Experience the Best <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">English Pub Vibes</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed drop-shadow-md">
                        Fresh ingredients, homemade taste, and <span className="font-bold text-white bg-primary/80 px-1 rounded">free ice cream</span> with every meal!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-24 sm:mb-0">
                        <a href="https://www.ubereats.com/nz/store/fox-%26-hounds/1CNFs54PXuquvBxxgQHvxA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-400 text-primary font-bold rounded-full text-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transform hover:-translate-y-1 transition-all text-center">
                            <span className="sm:hidden">Order Now</span>
                            <span className="hidden sm:inline">View Our Menu</span>
                        </a>
                        <a href="https://www.restauranthub.co.nz/rh2/eats/in-region/waikato-region/in-city/taupo-district/in-suburb/taupo-central/fox-hounds-taupo/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full text-lg transition-all text-center">
                            <span className="sm:hidden">Find a Table</span>
                            <span className="hidden sm:inline">Get Directions</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 z-20 animate-bounce"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
