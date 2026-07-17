import React from 'react';
import Link from 'next/link';
import { ChevronRight, Cpu, ArrowRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  const academicProjects = projects.filter(p => p.category === 'academic');
  const personalProjects = projects.filter(p => p.category === 'personal');

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans pb-24">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Projects</span>
        </nav>

        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects & Research
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-4xl leading-relaxed pt-4">
            A comprehensive collection of my software engineering projects, personal initiatives, and master's research.
          </p>
        </section>

        {/* THESIS HERO SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Master's Thesis</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          <Link href="/thesis" className="group block">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Bias Measurement in LLM2Vec Embeddings
                  </h3>
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
        </section>

        {/* PERSONAL PROJECTS SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Personal Projects</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          {personalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {personalProjects.map(project => (
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
          ) : (
            <div className="p-12 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/20">
              <p className="text-slate-500 font-medium">Personal projects coming soon!</p>
            </div>
          )}
        </section>

        {/* ACADEMIC PROJECTS SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Academic Projects</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {academicProjects.map(project => (
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
        </section>

      </main>
    </div>
  );
}
