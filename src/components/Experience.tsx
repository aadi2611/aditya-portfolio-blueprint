
import { Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">Work Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            My professional journey in the world of data science and web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-electric-blue to-electric-teal"></div>
            
            <div className="p-8 sm:p-10 relative">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Associate Analyst Intern</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="text-electric-teal font-medium">Fx Analytica</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">Lucknow, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                  <Calendar size={14} />
                  <span>November 2023 - February 2024 (4 months)</span>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="space-y-2">
                  <h4 className="text-electric-blue font-medium">Responsibilities & Achievements</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>
                      Gathered and analyzed large datasets to identify trends and patterns using 
                      Python, NumPy, and Pandas.
                    </li>
                    <li>
                      Created interactive dashboards using Power BI to visualize complex data 
                      and provide actionable insights for stakeholders.
                    </li>
                    <li>
                      Developed and maintained data pipelines for efficient data processing and 
                      analysis workflows.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to understand business requirements 
                      and translate them into analytical solutions.
                    </li>
                    <li>
                      Applied statistical methods and data visualization techniques to support 
                      decision-making processes.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-electric-teal font-medium">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-muted px-3 py-1 rounded-full text-sm">Data Analysis</span>
                    <span className="bg-muted px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-muted px-3 py-1 rounded-full text-sm">Power BI</span>
                    <span className="bg-muted px-3 py-1 rounded-full text-sm">Data Visualization</span>
                    <span className="bg-muted px-3 py-1 rounded-full text-sm">Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <p className="text-gray-400 italic">
              Currently focused on enhancing my skills through academic projects and seeking new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
