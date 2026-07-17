"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, X, ExternalLink, Download } from 'lucide-react';

export default function Topbar() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 relative flex items-center justify-between md:justify-center">
        <Link href="/" className="md:absolute md:left-6 text-xl font-bold text-white tracking-tighter hover:text-yellow-400 transition-colors flex items-center">
          <span className="text-yellow-400 mr-1 italic">{'//'}</span>AM
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/work_experience">Work Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact Me</NavLink>
          <NavButton onClick={() => setIsResumeModalOpen(true)}>Resume</NavButton>
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

      {/* RESUME MODAL */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-sm w-full shadow-2xl relative">
            <button 
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Resume</h3>
            <p className="text-slate-400 text-center mb-8 text-sm">How would you like to view my resume?</p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://drive.google.com/file/d/1XNfztoPkdDrrSUt0cUpBM969LAob0hiY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsResumeModalOpen(false)}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 hover:border-yellow-400/50"
              >
                <ExternalLink className="w-5 h-5 text-yellow-400" />
                Open in Browser
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1XNfztoPkdDrrSUt0cUpBM969LAob0hiY"
                download
                onClick={() => setIsResumeModalOpen(false)}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold transition-colors"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children, ...props }) {
  return (
    <Link 
      href={href} 
      {...props}
      className="text-sm font-medium text-slate-400 hover:text-yellow-400 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function NavButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className="text-sm font-medium text-slate-400 hover:text-yellow-400 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}
