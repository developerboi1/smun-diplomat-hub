import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Package, Utensils, Award, Clock, Shirt, IndianRupee, Star } from 'lucide-react';

const DelegateInfo = () => {
  const inclusions = [
    { icon: Package, title: 'Delegate Kit', description: 'Comprehensive materials, notebook, and conference merchandise' },
    { icon: Utensils, title: 'Meals Included', description: 'High-quality refreshments, lunch, and networking dinner' },
    { icon: Award, title: 'Certificate', description: 'Official participation certificate and awards for outstanding delegates' },
    { icon: Star, title: 'Social Events', description: 'Networking sessions, cultural evening, and delegate mixer' },
  ];

  const schedule = [
    { time: '08:00 - 09:00', event: 'Registration & Welcome Coffee' },
    { time: '09:00 - 10:30', event: 'Opening Ceremony & Keynote Address' },
    { time: '11:00 - 12:30', event: 'Committee Session 1' },
    { time: '14:00 - 15:30', event: 'Committee Session 2' },
    { time: '16:00 - 17:30', event: 'Committee Session 3' },
    { time: '18:00 - 20:00', event: 'Cultural Evening & Networking Dinner' },
  ];

  const dressCodes = [
    { day: 'Day 1 (Oct 4)', code: 'Western Formal', description: 'Suits, blazers, formal shirts, ties recommended' },
    { day: 'Day 2 (Oct 5)', code: 'Business Casual', description: 'Smart casual, cultural attire welcome' },
    { day: 'Cultural Evening', code: 'Ethnic/Formal', description: 'Traditional Indian wear or evening formal' },
  ];

  return (
    <section id="delegate-info" className="py-16 md:py-24 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
              Delegate Information
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Everything you need to know for an exceptional SMUN experience
            </p>
          </div>

          {/* Eligibility & Fees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="luxury-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-serif">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  Eligibility & Participation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Who Can Participate?</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">Grades 6-12</Badge>
                    <Badge variant="secondary">1st Year Undergraduate</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Students from schools and colleges across Gujarat and neighboring states are welcome to participate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Group Registrations</h4>
                  <p className="text-sm text-muted-foreground">
                    Schools can register multiple delegates together. Special group discounts available for 10+ delegates.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-shadow bg-gradient-to-br from-accent/5 to-saffron-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-serif">
                  <IndianRupee className="w-6 h-6 text-accent" />
                  Registration Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">₹3,200</div>
                  <div className="text-lg font-semibold text-foreground">Per Delegate</div>
                  <div className="text-sm text-muted-foreground">All-inclusive conference fee</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Early Bird Discount</span>
                    <span className="font-semibold text-green-600">Available</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Group Discount (10+)</span>
                    <span className="font-semibold text-green-600">₹2,900/delegate</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-accent to-saffron-600 hover:from-saffron-600 hover:to-accent text-accent-foreground font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary text-center">
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inclusions.map((inclusion, index) => (
                <Card key={index} className="text-center hover:scale-105 transition-all duration-300 luxury-shadow hover:glow-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-saffron-600 rounded-lg flex items-center justify-center mx-auto">
                      <inclusion.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary font-serif">{inclusion.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{inclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Schedule Highlights */}
          <div className="bg-card rounded-2xl p-8 md:p-12 luxury-shadow">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary text-center mb-8">
              Schedule Highlights (Day 1)
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-2 text-accent font-semibold min-w-[120px]">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                  <div className="text-foreground font-medium">{item.event}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Detailed schedule for both days will be shared with registered delegates
              </p>
            </div>
          </div>

          {/* Dress Code */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary text-center">
              Dress Code Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dressCodes.map((dress, index) => (
                <Card key={index} className="luxury-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-primary font-serif text-lg">
                      <Shirt className="w-5 h-5 text-accent" />
                      {dress.day}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-lg font-semibold text-accent">{dress.code}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{dress.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-accent/10 rounded-lg p-6 text-center">
              <p className="text-sm text-foreground">
                <strong>Important:</strong> Proper formal attire is mandatory for all committee sessions. 
                Delegates not adhering to dress code may be denied entry to sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelegateInfo;