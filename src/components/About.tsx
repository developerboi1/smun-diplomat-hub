import React from 'react';
import { 
  Award, 
  Gavel, 
  GraduationCap, 
  Shield, 
  Users2, 
  PartyPopper,
  Quote 
} from 'lucide-react';
import heroImage from '@/assets/auro-university-hero.jpg';

const About = () => {
  const whySmunPoints = [
    {
      icon: Award,
      title: 'Elite Networking',
      description: 'Connect with a distinguished cohort of delegates and mentors.',
    },
    {
      icon: Gavel,
      title: 'Unmatched Debate',
      description: 'Experience intellectually stimulating and professionally moderated committees.',
    },
    {
      icon: GraduationCap,
      title: 'Prestigious Venues',
      description: 'Immerse yourself in settings that inspire gravitas and ambition.',
    },
    {
      icon: Shield,
      title: 'Coveted Awards',
      description: 'Compete for accolades that hold significant prestige and value.',
    },
    {
      icon: Users2,
      title: 'Expert Guidance',
      description: 'Learn from seasoned diplomats and international relations experts.',
    },
    {
      icon: PartyPopper,
      title: 'Exclusive Socials',
      description: 'Engage in curated networking events and diplomatic dinners.',
    },
  ];

  const highlights = [
    { value: '6', label: 'Committees' },
    { value: '500+', label: 'Delegates' },
    { value: '2', label: 'Days' },
    { value: '1', label: 'Legacy' },
  ];

  return (
    <section id="about" className="relative w-full pb-24 bg-gradient-to-b from-background to-primary">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent z-10"></div>
      
      {/* Hero Background */}
      <div 
        className="relative min-h-[40vh] w-full bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 50%' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center p-4 text-primary-foreground">
          <h1 className="text-primary-foreground tracking-tight text-4xl md:text-5xl font-extrabold leading-tight shadow-lg font-serif">
            About SMUN
          </h1>
          <p className="mt-2 text-lg text-primary-foreground/90 max-w-md">
            An apex of diplomatic discourse and intellectual excellence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 -mt-16 px-4 space-y-12 max-w-6xl mx-auto">
        {/* Founder's Note */}
        <div className="bg-primary/50 backdrop-blur-2xl border border-accent/20 rounded-2xl p-6 shadow-2xl shadow-black/30">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary-foreground mb-6 font-serif">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-accent after:rounded-sm">
              Founder&apos;s Note
            </span>
          </h2>
          <div className="relative">
            <Quote className="text-accent/30 w-16 h-16 md:w-20 md:h-20 absolute -top-4 -left-4 opacity-30" />
            <p className="text-primary-foreground/90 text-base md:text-lg font-normal leading-relaxed text-center italic px-8 md:px-12">
              &quot;We envisioned a platform not just for debate, but for inspiration. SMUN is where the leaders of tomorrow are forged in the crucible of diplomacy, emerging with a profound understanding of the world and their place within it. It is our commitment to excellence that defines this conference.&quot;
            </p>
            <Quote className="text-accent/30 w-16 h-16 md:w-20 md:h-20 absolute -bottom-4 -right-4 opacity-30 rotate-180" />
          </div>
          <p className="text-right text-accent font-bold text-lg md:text-xl mt-4">
            - Vinay Gupta
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/50 backdrop-blur-2xl border border-primary-foreground/10 rounded-2xl p-6 shadow-2xl shadow-black/30">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary-foreground mb-6 font-serif">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-accent after:rounded-sm">
              Our Mission
            </span>
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg font-normal leading-relaxed text-center">
            To curate an unparalleled Model United Nations experience that embodies the spirit of elite diplomacy, intellectual rigor, and transformative leadership. We strive to cultivate a prestigious environment where future global leaders can hone their skills, broaden their perspectives, and forge lifelong connections within a framework of utmost professionalism and academic excellence.
          </p>
        </div>

        {/* Why Choose SMUN */}
        <div className="space-y-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary-foreground font-serif">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-accent after:rounded-sm">
              Why Choose SMUN?
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {whySmunPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/70 to-indigo-900/40 backdrop-blur-xl border border-primary-foreground/10 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <point.icon className="text-accent w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground">{point.title}</h3>
                    <p className="text-primary-foreground/70 leading-relaxed mt-1">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Highlights */}
        <div className="space-y-8">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary-foreground font-serif">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-accent after:rounded-sm">
              Conference Highlights
            </span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-primary/50 backdrop-blur-xl border border-primary-foreground/10 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p className="text-3xl md:text-4xl font-black text-accent">{highlight.value}</p>
                <p className="text-primary-foreground/80 mt-1">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;