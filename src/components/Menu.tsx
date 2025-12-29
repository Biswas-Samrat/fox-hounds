import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils } from 'lucide-react';

// Import all images from src/assets
import BaconCheeseburger from '../assets/Bacon Cheeseburger.png';
import BigBaconCheeseburger from '../assets/Big Bacon Cheeseburger.png';
import BigBurger from '../assets/Big Burger.png';
import BLT from '../assets/BLT.png';
import Bacon from '../assets/Bacon.png';
import Cheese from '../assets/Cheese.png';
import ChefSalad from '../assets/Chef Salad.png';
import ChickenFriedSteak from '../assets/Chicken Fried Steak.png';
import ChickenSandwich from '../assets/Chicken Sandwich.png';
import ChiliCheeseFries from '../assets/Chili Cheese Fries.png';
import Chili from '../assets/Chili.png';
import CornDog from '../assets/Corn Dog.png';
import CrispyChickenSalad from '../assets/Crispy Chicken Salad.png';
import FreshcutFries from '../assets/Fresh-cut Fries.png';
import GrilledCheese from '../assets/Grilled Cheese.png';
import GrilledChickenSandwich from '../assets/Grilled Chicken Sandwich.png';
import HamburgerSteak from '../assets/Hamburger Steak.png';
import Hamburger from '../assets/Hamburger.png';
import HandbatteredOnionRings from '../assets/Hand-battered Onion Rings.png';
import Jalapenos from '../assets/Jalapeños.png';
import KidsBurger from '../assets/Kid\'s Burger.png';
import MozzarellaCheesesticks from '../assets/Mozzarella Cheese Sticks.png';
import Mushrooms from '../assets/Mushrooms.png';
import NotSoBigBurger from '../assets/Not-So-Big Burger.png';
import PattyMelt from '../assets/Patty Melt.png';
import SteakFingerBasketLarge from '../assets/Steak Finger Basket (Large).png';
import SteakFingerBasket from '../assets/Steak Finger Basket.png';
import SteakSandwich from '../assets/Steak Sandwich.png';
import TaterTots from '../assets/Tater Tots.png';

const imageMap: { [key: string]: string } = {
    'Bacon Cheeseburger': BaconCheeseburger,
    'Big Bacon Cheeseburger': BigBaconCheeseburger,
    'Big Burger': BigBurger,
    'BLT': BLT,
    'Bacon': Bacon,
    'Cheese': Cheese,
    'Chef Salad': ChefSalad,
    'Chicken Fried Steak': ChickenFriedSteak,
    'Chicken Sandwich': ChickenSandwich,
    'Chili Cheese Fries': ChiliCheeseFries,
    'Chili': Chili,
    'Corn Dog': CornDog,
    'Crispy Chicken Salad': CrispyChickenSalad,
    'Fresh-cut Fries': FreshcutFries,
    'Grilled Cheese': GrilledCheese,
    'Grilled Chicken Sandwich': GrilledChickenSandwich,
    'Hamburger Steak': HamburgerSteak,
    'Hamburger': Hamburger,
    'Hand-battered Onion Rings': HandbatteredOnionRings,
    'Jalapeños': Jalapenos,
    'Kid\'s Burger': KidsBurger,
    'Mozzarella Cheese Sticks': MozzarellaCheesesticks,
    'Mushrooms': Mushrooms,
    'Not-So-Big Burger': NotSoBigBurger,
    'Patty Melt': PattyMelt,
    'Steak Finger Basket (Large)': SteakFingerBasketLarge,
    'Steak Finger Basket': SteakFingerBasket,
    'Steak Sandwich': SteakSandwich,
    'Tater Tots': TaterTots,
};

function getImageUrl(name: string): string | undefined {
    return imageMap[name];
}

interface MenuItem {
    name: string;
    description?: string;
    highlight?: string;
    imageName?: string;
}

interface MenuCategory {
    id: string;
    title: string;
    note?: string;
    items: MenuItem[];
}

export default function Menu() {
    const [categories, setCategories] = useState<MenuCategory[]>([]);
    const [activeTab, setActiveTab] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        fetch(`${apiUrl}/api/menu`)
            .then(res => res.json())
            .then(data => {
                if (data.categories) {
                    setCategories(data.categories);
                    setActiveTab(data.categories[0].id);
                }
            })
            .catch(err => console.error("Failed to fetch menu:", err))
            .finally(() => setLoading(false));
    }, []);

    const activeCategory = categories.find(c => c.id === activeTab);

    return (
        <section id="menu" className="py-20 bg-secondary relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#800020_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Our Menu</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Made to order with love. Don't forget, every meal comes with <span className="text-primary font-bold">Free Ice Cream!</span></p>
                </div>

                {loading ? (
                    <div className="flex justify-center p-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <>
                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all transform hover:scale-105 ${activeTab === cat.id
                                        ? 'bg-primary text-white shadow-lg ring-2 ring-offset-2 ring-primary'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="min-h-[400px]">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {activeCategory?.note && (
                                        <div className="text-center mb-8 bg-accent/20 text-primary py-2 px-4 rounded-lg inline-block mx-auto w-full md:w-auto font-medium">
                                            💡 Note: {activeCategory.note}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {activeCategory?.items.map((item, idx) => {
                                            const imageUrl = item.imageName ? getImageUrl(item.imageName) : null;
                                            return (
                                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                                                    {item.highlight && (
                                                        <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm z-10">
                                                            <Sparkles size={12} /> {item.highlight}
                                                        </div>
                                                    )}

                                                    <div className="flex items-start gap-4">
                                                        {/* Image */}
                                                        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group-hover:scale-105 transition-transform duration-300">
                                                            {imageUrl ? (
                                                                <img
                                                                    src={imageUrl}
                                                                    alt={item.name}
                                                                    className="w-full h-full object-cover"
                                                                    loading="lazy"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                                    <Utensils size={24} />
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-display font-bold text-xl text-gray-800 mb-2 group-hover:text-primary transition-colors truncate">{item.name}</h3>
                                                            {item.description && (
                                                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
