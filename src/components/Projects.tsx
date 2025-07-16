import { ExternalLink, Github, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "LLaMA Translation Tool",
      description: "Real-time multilingual translation with grammar & idiomatic insights",
      tech: ["Python", "Streamlit", "Groq API", "LLaMA 3.1"],
      features: [
        "Real-time translation across multiple languages",
        "Grammar analysis and corrections",
        "Idiomatic expression insights",
        "Interactive web interface"
      ],
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Content-Based Movie Recommender",
      description: "Smart movie recommendations using NLP and similarity algorithms",
      tech: ["Python", "NLP", "Pandas", "Scikit-learn"],
      features: [
        "40% memory reduction optimization",
        "25% faster response time",
        "Bag-of-Words & cosine similarity",
        "Deployed on Render platform"
      ],
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions and optimization techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glow border-0 overflow-hidden animate-bounce-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="tech-badge px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="tech-badge">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;