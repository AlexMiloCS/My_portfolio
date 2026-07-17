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
    </div>
  );
}


