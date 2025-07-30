import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Peddinti Mohammad. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with passion using modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
