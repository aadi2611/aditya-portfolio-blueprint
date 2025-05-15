
const Services = () => {
  const services = [
    {
      title: "Data Science Solutions",
      description: "Transforming raw data into actionable insights through statistical analysis, visualization, and predictive modeling.",
      features: [
        "Data Analysis & Visualization",
        "Predictive Modeling",
        "Dashboard Development",
        "Statistical Analysis",
        "Data Cleaning & Preprocessing"
      ],
      gradient: "from-electric-blue/20 to-transparent",
      border: "border-electric-blue/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Building responsive, modern web applications with clean code and intuitive user interfaces.",
      features: [
        "Frontend Development",
        "Responsive Design",
        "React Applications",
        "API Integration",
        "Flask Web Applications"
      ],
      gradient: "from-electric-teal/20 to-transparent",
      border: "border-electric-teal/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">Services</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            Professional services I offer to help businesses leverage data and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 border ${service.border} bg-gradient-to-br ${service.gradient}`}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 text-center mb-8">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-medium mb-4 text-center">What I Offer</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-8 border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-transparent">
            <h3 className="text-2xl font-semibold text-center mb-6">Why Work With Me?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Fast Delivery</h4>
                <p className="text-gray-400 text-sm">Quick turnaround times without compromising quality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Quality First</h4>
                <p className="text-gray-400 text-sm">Meticulous attention to detail and high standards.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-electric-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Clear Communication</h4>
                <p className="text-gray-400 text-sm">Regular updates and transparent project management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
