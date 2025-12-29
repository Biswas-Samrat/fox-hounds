import { motion } from 'framer-motion';

export default function IceCream() {
    return (
        <section className="bg-primary text-white py-24 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block bg-accent text-primary px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg">
                        Sweet Treat
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
                        Free Ice Cream <br /> With Every Meal!
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light mb-10">
                        It's our way of saying thanks. Complete your delicious burger experience with a scoop of our classic vanilla ice cream, on the house.
                    </p>

                    {/* Ice Cream Icon Implementation (CSS Shapes or SVG) */}
                    <div className="w-24 h-24 mx-auto bg-secondary rounded-full relative shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center">
                        <span className="text-5xl">🍦</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
