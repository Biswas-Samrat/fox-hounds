import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-accent" id="location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 bg-white rounded-full p-1" />
                            <span className="font-display font-bold text-2xl text-white">Rick & Carolyn's</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Serving Taupō's best burgers and fries. Family owned, locally loved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                        <h3 className="text-accent font-bold text-lg mb-4 uppercase tracking-widest">Visit Us</h3>
                        <div className="flex items-start space-x-3 text-gray-300">
                            <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                            <span>92 Roberts Street,<br />Taupō 3330, New Zealand</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <Phone className="text-accent flex-shrink-0" size={18} />
                            <a href="tel:+6473768030" className="hover:underline">+64 7 376 8030</a>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <span className="text-accent font-bold">⭐ 4.2</span>
                            <span className="text-gray-400">with 545 reviews</span>
                        </div>
                        <div className="flex space-x-3 mt-4">
                            <a href="https://www.restauranthub.co.nz/rh2/eats/in-region/waikato-region/in-city/taupo-district/in-suburb/taupo-central/fox-hounds-taupo/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/10 border border-white/10 rounded-md hover:bg-accent hover:text-primary transition-colors">Find a table</a>
                            <a href="https://www.ubereats.com/nz/store/fox-%26-hounds/1CNFs54PXuquvBxxgQHvxA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-primary rounded-md hover:bg-yellow-400 transition-colors">Order Now</a>
                        </div>
                    </div> 

                    {/* Hours + Map Placeholder */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Clock className="text-accent" size={20} />
                            <h3 className="text-accent font-bold text-lg uppercase tracking-widest">Hours</h3>
                        </div>
                        <div className="space-y-2 text-gray-300 mb-4">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span>Daily</span>
                                <span>Open until 10:00 PM</span>
                            </div>
                        </div>

                        <div className="space-y-3 text-gray-300 mb-6">
                            <div><strong className="text-accent">Services:</strong> Dine-in, Kerbside pickup, Delivery via <a className="underline hover:text-primary" href="https://www.ubereats.com/nz/store/fox-%26-hounds/1CNFs54PXuquvBxxgQHvxA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer">Uber Eats</a></div>
                            <div><strong className="text-accent">Accessibility & Vibe:</strong> LGBTQ+ friendly and wheelchair accessible.</div>
                        </div>

                        {/* Map Integration */}
                        <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps?q=92+Roberts+Street+Taupo+3330+New+Zealand&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fox & Hounds Taupō Location"
                            ></iframe>
                        </div>
                    </div> 
                </div>

            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Rick & Carolyn's Burgers & Fries. All rights reserved.
            </div>
        </footer>
    );
}
