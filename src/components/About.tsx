import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const whySmunPoints = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Engage with international issues and develop a worldwide outlook on diplomacy and politics.',
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Build confidence, public speaking skills, and leadership qualities in a supportive environment.',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Enhance research, debate, and critical thinking skills crucial for academic and career success.',
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Address contemporary global challenges and develop practical solutions that matter.',
    },
    {
      icon: Heart,
      title: 'Inclusive Community',
      description: 'Join a diverse, welcoming community of young leaders from across Gujarat and beyond.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Experience cutting-edge committee formats and revolutionary conference methodologies.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
              About Samvidhanam MUN
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Gujarat's premier platform for debate, diplomacy, and leadership development
            </p>
          </div>

          {/* Founder's Note */}
          <div className="bg-card rounded-2xl p-8 md:p-12 luxury-shadow">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-serif font-bold text-primary-foreground">V</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary">
                Founder's Note
              </h3>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                "At Samvidhanam MUN, we believe that every young mind has the potential to shape our world's future. 
                Our conference is designed to nurture diplomatic thinking, foster global citizenship, and create 
                leaders who will drive positive change in their communities and beyond."
              </blockquote>
              <cite className="text-base font-semibold text-muted-foreground">
                — Vinay Gupta, Founder & Secretary General
              </cite>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed text-balance">
              To provide an unparalleled platform for students to engage in meaningful dialogue, 
              develop critical thinking skills, and foster diplomatic solutions to global challenges. 
              We strive to create future leaders who are knowledgeable, compassionate, and committed 
              to making a positive impact on the world.
            </p>
          </div>

          {/* Why SMUN Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary text-center">
              Why Choose SMUN?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whySmunPoints.map((point, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 luxury-shadow hover:glow-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-saffron-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary font-serif">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conference Highlights */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                Conference Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="space-y-3">
                  <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                  <div className="text-lg font-medium">Delegates Expected</div>
                  <div className="text-sm text-primary-foreground/80">From across Gujarat and India</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl md:text-4xl font-bold text-accent">6</div>
                  <div className="text-lg font-medium">Diverse Committees</div>
                  <div className="text-sm text-primary-foreground/80">Traditional and innovative formats</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl md:text-4xl font-bold text-accent">2</div>
                  <div className="text-lg font-medium">Days of Excellence</div>
                  <div className="text-sm text-primary-foreground/80">Intensive learning and networking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;