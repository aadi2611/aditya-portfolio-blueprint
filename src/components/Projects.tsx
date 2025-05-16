
import { useState } from "react";
import { ArrowRight, Image } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Cricket Data Analysis",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80",
      description: "Web scraping with BeautifulSoup and visualization with Power BI to analyze cricket match statistics and player performance.",
      tools: ["Python", "BeautifulSoup", "Power BI", "Data Analysis"],
      link: "#"
    },
    {
      id: 2,
      title: "Stock Prediction Using Twitter Sentiment Analysis",
      category: "machine-learning",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      description: "Combined sentiment analysis from Twitter data with historical stock prices to predict market trends using ML algorithms.",
      tools: ["Python", "NLTK", "Machine Learning", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      id: 3,
      title: "Bodyfit Solution",
      category: "web-dev",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      description: "A responsive website for a fitness platform built with React and Bootstrap, featuring workout plans and nutrition guides.",
      tools: ["React", "Bootstrap", "JavaScript", "Responsive Design"],
      link: "#"
    },
    {
      id: 4,
      title: "Chatbot Using Flask",
      category: "nlp",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      description: "NLP-powered chatbot with a responsive UI built using Flask, JavaScript, and natural language processing techniques.",
      tools: ["Flask", "Python", "NLP", "JavaScript", "HTML/CSS"],
      link: "#"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "data-analysis", name: "Data Analysis" },
    { id: "web-dev", name: "Web Development" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "nlp", name: "NLP" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            Showcasing my projects in data science and web development.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "bg-electric-blue text-white" 
                  : "bg-card hover:bg-electric-blue/20 text-gray-300"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.02]">
              {/* Project image */}
              <div className="h-64 bg-gray-800 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-electric-blue/20 to-electric-teal/20">
                    <Image size={48} className="text-gray-600" />
                    <span className="ml-2 text-gray-400">{project.title}</span>
                  </div>
                )}
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tools used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-electric-blue/10 text-electric-blue px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-1 text-electric-blue hover:underline"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Want to work together? Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
