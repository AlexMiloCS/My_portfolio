import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Projects</span>
        </nav>

        <section className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              All Projects
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <p className="text-xl text-slate-400 max-w-4xl leading-relaxed pt-4">
              A comprehensive collection of my software engineering and machine learning projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl pt-8">
            {projects.map(project => (
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
