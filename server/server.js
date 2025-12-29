import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));
app.use(helmet());
app.use(express.json());

const menuData = {
    categories: [
        {
            id: 'starters',
            title: 'Starters & Appetizers',
            items: [
                { name: 'Breads ($12)', description: 'Garlic mozzarella & sweet chilli ciabatta OR Garlic mozzarella & rosemary ciabatta.', imageName: 'Grilled Cheese' },
                { name: 'Jalapeño Bites ($12)', description: 'Cream cheese stuffed bites with sweet chilli sauce.', imageName: 'Cheese' },
                { name: 'Dumplings ($12)', description: 'Choice of "Pork & Prawn" or "Vegan," served with soy dip.', imageName: 'Bacon' },
                { name: 'Wedges ($15)', description: 'Seasoned wedges with sweet chilli and sour cream.', imageName: 'Tater Tots' },
                { name: 'Spring Rolls ($15)', description: 'Home-made pork & prawn rolls with sweet chilli sauce.', imageName: 'Corn Dog' },
                { name: 'Crispy Chicken Tenders ($15)', description: 'Served with honey soy crispy coating and salad.', imageName: 'Chicken Sandwich' },
                { name: 'Chicken Bao Buns ($15)', description: 'Steamed buns with crispy fried chicken and harrisa slaw.', imageName: 'Chicken Sandwich' },
                { name: 'Pork Belly ($22)', description: 'Sticky pork belly glazed with hoisin garlic chilli sauce.', imageName: 'Steak Sandwich' },
                { name: 'Scallops ($22)', description: 'Pan-seared scallops served with salad and pickled cabbage.', imageName: 'Chef Salad' },
                { name: 'Crispy Prawn Cutlets ($22)', description: 'Served with sweet chilli sauce and green salad.', imageName: 'Chef Salad' }
            ]
        },
        {
            id: 'mains',
            title: 'Mains',
            items: [
                { name: 'Creamy Seafood Chowder ($26)', description: 'Different seafoods cooked in cream, served with house bread.', imageName: 'Chef Salad' },
                { name: 'Bangers & Mash ($26)', description: 'Three pork sausages with mash, peas, and onion gravy.', imageName: 'Chicken Fried Steak' },
                { name: 'Creamy Fettuccine ($28)', description: 'Loaded with chicken and bacon in creamy pesto, sprinkled with parmesan.', imageName: 'Grilled Chicken Sandwich' },
                { name: 'Creamy Chicken Breast ($29)', description: 'Simmered in creamy sauce, served with gourmet potatoes, salad, and parmesan.', imageName: 'Grilled Chicken Sandwich' },
                { name: 'Steak & Blue Cheese Pie ($29)', description: 'Filled with tender steak, served with mash, peas, onion gravy, and molten blue cheese.', imageName: 'Steak Sandwich' },
                { name: 'Fish & Chips ($30)', description: 'Beer battered fish served with fries, green salad, tartare sauce, and lemon.', imageName: 'Fresh-cut Fries' },
                { name: 'Curry of the Day ($30)', description: 'Served with soft & fluffy naan bread and steamed rice.', imageName: 'Hamburger Steak' },
                { name: 'BBQ Pork Ribs ($34)', description: 'Marinated ribs in special sauce, served with coleslaw and choice of fries or mash.', imageName: 'Steak Sandwich' },
                { name: 'Sticky Pork Belly ($35)', description: 'Hoisin garlic glaze, served with vegetables.', imageName: 'Steak Sandwich' },
                { name: 'Lamb Shank (GF) ($36)', description: 'Twice cooked, served with savoury mash and rich lamb jus.', imageName: 'Hamburger Steak' },
                { name: 'Pan Seared Fresh Fish (GF) ($38)', description: 'Pan baked salmon served with vegetables and topped with hollandaise sauce.', imageName: 'Chef Salad' },
                { name: 'Prime Scotch Fillet ($41)', description: 'Served with classic jus and choice of onion rings/potato & herb rosti/seasonal veg OR onion rings/green salad/steak fries.', imageName: 'Steak Sandwich' },
                { name: 'Scotch Mignon (GF) ($43)', description: 'Cooked to choice, served with bacon, gourmet potatoes, mushrooms, and rich beef jus.', imageName: 'Steak Sandwich' }
            ]
        },
        {
            id: 'pizzeria',
            title: 'Burgers & Pizzeria',
            items: [
                { name: 'Pizzeria Selection ($25)', description: 'Chicken & Bacon, Meatlovers, Italiano, Margherita (VE), Mushroom & Onion (VE).', imageName: 'Big Burger' },
                { name: 'Southern Fried Chicken Burger ($26)', description: 'Double layer of chicken breast with aioli, harissa sauce, coleslaw, cheese, salad, tomato, and onion rings. Served with fries.', imageName: 'Bacon Cheeseburger' },
                { name: 'Juicy Beef Burger ($26)', description: 'Beef patty with pickle, mustard sauce, aioli, tomato, and onion rings. Served with fries.', imageName: 'Big Burger' },
                { name: 'Veggie Delight Burger (VE) ($25)', description: 'Potato & herb rosti with cheese, tomatoes, lettuce, harissa, and aioli. Served with fries.', imageName: 'Hamburger' }
            ]
        },
        {
            id: 'desserts',
            title: 'Desserts',
            items: [
                { name: 'Italian Panna Cotta ($15)', description: 'Thickened sweet cream with vanilla and crispy wafers.', imageName: 'Grilled Cheese' },
                { name: 'Apple Crumble Pie ($16)', description: 'New York style, loaded with warm cinnamon apple, served with ice cream.', imageName: 'Grilled Cheese' },
                { name: 'Chocolate Whisky Cake ($16)', description: 'Hot chocolate brownie with a touch of whisky, served with ice cream.', imageName: 'Grilled Cheese' },
                { name: 'Sticky Date Pudding ($16)', description: 'British sponge cake with chopped dates, toffee sauce, and ice cream.', imageName: 'Grilled Cheese' },
                { name: 'Ice Cream Sundae ($12)', description: '3 scoops (Chocolate, Berry, or Cookie Cream) topped with marshmallow and wafers.', imageName: 'Grilled Cheese' },
                { name: 'Liqueur Affogato ($16)', description: 'Choice of Baileys or Frangelico with a coffee shot and ice cream.', imageName: 'Grilled Cheese' }
            ]
        },
        {
            id: 'kids',
            title: 'Kids Menu ($18)',
            items: [
                { name: 'Chicken Pasta', description: 'Chicken Pasta in creamy sauce (includes small juice or fizzy drink).', imageName: 'Grilled Chicken Sandwich' },
                { name: 'Fish & Chips', description: 'Kid sized portion.', imageName: 'Fresh-cut Fries' },
                { name: 'Chicken Nuggets', description: 'With fries and small drink.', imageName: 'Chicken Sandwich' },
                { name: 'Mini Beef Burger', description: 'Served with fries and small drink.', imageName: 'Hamburger' }
            ]
        },
        {
            id: 'sides',
            title: 'Sides ($8)',
            items: [
                { name: 'Fries ($8)', imageName: 'Fresh-cut Fries' },
                { name: 'Onion Rings ($8)', imageName: 'Hand-battered Onion Rings' },
                { name: 'Garden Salad ($8)', imageName: 'Chef Salad' },
                { name: 'Potato Mash & Gravy ($8)', imageName: 'Tater Tots' },
                { name: 'Seasonal Vegetables ($8)', imageName: 'Tater Tots' }
            ]
        }
    ],
    dessert: {
        note: 'Free Ice Cream scoop with every meal/combo!'
    }
};

app.get('/api/menu', (req, res) => {
    res.json(menuData);
});

app.post('/api/contact', (req, res) => {
    console.log('Contact form submitted:', req.body);
    res.json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
