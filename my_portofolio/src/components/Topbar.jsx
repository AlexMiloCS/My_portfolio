import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 relative flex items-center justify-between md:justify-center">
        <Link href="/" className="md:absolute md:left-6 text-xl font-bold text-white tracking-tighter hover:text-yellow-400 transition-colors flex items-center">
          <span className="text-yellow-400 mr-1 italic">//</span>AM
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/work_experience">Work Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact Me</NavLink>
        </nav>

        <Link href="/" className="hidden md:flex md:absolute md:right-6 text-slate-400 hover:text-yellow-400 transition-colors" aria-label="Home">
          <Home className="w-5 h-5" />
        </Link>

        {/* Mobile menu toggle (placeholder for now) */}
        <button className="md:hidden text-slate-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-slate-400 hover:text-yellow-400 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
