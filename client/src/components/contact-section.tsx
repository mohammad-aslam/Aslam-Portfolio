import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="text-indigo-400 text-xl" />,
      title: "Email",
      value: "mohammadalam62819@gmail.com",
      bgColor: "bg-indigo-500/20",
    },
    {
      icon: <Phone className="text-violet-400 text-xl" />,
      title: "Phone",
      value: "+91 6281982193",
      bgColor: "bg-violet-500/20",
    },
    {
      icon: <MapPin className="text-blue-400 text-xl" />,
      title: "Location",
      value: "Bengaluru, India",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: <Github className="text-green-400 text-xl" />,
      title: "GitHub",
      value: "peddinti-mohammad",
      bgColor: "bg-green-500/20",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <Card className="bg-slate-850 border-slate-700">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${method.bgColor} rounded-full mb-4`}
                    >
                      {method.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{method.title}</h4>
                    <p className="text-slate-400 text-sm">{method.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mohammadalam62819@gmail.com?subject=Portfolio%20Contact%20-%20Opportunity%20Discussion&body=Hi%20Peddinti%20Mohammad,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20connect.%0D%0A%0D%0ABest%20regards"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/peddinti-mohammad-571315259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="border-indigo-500 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://github.com/peddinti-mohammad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
