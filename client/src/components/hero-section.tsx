import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-07-30 at 14.54.51_f5354f6d_1753895093724.jpg";

export default function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="Peddinti Mohammad - Professional Photo" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500/30 shadow-lg shadow-indigo-500/20 object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            Peddinti Mohammad
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
          Data Analyst • Web Developer
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Analytical and tech-savvy engineering student passionate about data and web 
          development. Experienced in Python, SQL, Flask, and front-end technologies. Quick 
          learner with solid DSA knowledge, team collaboration, and problem-solving skills.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center text-slate-400">
            <Mail className="w-4 h-4 mr-2" />
            <span>mohammadalam62819@gmail.com</span>
          </div>
          <div className="flex items-center text-slate-400">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 6281982193</span>
          </div>
          <div className="flex items-center text-slate-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Bengaluru, India</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="#" 
            className="text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        <Button 
          onClick={scrollToWork}
          className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
}
