import React from 'react';
import { Calendar, Trophy, Users, Code, Gamepad2, Bot, TrendingUp, Crown, GraduationCap, ShoppingCart } from 'lucide-react';

const Testimonials = () => {
  const achievements = [
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Game Development Foundation",
      description: "Built solid foundation in game development with Unity, creating multiple complete games and interactive experiences",
      metrics: ["Unity Engine Mastery", "C# Programming", "Game Mechanics Design"],
      category: "🎮 Game Development",
      years: "2019 - 2023"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-Commerce Expert",
      description: "Specialized in e-commerce platforms, marketplace development, and online business solutions with focus on user experience",
      metrics: ["Marketplace Development", "Lead Generation", "Conversion Optimization"],
      category: "🛒 E-Commerce",
      years: "2023 - 2024"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "No-Code Web Developer",
      description: "Mastered no-code/low-code platforms to rapidly build and deploy web solutions for businesses and startups",
      metrics: ["Rapid Prototyping", "ShadCN Expertise", "Modern Web Tech"],
      category: "⚡ No-Code Development",
      years: "2023 - 2025"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Business Administration Graduate",
      description: "Graduated with Bachelor's in Business Administration, specializing in Entrepreneurship, combining tech skills with business acumen",
      metrics: ["Entrepreneurship Focus", "Business Strategy", "Leadership Skills"],
      category: "🎓 Education & Leadership",
      years: "2025"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Vibe Coder & BBA Graduate",
      description: "Graduated with Bachelor's in Business Administration specializing in Entrepreneurship. Ready for flexible roles combining tech expertise with business leadership.",
      highlight: true
    },
    {
      year: "2023-2025",
      title: "No-Code Web Developer",
      description: "Mastered modern web development with focus on rapid deployment and user-centric design"
    },
    {
      year: "2023-2024",
      title: "E-Commerce Expert",
      description: "Specialized in marketplace development and lead generation platforms"
    },
    {
      year: "2019-2023",
      title: "Game Developer",
      description: "Built foundation in Unity game development and C# programming"
    }
  ];
  
  return (
    <section id="experience" className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            From game development to business leadership - a versatile developer's journey
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{achievement.years}</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {achievement.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs bg-muted text-foreground px-2 py-1 rounded border border-border"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium tracking-tighter text-foreground mb-2">Professional Timeline</h3>
            <p className="text-muted-foreground">My journey as a Vibe Coder</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full border-4 border-background ${item.highlight ? 'bg-primary' : 'bg-muted'} z-10`}></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`p-4 rounded-xl border ${item.highlight ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'} backdrop-blur-sm`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-medium text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-8 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">2025</div>
                  <div className="text-xs text-muted-foreground">BBA Graduate</div>
                </div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-border"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">No-Code</div>
                  <div className="text-xs text-muted-foreground">Expert</div>
                </div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-border"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">$45-50</div>
                  <div className="text-xs text-muted-foreground">Per Hour</div>
                </div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-border"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Flexible</div>
                  <div className="text-xs text-muted-foreground">Schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Trophy className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Ready to make an impact</h3>
              <p className="text-muted-foreground text-sm mb-4">Available for flexible work arrangements at $45-$50/hour with companies that value innovation</p>
              <button 
                onClick={() => window.open('mailto:upendra@leadkamp.com?subject=Flexible Work Opportunity - Caplance', '_blank')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Users className="h-4 w-4" />
                Let's Discuss Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
