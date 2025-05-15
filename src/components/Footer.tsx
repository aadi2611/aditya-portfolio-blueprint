
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-electric-blue">A</span>ditya Singh
            </h3>
            <p className="text-gray-400">Data Scientist & Web Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500">
              &copy; {currentYear} Aditya Singh. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
