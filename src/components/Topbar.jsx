"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, X, ExternalLink, Download, Menu } from 'lucide-react';

export default function Topbar() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors relative z-[60]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-8 duration-300 md:hidden pt-20 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
            <div className="absolute w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] translate-y-32 translate-x-12"></div>
          </div>

          <Link href="/work_experience" onClick={() => setIsMobileMenuOpen(false)} className="relative z-10 text-2xl font-semibold tracking-wide text-slate-200 hover:text-yellow-400 transition-all active:scale-95">Work Experience</Link>
          <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="relative z-10 text-2xl font-semibold tracking-wide text-slate-200 hover:text-yellow-400 transition-all active:scale-95">Projects</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="relative z-10 text-2xl font-semibold tracking-wide text-slate-200 hover:text-yellow-400 transition-all active:scale-95">Contact Me</Link>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsResumeModalOpen(true);
            }}
            className="relative z-10 text-2xl font-semibold tracking-wide text-slate-200 hover:text-yellow-400 transition-all active:scale-95"
          >
            Resume
          </button>
        </div>
      )}

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
