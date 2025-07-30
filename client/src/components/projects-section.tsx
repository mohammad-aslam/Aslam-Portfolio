import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Student Performance Monitor",
      description: "Developed a Flask + SQLite web app for tracking academic performance. Features real-time percentage calculator and Matplotlib visualization with dashboard interface for monitoring multiple students.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=250",
      technologies: ["Flask", "SQLite", "Python", "Matplotlib", "HTML/CSS"],
      category: "Web Application"
    },
    {
      title: "ASLA - E-Commerce Website", 
      description: "Responsive UI with HTML/CSS/JavaScript for product display. Integrated cart, filter, and checkout components for seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=250",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend"
    },
    {
      title: "HealthVault - Medical Cost Tracker",
      description: "Secure login using Flask-Login with personalized data tracking. Monthly insights with Chart.js for visual summaries and categorized expense logging with notes and date filters.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=250",
      technologies: ["Flask", "Chart.js", "Flask-Login", "SQLite", "JavaScript"],
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-slate-850 border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm p-0"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm p-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
