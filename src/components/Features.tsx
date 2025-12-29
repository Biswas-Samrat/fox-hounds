import { Star, Accessibility, Clock, Heart } from 'lucide-react';

const features = [
    { icon: Star, title: "4.2 Star Rated", desc: "545 reviews" },
    { icon: Clock, title: "Open until 10:00 PM", desc: "Dine-in, Kerbside pickup, Delivery via Uber Eats" },
    { icon: Accessibility, title: "LGBTQ+ Friendly", desc: "Wheelchair accessible" },
    { icon: Heart, title: "Family Friendly", desc: "Great for everyone" },
];

export default function Features() {
    return (
        <section className="bg-primary py-12 relative z-10 -mt-8 rounded-t-3xl shadow-xl mx-2 md:mx-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4 group">
                            <div className="p-3 bg-white/10 rounded-full group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                <feature.icon size={32} className="text-white group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg font-display">{feature.title}</h3>
                                <p className="text-white/60 text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
