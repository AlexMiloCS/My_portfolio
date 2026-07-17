import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SocialLink from '../components/SocialLink';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import HeroSection from '../components/home/HeroSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ProjectsSection from '../components/home/ProjectsSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans relative">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32 relative z-10">
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
      </main>

      {/* FOOTER / CONTACT */}
      <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-3">
            <h4 className="text-2xl font-bold text-white">Let's build something great.</h4>
            <div className="flex items-center justify-center md:justify-start text-slate-400 space-x-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Ioannina, Greece</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <SocialLink href="mailto:alexmilcs@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            <SocialLink href="https://github.com/AlexMiloCS" icon={<GithubIcon className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/alexandros-milonakis" icon={<LinkedinIcon className="w-5 h-5" />} label="LinkedIn" />
          </div>
        </div>
      </footer>
    </div>
  );
}


