import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ 
  slug,
  title, 
  description, 
  tags, 
  githubLink, 
  imagePlaceholder,
  icon
}) {
  return (
    <div className="relative flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800 overflow-hidden group hover:border-orange-400/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.15)] hover:-translate-y-1">
      {slug && <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`View details of ${title}`} />}
      {/* Image Placeholder */}
      <div className={`h-48 w-full relative ${imagePlaceholder} border-b border-slate-800 flex items-center justify-center overflow-hidden group`}>
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
        <div className="w-16 h-16 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-xl">
           {icon}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">{title}</h4>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="relative z-10 px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-950/40 border border-yellow-900/50 rounded-full shadow-sm hover:text-orange-200 hover:bg-orange-500/20 hover:border-orange-400/50 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80 mt-auto">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <GithubIcon className="w-4 h-4 mr-2" />
              Source
            </a>
          )}
          {slug && (
            <span className="flex items-center text-sm font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
