import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExpertiseCard from '../components/ExpertiseCard';
import ProjectCard from '../components/ProjectCard';
import SocialLink from '../components/SocialLink';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { 
  Terminal, 
  Database, 
  BrainCircuit, 
  ArrowRight, 
  Mail, 
  ExternalLink,
  MapPin,
  Cpu,
  Code2,
  LayoutTemplate,
  Lightbulb
} from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 py-12 md:py-0">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                Alexandros Milonakis.
              </h1>
            </div>
            
            <p className="max-w-2xl text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Computer Science & Engineering graduate specializing in Machine Learning and LLM research. I combine a rigorous foundation in algorithm design with hands-on expertise to build scalable, AI-driven software solutions.
            </p>

            <div className="pt-4">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-cyan-900/30 border border-cyan-500/50 rounded-xl hover:bg-cyan-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-cyan-600 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg bg-gradient-to-r from-cyan-600/40 to-purple-600/40"></div>
                <span className="relative flex items-center space-x-2 z-10">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="/profile_picture.jpg"
                alt="Alexandros Milonakis"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* CORE EXPERTISE / ABOUT ME */}
        <section id="expertise" className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-3">01.</span> Core Expertise & Skills
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard 
              icon={<BrainCircuit className="w-8 h-8 text-cyan-400" />}
              title="Machine Learning & NLP"
              description="Python, Machine Learning, Deep Learning, AI, NLP, LLMs, BERT, NumPy, Pandas, Scikit-learn."
            />
            <ExpertiseCard 
              icon={<Code2 className="w-8 h-8 text-purple-400" />}
              title="Software Engineering"
              description="Software Development, React.js, JavaScript, HTML5, CSS, Java, C, Git, GitHub, SQL."
            />
            <ExpertiseCard 
              icon={<LayoutTemplate className="w-8 h-8 text-blue-400" />}
              title="Architecture & Layout"
              description="Computer Science, Optimization Algorithms, Computational Geometry, Space Partitioning, Prompt Engineering."
            />
            <ExpertiseCard 
              icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
              title="Soft Skills & Leadership"
              description="Team Leadership, Problem Solving, Critical Thinking, Communication, Presentations, Easily Adaptable."
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-3">02.</span> Selected Projects
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

            <ProjectCard 
              title="Food Hazard NLP Classification (SemEval-2025)"
              description="Developed an ensemble classification system (BERT, RoBERTa, SVM) to predict heavily imbalanced hazard categories from unstructured recall reports. Optimized hierarchical macro-F1 across 32 classes, outperforming classical ML baselines."
              tags={['BERT', 'RoBERTa', 'Scikit-learn', 'Classification']}
              githubLink="https://github.com/AlexMiloCS"
              liveLink="#"
              imagePlaceholder="bg-gradient-to-br from-cyan-900/40 to-slate-900"
              icon={<Database className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />}
            />
          </div>
          
          <div className="pt-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group transition-colors text-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-3">
            <h4 className="text-2xl font-bold text-white">Let's build something great.</h4>
            <div className="flex items-center justify-center md:justify-start text-slate-400 space-x-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
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


