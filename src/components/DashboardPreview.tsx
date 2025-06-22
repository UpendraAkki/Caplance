import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Code, Gamepad2, Bot, Zap, Globe } from 'lucide-react';

const DashboardPreview = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Orbis",
      category: "🌐 Website Development",
      description: "The Future of Smart Textile Technology is here. We integrate AI-powered textile sensors into clothing, footwear, and wearables.",
      image: "/api/placeholder/600/400",
      technologies: ["Vite", "React", "ShadCN", "TypeScript", "Tailwind CSS"],
      features: [
        "Modern responsive design",
        "AI textile sensor showcase",
        "Product demonstrations",
        "Interactive technology demos",
        "Smart wearable integrations"
      ],
      liveUrl: "https://orbis.is-a.dev",
      githubUrl: "https://github.com/UpendraAkki/Caplance",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Proctor AI",
      category: "🤖 AI SaaS",
      description: "An AI powered handwritten Assignment Evaluator that revolutionizes the way educators assess student work with intelligent automation.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "ShadCN", "TypeScript", "AI APIs"],
      features: [
        "Handwriting recognition AI",
        "Automated grading system",
        "Intelligent feedback generation",
        "Multi-format support",
        "Teacher dashboard analytics"
      ],
      liveUrl: "https://proctorai.io",
      githubUrl: "#private",
      icon: <Bot className="h-6 w-6" />
    },
    {
      id: 3,
      title: "LeadKamp",
      category: "🚀 Startup Platform",
      description: "A Premium Lead bundles Marketplace connecting businesses with high-quality, verified leads to accelerate growth and conversions.",
      image: "/api/placeholder/600/400",
      technologies: ["Vite", "React", "ShadCN", "TypeScript", "E-commerce"],
      features: [
        "Premium lead marketplace",
        "Quality verification system",
        "Advanced filtering & search",
        "Secure payment processing",
        "Lead performance analytics"
      ],
      liveUrl: "https://leadkamp.com",
      githubUrl: "#private",
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Lume Sonic",
      category: "🎵 Landing Page",
      description: "Elevate Your Event Experience. Professional sound and lighting solutions that bring your event to life. From concerts to private parties, we deliver exceptional audiovisual experiences.",
      image: "/api/placeholder/600/400",
      technologies: ["Vite", "React", "ShadCN", "TypeScript", "Tailwind CSS"],
      features: [
        "Event portfolio showcase",
        "Service booking system",
        "Equipment catalog",
        "Client testimonials",
        "Real-time availability"
      ],
      liveUrl: "https://lume-sonic.is-a.dev",
      githubUrl: "https://github.com/UpendraAkki/LumeSonic",
      icon: <Gamepad2 className="h-6 w-6" />
    }
  ];

  return (
    <section id="portfolio" className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground text-lg">
            Real projects demonstrating expertise across multiple domains
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeProject === index
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/50'
              }`}
            >
              <span className="text-sm font-medium">{project.category}</span>
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {projects[activeProject].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{projects[activeProject].title}</h3>
                <p className="text-primary font-medium">{projects[activeProject].category}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {projects[activeProject].description}
            </p>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-muted text-foreground rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Key Features</h4>
              <div className="grid grid-cols-1 gap-2">
                {projects[activeProject].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open(projects[activeProject].liveUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Live Site
              </Button>
              {projects[activeProject].githubUrl !== "#private" ? (
                <Button
                  variant="outline"
                  onClick={() => window.open(projects[activeProject].githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled
                  className="opacity-50"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Private Project
                </Button>
              )}
            </div>
          </div>

          {/* Project Preview */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center gap-2 p-4 border-b border-border bg-muted/50">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-background rounded border border-border flex items-center px-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-xs text-muted-foreground">
                      {projects[activeProject].liveUrl.replace('https://', '')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project Preview Content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                {/* Animated Code Lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 bg-primary rounded-full mb-2 animate-pulse"
                      style={{
                        width: `${Math.random() * 60 + 20}%`,
                        marginLeft: `${Math.random() * 20}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="text-center z-10">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    {projects[activeProject].icon}
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-2">{projects[activeProject].title}</h4>
                  <p className="text-sm text-muted-foreground">Live Project Available</p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{projects[activeProject].technologies.length}</div>
                <div className="text-xs text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">Ready to build your next project?</h3>
              <p className="text-muted-foreground text-sm mb-4">Let's discuss how I can bring value to your business at $45-$50/hour</p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => window.open('https://github.com/UpendraAkki', '_blank')}
                  variant="outline"
                  size="sm"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View More Projects
                </Button>
                <Button 
                  onClick={() => window.open('mailto:upendra@leadkamp.com?subject=Project Discussion - Portfolio Review', '_blank')}
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
