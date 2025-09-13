import React, { useState, useEffect } from 'react';
import { Home, Info, Users, User, Building, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#committees', label: 'Committees', icon: Users },
    { href: '#delegate-info', label: 'Delegate Info', icon: User },
    { href: '#venue', label: 'Venue', icon: Building },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div 
          className={`${
            isScrolled 
              ? 'bg-primary/50 backdrop-blur-xl border-b border-primary-foreground/10 shadow-lg' 
              : 'bg-transparent'
          } transition-all duration-300`}
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`group z-50 ${isMobileMenuOpen ? 'open' : ''}`}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>

            {/* Centered Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="flex items-center justify-center h-12 w-12 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <span className="font-serif text-2xl font-bold text-accent">S</span>
              </a>
            </div>

            {/* Register Button */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMd6J4r_huRkDZuuLHkdyqLBwlpr1sw7fJfM_ISHdeqEX5-A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-accent-foreground py-2 px-3 rounded-full bg-gradient-to-r from-accent to-saffron-600 shadow-lg transition-all hover:shadow-xl hover:scale-105 whitespace-nowrap glow-shadow"
            >
              Register Now
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        ></div>

        {/* Sidebar */}
        <nav className="relative z-10 w-4/5 max-w-sm h-full bg-primary shadow-2xl flex flex-col pt-24 px-6">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-medium text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-200 group"
                  >
                    <IconComponent className="w-5 h-5 text-accent" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Footer text in sidebar */}
          <div className="mt-auto mb-6 text-center">
            <p className="text-sm text-primary-foreground/50">
              4-5 October 2025 • <span className="font-bold text-accent">Auro University</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;