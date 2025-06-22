import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: "Hourly Consulting",
      price: "$45-50",
      period: "per hour",
      description: "Perfect for specific tasks, consultations, and short-term projects",
      features: [
        "Flexible scheduling",
        "No minimum commitment",
        "Direct communication",
        "Quick turnaround",
        "Expert guidance",
        "Problem-solving focus",
        "Technical consultation"
      ],
      buttonText: "Book Hourly Work",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Project-Based",
      price: "Custom Quote",
      period: "based on scope",
      description: "Ideal for complete projects with defined deliverables and timelines",
      features: [
        "Full project ownership",
        "Milestone-based delivery",
        "Regular progress updates",
        "Quality assurance",
        "Post-launch support",
        "Documentation included",
        "Competitive pricing"
      ],
      buttonText: "Request Quote",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Flexible Role",
      price: "Negotiable",
      period: "based on arrangement",
      description: "Join your team for long-term collaboration in development or leadership roles",
      features: [
        "Full-time or part-time",
        "Remote or hybrid work",
        "Leadership opportunities",
        "Team collaboration",
        "Strategic planning",
        "Long-term commitment",
        "Growth-oriented mindset"
      ],
      buttonText: "Discuss Role",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Flexible Work Arrangements
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the engagement model that works best for your needs at competitive rates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                  onClick={() => {
                    const subject = plan.name === "Hourly Consulting" 
                      ? "Hourly Work Request - $45-50/hr"
                      : plan.name === "Project-Based" 
                      ? "Project Quote Request - Caplance"
                      : "Flexible Role Discussion - Caplance";
                    window.open(`mailto:upendra@leadkamp.com?subject=${subject}`, '_blank');
                  }}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Availability Notice */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium text-foreground mb-2">Available for immediate start</h3>
              <p className="text-muted-foreground text-sm">I work in flexible time zones and can adapt to your team's schedule. Recent BBA graduate specializing in Entrepreneurship.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button 
                variant="outline" 
                onClick={() => window.open('https://www.linkedin.com/in/upendra-akki/', '_blank')}
              >
                LinkedIn
              </Button>
              <Button 
                onClick={() => window.open('mailto:upendra@leadkamp.com?subject=Work Availability - Caplance', '_blank')}
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>

        {/* Rate Information */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">$45-50</div>
              <div className="text-sm text-muted-foreground">Hourly Rate</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Flexible</div>
              <div className="text-sm text-muted-foreground">Time Zones</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Available</div>
              <div className="text-sm text-muted-foreground">Immediately</div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          Ready to discuss your project? <a href="mailto:upendra@leadkamp.com" className="text-primary hover:underline">Contact Upendra directly</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
