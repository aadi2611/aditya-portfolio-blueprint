
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-electric-teal/20 rounded-full blur-3xl"></div>
      
      {/* Animated dots */}
      <div className="absolute top-40 right-20 w-2 h-2 bg-electric-blue rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-electric-teal rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
      
      <div className="container mx-auto container-padding">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left content */}
          <div className="w-full md:w-3/5 space-y-6 animate-fade-in">
            <h2 className="text-lg md:text-xl font-medium text-electric-blue animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animate-delay-100">
              Aditya Singh
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 animate-fade-in animate-delay-200">
              Data Scientist & Web Developer
            </h2>
            <p className="text-gray-400 max-w-lg animate-fade-in animate-delay-300">
              Turning data into insights, and code into creativity. Specialized in Python, 
              data visualization, and full-stack web development.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animate-delay-300">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Right content - Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue to-electric-teal blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric-blue/30 animate-fade-in">
                {/* Replace with actual image URL */}
                <div className="w-full h-full bg-gradient-to-br from-electric-blue/40 to-electric-teal/40 flex items-center justify-center text-white">
                  <span className="text-xl">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
