
import { useState, useEffect } from "react";
import { Mail, Phone, Github, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const { toast } = useToast();
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("UN9KAqxfGnaP4-iz1"); // Public Key
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_it34s2t", // Service ID
        "template_27blmue", // Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        }
      );
      
      console.log("Email successfully sent!", result);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message sent!",
        description: "Your message has been successfully sent. I'll get back to you soon.",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Message failed to send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
      setSubmitMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">Get in Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 p-3 rounded-full">
                    <Mail size={24} className="text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <a href="mailto:singhaditya.avi@gmail.com" className="text-electric-blue hover:underline">
                      singhaditya.avi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-electric-teal/10 p-3 rounded-full">
                    <Phone size={24} className="text-electric-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <a href="tel:+918175807268" className="text-electric-teal hover:underline">
                      +91 8175807268
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Github size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                      github.com/adityasingh
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {/* Social media icons would go here */}
                  <a href="#" className="bg-card p-2 rounded-full hover:bg-electric-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-card p-2 rounded-full hover:bg-electric-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 bg-gradient-to-br from-electric-blue/20 to-transparent border border-electric-blue/30">
              <h3 className="text-xl font-semibold mb-4">Let's work together!</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and potential job opportunities. 
                If you have a project that needs my expertise, don't hesitate to reach out.
              </p>
            </div>
          </div>
          
          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-electric-blue/20 border border-electric-blue/30 rounded-md">
                  <p className="text-electric-blue">{submitMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-muted border border-muted-foreground/20 focus:border-electric-blue outline-none text-gray-100"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-muted border border-muted-foreground/20 focus:border-electric-blue outline-none text-gray-100"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-muted border border-muted-foreground/20 focus:border-electric-blue outline-none text-gray-100"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
