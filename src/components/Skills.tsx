
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "Flask", level: "Intermediate" },
      ],
      background: "bg-gradient-to-br from-electric-blue/20 to-transparent",
      border: "border-electric-blue/30",
    },
    {
      title: "Data Science Tools",
      skills: [
        { name: "NumPy", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "Matplotlib", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Tableau", level: "Intermediate" },
        { name: "BeautifulSoup", level: "Intermediate" },
      ],
      background: "bg-gradient-to-br from-electric-teal/20 to-transparent",
      border: "border-electric-teal/30",
    },
    {
      title: "Areas of Expertise",
      skills: [
        { name: "Data Analysis", level: "Advanced" },
        { name: "Web Scraping", level: "Intermediate" },
        { name: "Predictive Modeling", level: "Intermediate" },
        { name: "Dashboarding", level: "Advanced" },
        { name: "Full-stack Development", level: "Intermediate" },
        { name: "Data Visualization", level: "Advanced" },
      ],
      background: "bg-gradient-to-br from-purple-500/20 to-transparent",
      border: "border-purple-500/30",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">Professional Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 border ${category.border} ${category.background}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        skill.level === "Advanced" 
                          ? "bg-electric-blue/20 text-electric-blue" 
                          : "bg-electric-teal/20 text-electric-teal"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          skill.level === "Advanced" 
                            ? "bg-gradient-to-r from-electric-blue to-purple-500 w-[90%]" 
                            : "bg-gradient-to-r from-electric-teal to-electric-blue w-[70%]"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-electric-blue/10 border border-electric-blue/30 px-4 py-2 rounded-full text-electric-blue">Git</span>
            <span className="bg-electric-teal/10 border border-electric-teal/30 px-4 py-2 rounded-full text-electric-teal">SQL</span>
            <span className="bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full text-purple-400">Bootstrap</span>
            <span className="bg-electric-blue/10 border border-electric-blue/30 px-4 py-2 rounded-full text-electric-blue">Machine Learning</span>
            <span className="bg-electric-teal/10 border border-electric-teal/30 px-4 py-2 rounded-full text-electric-teal">Responsive Design</span>
            <span className="bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full text-purple-400">API Integration</span>
            <span className="bg-electric-blue/10 border border-electric-blue/30 px-4 py-2 rounded-full text-electric-blue">Statistical Analysis</span>
            <span className="bg-electric-teal/10 border border-electric-teal/30 px-4 py-2 rounded-full text-electric-teal">Database Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
