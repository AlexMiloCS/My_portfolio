import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../../../components/Icons';
import { projects } from '../../../data/projects';

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Back Navigation */}
        <nav>
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-yellow-400 transition-colors group">
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </nav>

        {/* Project Header */}
        <header className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-slate-800 ${project.imagePlaceholder}`}>
              {project.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm font-medium text-yellow-400 bg-yellow-950/40 border border-yellow-900/50 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <section className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed">
          <p className="text-xl text-slate-300 mb-8 font-light">
            {project.description}
          </p>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12 shadow-inner">
            <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
            <p>
              {project.fullDescription}
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-slate-800/80">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 font-semibold text-slate-900 bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-900/20">
              <GithubIcon className="w-5 h-5 mr-2" />
              View Repository
            </a>
          )}
        </section>

      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
