import { Code, Database, Cloud, Brain } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      icon: Code,
      items: ["Python", "Java", "MySQL", "C", "C++"]
    },
    {
      title: "Frameworks & Tools",
      icon: Cloud,
      items: ["Streamlit", "Docker", "Kubernetes", "Jenkins", "Git", "Flask & Django", "Google Colab", "Jupyter Notebook"]
    },
    {
      title: "Domains & Concepts",
      icon: Brain,
      items: ["AI", "Machine Learning", "NLP", "Data Analytics", "DevOps"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="hero-gradient">Stack</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-glow rounded-xl p-8 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item}
                    className="tech-badge px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;