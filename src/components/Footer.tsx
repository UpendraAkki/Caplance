import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Vibe Coder specializing in AI SaaS, Landing Pages, AI Automations, Internal Tools & Game Development. Ready for flexible roles in innovative companies.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/UpendraAkki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/upendra-akki/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://github.com/UpendraAkki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="mailto:upendra@leadkamp.com" 
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Services</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">AI SaaS Development</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Landing Pages</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">AI Automations</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Internal Tools</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Game Development</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">About Me</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Skills & Expertise</a></li>
              <li><a href="https://github.com/UpendraAkki" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub Portfolio</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Work Opportunities</a></li>
              <li><a href="mailto:upendra@leadkamp.com" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Get In Touch</h4>
            <ul className="space-y-3">
              <li><a href="mailto:upendra@leadkamp.com" className="text-muted-foreground hover:text-foreground transition-colors">Email Me</a></li>
              <li><a href="https://www.linkedin.com/in/upendra-akki/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn DM</a></li>
              <li><a href="https://x.com/UpendraAkki" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter DM</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Hire Me</a></li>
              <li><a href="https://github.com/UpendraAkki" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">View Code</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 Caplance - Upendra Gariminti. Available for hire.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:upendra@leadkamp.com" className="hover:text-foreground transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/upendra-akki/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/UpendraAkki" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
