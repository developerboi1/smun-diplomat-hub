import React, { useState, useEffect } from 'react';
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
    { value: '500+', label: 'Delegates' },
    { value: '6', label: 'Committees' },
    { value: '2', label: 'Days' },
  ];

  const countdownItems = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours.toString().padStart(2, '0'), label: 'Hours' },
    { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'Minutes' },
    { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'Seconds' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-16">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Auro University Campus" 
          className="w-full h-full object-cover"
        />
        {/* Primary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-transparent z-10"></div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center">
        <div className="relative h-[60vh] min-h-[400px] w-full flex flex-col justify-end overflow-hidden">
          <div className="relative z-20 flex flex-col items-center justify-center text-center p-4 text-primary-foreground">
            <h1 className="text-primary-foreground tracking-tight text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-serif">
              Samvidhanam
            </h1>
            <h2 className="text-primary-foreground tracking-tight text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-1 font-serif">
              Model United Nations
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl font-normal leading-normal mt-4">
              Gujarat&apos;s Most Premium MUN Conference
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="relative z-20 -mt-16 px-4">
          <div className="flex gap-3 justify-center text-primary-foreground text-center">
            {countdownItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 shadow-lg">
                  <p className="text-2xl md:text-4xl font-bold">{item.value}</p>
                </div>
                <p className="text-xs font-normal leading-normal text-primary-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <p className="text-primary-foreground text-center text-base md:text-lg font-normal leading-normal mt-6 px-4">
          4-5 October 2025 | Auro University, Surat
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center mt-6">
          <div className="flex flex-col sm:flex-row gap-4 px-4 w-full max-w-md">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMd6J4r_huRkDZuuLHkdyqLBwlpr1sw7fJfM_ISHdeqEX5-A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg h-12 px-6 bg-gradient-to-r from-accent to-saffron-600 text-accent-foreground text-base font-bold leading-normal tracking-wide shadow-[0_0_20px_rgba(255,179,0,0.5)] hover:shadow-[0_0_30px_rgba(255,179,0,0.8)] transition-shadow duration-300"
            >
              Register Now
            </a>
            <button className="flex w-full items-center justify-center rounded-lg h-12 px-6 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground text-base font-bold leading-normal tracking-wide transition-colors hover:bg-primary-foreground/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 p-4 mt-6 max-w-lg mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-1 rounded-lg p-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <p className="text-accent tracking-tight text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-primary-foreground/80 text-sm font-medium leading-normal text-center">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-accent text-lg md:text-xl font-medium leading-normal mt-4 px-4 text-center tracking-wider">
          &quot;Where Diplomacy Meets Leadership&quot;
        </p>

        {/* Empowering message */}
        <p className="text-primary-foreground/90 text-base md:text-lg text-center mt-2 px-4 max-w-4xl mx-auto">
          Empowering students to lead with knowledge and kindness
        </p>
      </div>
    </section>
  );
};

export default Hero;