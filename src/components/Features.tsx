import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "AI SaaS Development",
      description: "Build intelligent SaaS applications with cutting-edge AI integration and modern tech stacks.",
      expandedDescription: "Expertise in developing scalable AI-powered SaaS platforms using React, Node.js, Python, and modern AI APIs. I create intelligent applications that solve real business problems with user-friendly interfaces and robust backend systems.",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Landing Pages & Web Apps",
      description: "Create high-converting landing pages and responsive web applications that drive results.",
      expandedDescription: "Design and develop modern, responsive landing pages and web applications using React, TypeScript, and Tailwind CSS. Focus on conversion optimization, performance, and exceptional user experience across all devices.",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "AI Automations",
      description: "Streamline business processes with intelligent automation workflows and AI integrations.",
      expandedDescription: "Build custom AI automation solutions using OpenAI, Claude, and other AI services. Create workflows that automate repetitive tasks, integrate with existing systems, and provide intelligent decision-making capabilities.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Internal Tools",
      description: "Develop custom internal tools and dashboards to optimize your team's productivity.",
      expandedDescription: "Create powerful internal tools, admin dashboards, and business applications tailored to your specific needs. Focus on improving team efficiency, data visualization, and workflow management with intuitive interfaces.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Game Development",
      description: "3+ years of Unity game development experience creating engaging interactive experiences.",
      expandedDescription: "Experienced Unity developer with 3+ years building games and interactive applications. Expertise in C#, game mechanics, UI/UX for games, performance optimization, and publishing across multiple platforms.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Leadership & Strategy",
      description: "Ready for leadership roles with expertise in project management and strategic planning.",
      expandedDescription: "Strong background in marketing, sales, and team leadership. Experienced in project management, research coordination, and strategic planning. Ready to take on leadership roles like Project Manager, Team Lead, or Research Manager.",
      icon: (
        <BookOpen size={24} className="text-cosmic-accent" />
      )
    }
  ];

  const techStacks = [
    {
      category: "🎮 Game Development",
      color: "bg-purple-500/10 border-purple-500/20",
      technologies: [
        { name: "Unity", level: 95, experience: "3+ years" },
        { name: "C#", level: 90, experience: "3+ years" },
        { name: "Blender", level: 75, experience: "2+ years" },
        { name: "Photon", level: 85, experience: "2+ years" }
      ]
    },
    {
      category: "🤖 AI Development",
      color: "bg-blue-500/10 border-blue-500/20",
      technologies: [
        { name: "OpenAI API", level: 90, experience: "1+ year" },
        { name: "Python", level: 85, experience: "2+ years" },
        { name: "TensorFlow", level: 70, experience: "1+ year" },
        { name: "LangChain", level: 80, experience: "1+ year" }
      ]
    },
    {
      category: "📈 Web Development",
      color: "bg-green-500/10 border-green-500/20",
      technologies: [
        { name: "React", level: 95, experience: "3+ years" },
        { name: "TypeScript", level: 90, experience: "2+ years" },
        { name: "Node.js", level: 85, experience: "2+ years" },
        { name: "Tailwind CSS", level: 95, experience: "2+ years" }
      ]
    },
    {
      category: "👨‍💼 Tools & Management",
      color: "bg-orange-500/10 border-orange-500/20",
      technologies: [
        { name: "Git", level: 90, experience: "3+ years" },
        { name: "Docker", level: 75, experience: "1+ year" },
        { name: "AWS", level: 70, experience: "1+ year" },
        { name: "Figma", level: 80, experience: "2+ years" }
      ]
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Everything your business needs
          </h2>
          <p className="text-cosmic-muted text-lg">
            Comprehensive development solutions from a versatile full-stack developer ready to drive your company's growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button 
                      className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium"
                      onClick={() => window.open('mailto:upendra@leadkamp.com', '_blank')}
                    >
                      Hire me for this →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-foreground mb-4">
              Technology Expertise
            </h3>
            <p className="text-muted-foreground text-lg">
              Mastering the tools that power modern development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((stack, stackIndex) => (
              <div
                key={stackIndex}
                className={`p-6 rounded-xl border ${stack.color} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}
              >
                <h4 className="text-lg font-medium text-foreground mb-1">{stack.category}</h4>
                <p className="text-sm text-muted-foreground mb-6">Professional experience and proficiency</p>
                
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{tech.name}</span>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{tech.experience}</span>
                          <span className="font-medium text-primary">{tech.level}%</span>
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${tech.level}%`,
                            animationDelay: `${stackIndex * 200 + techIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Available to Start</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
