import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Abacus Desk IT Solutions Pvt. Ltd.",
      period: "Apr 2025 - Present",
      location: "Faridabad, Haryana",
      description: [
        "Developing and implementing AI/ML solutions to automate the workflows",
        "Working with modern AI frameworks and tools",
        "Collaborating on innovative technology solutions"
      ],
      current: true
    },
    {
      title: "Backend Operations",
      company: "Gaindamull Hemraj Financial Services",
      period: "Oct 2022 – Sep 2023",
      location: "Faridabad, Haryana",
      description: [
        "Processed and managed transactional data pipelines for accuracy and compliance",
        "Maintained detailed records and automated reporting workflows",
        "Enhanced data processing efficiency through optimization techniques"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="hero-gradient">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in AI/ML and backend operations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.period}`}
              className="card-glow rounded-xl p-8 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-lg ${exp.current ? 'bg-primary/20' : 'bg-secondary'}`}>
                    <Briefcase size={24} className={exp.current ? 'text-primary' : 'text-muted-foreground'} />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl text-primary-glow font-semibold mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;