import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Globe, 
  BarChart3, 
  Database, 
  Wrench, 
  Users,
  GitBranch
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-indigo-400 text-xl" />,
      skills: ["C", "Python", "Java"]
    },
    {
      title: "Databases",
      icon: <Database className="text-green-400 text-xl" />,
      skills: ["SQL", "SQLite", "MySQL", "Excel"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-blue-400 text-xl" />,
      skills: ["Git", "GitHub", "Git Bash"]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-blue-400 text-xl" />,
      skills: ["HTML", "CSS", "JavaScript", "Flask"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="text-violet-400 text-xl" />,
      skills: ["Power BI", "Matplotlib", "Seaborn"]
    },
    {
      title: "IDEs",
      icon: <Wrench className="text-orange-400 text-xl" />,
      skills: ["VS Code", "PyCharm", "Eclipse"]
    },
    {
      title: "Problem Solving",
      icon: <Users className="text-pink-400 text-xl" />,
      skills: ["DSA", "Debugging", "Logic"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-pink-400 text-xl" />,
      skills: ["Teamwork", "Communication", "Task Prioritization"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-slate-850 border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
