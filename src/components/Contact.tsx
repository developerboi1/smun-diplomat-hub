import React from 'react';
import { Phone, Mail, MessageSquare, School, AlertTriangle, Navigation, Instagram, Linkedin, Twitter } from 'lucide-react';
import heroImage from '@/assets/auro-university-hero.jpg';

const Contact = () => {
  return (
    <section id="contact" className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div 
          className="flex min-h-[50vh] flex-col gap-4 bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-foreground text-4xl sm:text-5xl font-extrabold font-serif leading-tight tracking-tighter">
              Venue & Contact
            </h1>
            <p className="text-muted-foreground text-lg font-normal leading-normal mt-2 max-w-md mx-auto font-serif">
              Auro University, Surat, Gujarat
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-saffron-600 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Venue Information */}
        <div className="py-8">
          <h2 className="text-foreground text-3xl font-bold font-serif leading-tight tracking-tight px-2 pb-6">
            Venue Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
            <div className="glassmorphism rounded-xl p-5 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 bg-card border">
              <h3 className="text-foreground font-serif text-xl font-bold">Location</h3>
              <p className="text-muted-foreground mt-1">Auro University, Surat, Gujarat</p>
            </div>
            <div className="glassmorphism rounded-xl p-5 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 bg-card border">
              <h3 className="text-foreground font-serif text-xl font-bold">Address</h3>
              <p className="text-muted-foreground mt-1">Earthspace, Hazira Road, opp. ONGC, Surat, Gujarat 394510</p>
            </div>
            <div className="glassmorphism rounded-xl p-5 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 bg-card border">
              <h3 className="text-foreground font-serif text-xl font-bold">Facilities</h3>
              <p className="text-muted-foreground mt-1">Conference Halls, Dining, Parking, WiFi</p>
            </div>
            <div className="glassmorphism rounded-xl p-5 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 bg-card border">
              <h3 className="text-foreground font-serif text-xl font-bold">Accessibility</h3>
              <p className="text-muted-foreground mt-1">Wheelchair access, special needs support</p>
            </div>
            <div className="glassmorphism rounded-xl p-5 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 bg-card border sm:col-span-2">
              <h3 className="text-foreground font-serif text-xl font-bold">Accommodation</h3>
              <p className="text-muted-foreground mt-1">Nearby hotels and limited campus housing options.</p>
            </div>
          </div>
        </div>

        {/* Map & Directions */}
        <div className="py-8">
          <h2 className="text-foreground text-3xl font-bold font-serif leading-tight tracking-tight px-2 pb-6">
            Map & Directions
          </h2>
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-accent/20 mx-2">
            <div 
              className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
            <div className="relative p-6 flex flex-col items-center justify-center min-h-[250px] text-center">
              <School className="text-accent text-5xl mb-2" />
              <h3 className="text-primary-foreground font-serif text-2xl font-bold mt-2">Auro University Campus</h3>
              <p className="text-primary-foreground/70 mt-1">Key buildings and parking will be highlighted.</p>
              <button className="mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-accent to-saffron-600 text-accent-foreground text-base font-bold leading-normal tracking-wide shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-shadow duration-300">
                <span className="truncate">Get Directions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="py-8 bg-muted/30 rounded-xl">
          <h2 className="text-foreground text-3xl font-bold font-serif leading-tight tracking-tight px-2 pb-6">
            Contact Us
          </h2>
          <div className="space-y-4 px-2">
            <a 
              className="flex items-center bg-card border rounded-xl p-4 shadow-lg hover:bg-accent/10 transition-all duration-300 group" 
              href="mailto:info@samvidhanammun.org"
            >
              <Mail className="text-accent text-3xl mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-foreground font-semibold font-sans text-lg">Email</h3>
                <p className="text-accent/90 font-normal">info@samvidhanammun.org</p>
              </div>
            </a>
            <a 
              className="flex items-center bg-card border rounded-xl p-4 shadow-lg hover:bg-accent/10 transition-all duration-300 group" 
              href="tel:+919876543210"
            >
              <Phone className="text-accent text-3xl mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-foreground font-semibold font-sans text-lg">Phone</h3>
                <p className="text-accent/90 font-normal">+91 98765 43210</p>
              </div>
            </a>
            <a 
              className="flex items-center bg-card border rounded-xl p-4 shadow-lg hover:bg-accent/10 transition-all duration-300 group" 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="text-accent text-3xl mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-foreground font-semibold font-sans text-lg">WhatsApp</h3>
                <p className="text-accent/90 font-normal">+91 98765 43210</p>
              </div>
            </a>
            <div className="flex items-center bg-card border rounded-xl p-4 shadow-lg hover:bg-accent/10 transition-all duration-300 group">
              <AlertTriangle className="text-accent text-3xl mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-foreground font-semibold font-sans text-lg">Emergency Contact</h3>
                <p className="text-accent/90 font-normal">+91 12345 67890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Travel & Accommodation */}
        <div className="py-8">
          <h2 className="text-foreground text-3xl font-bold font-serif leading-tight tracking-tight px-2 pb-6">
            Travel & Accommodation
          </h2>
          <div className="space-y-4 px-2">
            <div className="bg-card border rounded-xl p-5 shadow-lg">
              <h3 className="text-accent font-serif text-xl font-bold">By Air</h3>
              <p className="text-muted-foreground mt-1">Surat Airport (STV) - 20 mins away. Ahmedabad Airport (AMD) - 4 hours away.</p>
            </div>
            <div className="bg-card border rounded-xl p-5 shadow-lg">
              <h3 className="text-accent font-serif text-xl font-bold">By Rail</h3>
              <p className="text-muted-foreground mt-1">Surat Railway Station (ST) - 30 mins away.</p>
            </div>
            <div className="bg-card border rounded-xl p-5 shadow-lg">
              <h3 className="text-accent font-serif text-xl font-bold">By Road</h3>
              <p className="text-muted-foreground mt-1">Well-connected by National Highways. Cabs and auto-rickshaws available.</p>
            </div>
            <div className="bg-card border rounded-xl p-5 shadow-lg">
              <h3 className="text-accent font-serif text-xl font-bold">Recommended Hotels</h3>
              <p className="text-muted-foreground mt-1">A list of recommended hotels with special rates will be provided to registered delegates.</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="pt-4 pb-8">
          <h2 className="text-foreground text-center text-3xl font-bold font-serif leading-tight tracking-tight px-2 pb-6">
            Connect With Us
          </h2>
          <div className="flex justify-center items-center gap-6">
            <a 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110" 
              href="#"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110" 
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 transform hover:scale-110" 
              href="#"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-20 right-4 z-20">
          <button className="flex items-center justify-center size-14 bg-gradient-to-r from-accent to-saffron-600 rounded-full shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
            <MessageSquare className="text-accent-foreground text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;