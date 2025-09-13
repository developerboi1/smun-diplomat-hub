import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/smun_surat', label: 'Instagram' },
    { icon: ExternalLink, href: 'https://linktr.ee/samvidhanamsurat', label: 'Linktree' },
    { icon: Mail, href: 'mailto:info@smun.in', label: 'Email' },
    { icon: Phone, href: 'tel:+919876543210', label: 'Phone' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About SMUN' },
    { href: '#committees', label: 'Committees' },
    { href: '#delegate-info', label: 'Delegate Info' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const importantLinks = [
    { href: '#registration', label: 'Registration' },
    { href: '#venue', label: 'Venue & Travel' },
    { href: '#faq', label: 'FAQ' },
    { href: '#policies', label: 'Policies' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-saffron-600 rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl">SMUN 2025</div>
                <div className="text-sm text-primary-foreground/80">Samvidhanam</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Gujarat's premier Model United Nations conference, fostering diplomatic excellence 
              and leadership development among young minds.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent transition-colors rounded-lg flex items-center justify-center group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Important</h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Event Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Event Details</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div>
                <div className="font-medium text-primary-foreground">Dates</div>
                <div>4–5 October 2025</div>
              </div>
              <div>
                <div className="font-medium text-primary-foreground">Venue</div>
                <div>Auro University, Surat</div>
              </div>
              <div>
                <div className="font-medium text-primary-foreground">Contact</div>
                <div>+91 98765 43210</div>
                <div>info@smun.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration CTA Banner */}
      <div className="bg-gradient-to-r from-accent to-saffron-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-accent-foreground">
              Ready to Join SMUN 2025?
            </h3>
            <p className="text-accent-foreground/90">
              Secure your spot at Gujarat's most prestigious Model United Nations conference
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground hover:text-accent font-semibold"
            >
              Register Now - ₹3,200
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
            <div>
              © 2025 Samvidhanam Model United Nations. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms & Conditions</a>
              <a href="#refund" className="hover:text-accent transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;