import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Calculator } from './sections/Calculator';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { CookiePolicy } from './pages/CookiePolicy';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple routing based on URL path
  const path = window.location.pathname;

  if (path === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (path === '/terms-of-use') {
    return <TermsOfUse />;
  }

  if (path === '/cookie-policy') {
    return <CookiePolicy />;
  }

  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Products />
        <Calculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
