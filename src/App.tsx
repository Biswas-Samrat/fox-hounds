import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import IceCream from './components/IceCream';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-secondary selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <IceCream />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App
