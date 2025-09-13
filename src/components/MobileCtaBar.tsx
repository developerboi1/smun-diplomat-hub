import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const MobileCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show the bar after scrolling past 50% of hero section
      setIsVisible(scrollPosition > heroHeight * 0.5 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border luxury-shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <div className="text-sm font-semibold text-primary">SMUN 2025</div>
            <div className="text-xs text-muted-foreground">4-5 Oct • Auro University</div>
          </div>
          
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-accent to-saffron-600 hover:from-saffron-600 hover:to-accent text-accent-foreground font-semibold px-6"
          >
            Register ₹3,200
          </Button>
          
          <button
            onClick={handleDismiss}
            className="p-1 rounded-md hover:bg-muted transition-colors flex-shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCtaBar;