import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, User, MessageSquare, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {
  const organizers = [
    {
      name: 'Vinay Gupta',
      position: 'Secretary General',
      phone: '+91 98765 43210',
      email: 'vinay@smun.in',
      responsibilities: 'Overall conference coordination, committee oversight',
    },
    {
      name: 'Priya Sharma',
      position: 'Deputy Secretary General',
      phone: '+91 98765 43211',
      email: 'priya@smun.in',
      responsibilities: 'Registration, delegate services, logistics',
    },
    {
      name: 'Rahul Patel',
      position: 'Director General',
      phone: '+91 98765 43212',
      email: 'rahul@smun.in',
      responsibilities: 'Academic affairs, committee content, research',
    },
    {
      name: 'Ananya Joshi',
      position: 'Finance Director',
      phone: '+91 98765 43213',
      email: 'ananya@smun.in',
      responsibilities: 'Payments, invoicing, group registrations',
    },
  ];

  const quickContacts = [
    { icon: Phone, label: 'Main Contact', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, label: 'General Inquiries', value: 'info@smun.in', href: 'mailto:info@smun.in' },
    { icon: Instagram, label: 'Follow Us', value: '@smun_surat', href: 'https://instagram.com/smun_surat' },
    { icon: ExternalLink, label: 'All Links', value: 'linktr.ee/samvidhanamsurat', href: 'https://linktr.ee/samvidhanamsurat' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
              Contact & Organizers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Get in touch with our dedicated team for any questions or assistance
            </p>
          </div>

          {/* Quick Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 luxury-shadow hover:glow-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-saffron-600 rounded-lg flex items-center justify-center mx-auto">
                    <contact.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{contact.label}</div>
                    <a 
                      href={contact.href}
                      className="text-primary font-semibold hover:text-accent transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="luxury-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-serif">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input id="institution" placeholder="School/College name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's your inquiry about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-accent to-saffron-600 hover:from-saffron-600 hover:to-accent text-accent-foreground font-semibold">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours during business days
                </p>
              </CardContent>
            </Card>

            {/* Organizers List */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary">
                Meet Our Team
              </h3>
              
              <div className="space-y-4">
                {organizers.map((organizer, index) => (
                  <Card key={index} className="luxury-shadow hover:glow-shadow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="text-lg font-semibold text-primary font-serif">{organizer.name}</h4>
                            <p className="text-sm font-medium text-accent">{organizer.position}</p>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <a href={`tel:${organizer.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-accent transition-colors">
                                {organizer.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a href={`mailto:${organizer.email}`} className="text-foreground hover:text-accent transition-colors">
                                {organizer.email}
                              </a>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {organizer.responsibilities}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="bg-gradient-to-r from-accent/10 to-saffron-50 border-accent/20">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="text-lg font-semibold text-primary font-serif">Office Hours</h4>
                  <div className="space-y-1 text-sm text-foreground">
                    <div><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</div>
                    <div><strong>Saturday:</strong> 10:00 AM - 4:00 PM</div>
                    <div><strong>Sunday:</strong> Closed</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    For urgent matters during off-hours, please call our main contact number
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Address */}
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-serif font-semibold">Conference Venue</h3>
              </div>
              <div className="max-w-2xl mx-auto space-y-2">
                <div className="text-lg font-medium">Auro University</div>
                <div className="text-primary-foreground/90">
                  Hazira - Ghogha Road, Hazira, Surat, Gujarat 394510
                </div>
                <div className="text-sm text-primary-foreground/80 pt-2">
                  Easily accessible by public transport • Ample parking available • Premium conference facilities
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;