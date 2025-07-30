import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "K.S. School of Engineering and Management, VTU, Bengaluru",
      period: "Expected 2026",
      status: "Current",
      statusColor: "bg-indigo-500"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Sri Vivekananda Jr. College, Anantapur",
      period: "2020 - 2022",
      status: "Completed",
      statusColor: "bg-green-500",
      grade: "78.9%"
    },
    {
      degree: "Secondary School (BSEAP)",
      institution: "Golden Bells E.M High School, Anantapur",
      period: "2018 - 2020",
      status: "Completed", 
      statusColor: "bg-green-500",
      grade: "92.6%"
    }
  ];

  const certifications = [
    {
      name: "Deloitte (Forage)",
      description: "Data Analytics Experience (Excel, Power BI)",
      type: "Professional",
      typeColor: "bg-blue-500"
    },
    {
      name: "TCS Forage",
      description: "Data Visualization Internship (Simulated Dashboards)",
      type: "Internship", 
      typeColor: "bg-indigo-500"
    },
    {
      name: "Simplilearn",
      description: "Python for Beginners (Core Python, Logic)",
      type: "Course",
      typeColor: "bg-purple-500"
    },
    {
      name: "AWS Academy", 
      description: "Cloud Developing (EC2, Lambda, S3)",
      type: "Cloud",
      typeColor: "bg-orange-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-indigo-400 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-850 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <Badge className={`${edu.statusColor} text-white text-xs`}>
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-slate-400 mb-2">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mb-3">
                      📅 {edu.period}
                    </p>
                    {edu.grade && (
                      <div className="flex items-center">
                        <span className="text-slate-400 text-sm mr-4">Grade: </span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {edu.grade}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-violet-400 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-850 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <Badge className={`${cert.typeColor} text-white text-xs`}>
                        {cert.type}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
