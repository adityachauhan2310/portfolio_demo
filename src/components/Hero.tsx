import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          <span className="hero-gradient">Aditya Chauhan</span>
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-glow">
            AI/ML & DevOps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building NLP tools, recommendation engines, and scalable backends.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="tech-badge"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/aditya-chauhan-057a47234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:chauhanaditya2310@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div 
        className="absolute bottom-8 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('tech-stack')}
      >
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;