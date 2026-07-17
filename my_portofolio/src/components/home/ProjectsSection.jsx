import React from 'react';
import Link from 'next/link';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';
import { Cpu, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
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
  );
}
