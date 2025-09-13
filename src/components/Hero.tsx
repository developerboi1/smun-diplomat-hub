import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/auro-university-hero.jpg';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-04T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Delegates Expected' },
    { icon: Trophy, value: '6', label: 'Committees' },
    { icon: CalendarDays, value: '2', label: 'Days of Impact' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-0 pt-16">{/* Remove pt-16 for desktop, keep for mobile */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Auro University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-balance leading-tight">
              Samvidhanam Model United Nations
            </h1>
            <div className="text-xl md:text-2xl font-medium text-primary-foreground/90">
              Gujarat's Most Premium MUN Conference
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-medium">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span>4–5 October 2025</span>
            </div>
            <div className="hidden sm:block text-primary-foreground/50">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Auro University, Surat</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance">
            Where Diplomacy Meets Leadership — Empowering students to lead with knowledge and kindness
          </p>

          {/* Countdown Timer */}
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-primary-foreground/20">
            <div className="text-sm md:text-base font-medium text-primary-foreground/80 mb-4">
              Event Countdown
            </div>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-accent">{value}</div>
                  <div className="text-xs md:text-sm font-medium text-primary-foreground/70 capitalize">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-saffron-600 hover:from-saffron-600 hover:to-accent text-accent-foreground font-semibold text-lg px-8 py-6 glow-shadow"
            >
              Register Now - ₹3,200
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="grid grid-cols-3 gap-4 md:gap-8 bg-background/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-primary-foreground/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-2" />
                <div className="text-lg md:text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;