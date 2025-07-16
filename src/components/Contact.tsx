import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      title: "Email",
      value: "chauhanaditya2310@gmail.com",
      href: "mailto:chauhanaditya2310@gmail.com",
      icon: Mail,
      description: "Send me a message"
    },
    {
      title: "LinkedIn", 
      value: "linkedin.com/in/aditya-chauhan-057a47234",
      href: "https://linkedin.com/in/aditya-chauhan-057a47234",
      icon: Linkedin,
      description: "Let's connect professionally"
    },
    {
      title: "GitHub",
      value: "github.com/adityachauhan",
      href: "https://github.com",
      icon: Github,
      description: "Check out my code"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="hero-gradient">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss AI/ML projects, backend solutions, or potential collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card-glow rounded-xl p-6 block transition-all hover:scale-105 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg mx-auto w-fit">
                  <contact.icon size={24} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{contact.description}</p>
                  <p className="text-primary text-sm font-medium break-all">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="card-glow rounded-xl p-8 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, innovative projects, 
              and ways to leverage AI/ML for solving real-world problems.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('mailto:chauhanaditya2310@gmail.com', '_blank')}
            >
              <Send size={20} className="mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;