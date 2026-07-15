import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExpertiseCard from '../components/ExpertiseCard';
import ProjectCard from '../components/ProjectCard';
import SocialLink from '../components/SocialLink';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { projects } from '../data/projects';
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
  Lightbulb,
  Network,
  Users,
  MessageSquare,
  Presentation,
  CheckCircle,
  Puzzle,
  Brain,
  FileCode2,
  Binary,
  Grid
} from 'lucide-react';
import { 
  SiPython, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiHuggingface,
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiGit, SiGithub, SiPostgresql
} from '@icons-pack/react-simple-icons';

export default function Portfolio() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans relative">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[85vh] gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 py-12 md:py-0 pb-20">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                Alexandros Milonakis.
              </h1>
            </div>
            
            <p className="max-w-2xl text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Computer Science & Engineering graduate specializing in Machine Learning and LLM research. I combine a rigorous foundation in algorithm design with hands-on expertise to build scalable, AI-driven software solutions.
            </p>

            <div className="pt-10 space-y-12 relative z-10">
              <div className="font-mono text-sm md:text-base text-slate-400 inline-flex items-center opacity-80">
                <span className="text-yellow-500 mr-3">{'>'}</span>
                <span>Model loaded. Parameters optimized.</span>
                <span className="inline-block w-2.5 h-4 md:h-5 bg-yellow-400 ml-2 animate-blink shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative mt-8 md:mt-0 z-10">

            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="/profile_picture.jpg" 
                alt="Alexandros Milonakis"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce pointer-events-none">
            <span className="text-[10px] text-yellow-400/80 tracking-[0.4em] uppercase mb-2 font-semibold">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </section>

        {/* CORE EXPERTISE / ABOUT ME */}
        <section id="expertise" className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="text-yellow-400 mr-3">01.</span> Core Expertise & Skills
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ExpertiseCard 
              icon={<BrainCircuit className="w-8 h-8 text-cyan-400" />}
              title="Machine Learning & NLP"
              skills={[
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
                { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
                { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
                { name: 'Pandas', icon: SiPandas, color: '#93C5FD' },
                { name: 'HuggingFace', icon: SiHuggingface, color: '#FFD21E' },
                { name: 'LLMs & AI', icon: Brain, color: '#8B5CF6' }
              ]}
              philosophy="I believe the future of AI isn't just about scaling up parameters, but intelligently refining representations to be unbiased, efficient, and robust."
            />
            <ExpertiseCard 
              icon={<Code2 className="w-8 h-8 text-purple-400" />}
              title="Software Engineering"
              skills={[
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: SiCss, color: '#1572B6' },
                { name: 'Java', icon: FileCode2, color: '#007396' },
                { name: 'C', icon: Binary, color: '#A8B9CC' },
                { name: 'Git & GitHub', icon: SiGithub, color: '#FFFFFF' },
                { name: 'SQL', icon: SiPostgresql, color: '#60A5FA' }
              ]}
              philosophy="I believe in writing clean, scalable code that solves real-world problems efficiently, never sacrificing readability for cleverness."
            />
            <ExpertiseCard 
              icon={<LayoutTemplate className="w-8 h-8 text-blue-400" />}
              title="Architecture & Layout"
              skills={[
                { name: 'Computer Science', icon: Network, color: '#60A5FA' },
                { name: 'Optimization Algorithms', icon: Cpu, color: '#F472B6' },
                { name: 'Space Partitioning', icon: Grid, color: '#FBBF24' },
                { name: 'Computational Geometry', icon: LayoutTemplate, color: '#A78BFA' },
                { name: 'Prompt Engineering', icon: Terminal, color: '#34D399' }
              ]}
              philosophy="The beauty of Computer Science lies in taking massive, chaotic problems and breaking them down into elegant, highly-optimized systems."
            />
            <ExpertiseCard 
              icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
              title="Soft Skills & Leadership"
              skills={[
                { name: 'Team Leadership', icon: Users, color: '#FCD34D' },
                { name: 'Problem Solving', icon: Puzzle, color: '#F87171' },
                { name: 'Communication', icon: MessageSquare, color: '#6EE7B7' },
                { name: 'Presentations', icon: Presentation, color: '#93C5FD' },
                { name: 'Adaptability', icon: CheckCircle, color: '#C4B5FD' }
              ]}
              philosophy="The best code in the world means nothing if a team isn't aligned. I thrive on clear communication and turning chaotic ideas into organized execution."
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="text-yellow-400 mr-3">02.</span> Featured Projects & Research
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>

          <Link href="/thesis" className="group block mb-12 mt-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12 hover:border-yellow-400/50 hover:bg-slate-900/60 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.15)]">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <Cpu className="w-16 h-16 text-yellow-400" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-medium">
                    Master's Thesis
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Bias Measurement in LLM2Vec Embeddings
                  </h4>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                    Evaluating how the transformation of Causal Language Models into text encoders via LLM2Vec impacts the geometric structure and encoding of gender bias.
                  </p>
                  <div className="pt-4 flex items-center text-yellow-400 font-medium">
                    Explore Research Summary <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {projects.filter(p => p.featured).map(project => (
              <ProjectCard 
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubLink={project.githubLink}
                imagePlaceholder={project.imagePlaceholder}
                icon={project.icon}
              />
            ))}
          </div>
          
          <div className="pt-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold group transition-colors text-lg"
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


