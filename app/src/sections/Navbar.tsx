import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  scrollY: number;
}

export function Navbar({ scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 100;

  const navLinks = [
    { href: '#about', label: 'What is it?' },
    { href: '#products', label: 'Products' },
    { href: '#calculator', label: 'Earnings' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/images/logo.png"
              alt="Kangorise"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className={`font-bold text-xl hidden sm:block transition-colors duration-300 ${
                isScrolled ? 'text-brand-blue' : 'text-brand-blue'
              }`}
            >
              Kangorise
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium text-sm transition-all duration-300 hover:text-brand-blue relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:info@kangorise.com">
              <Button
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-brand-blue/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-brand-blue" />
            ) : (
              <Menu className="w-6 h-6 text-brand-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            <a href="mailto:info@kangorise.com" className="block pt-2">
              <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
