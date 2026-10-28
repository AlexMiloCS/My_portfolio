"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, X, Menu } from 'lucide-react';

export default function Topbar() {
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
          <NavLink href="/resume">Resume</NavLink>
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
          <Link href="/resume" onClick={() => setIsMobileMenuOpen(false)} className="relative z-10 text-2xl font-semibold tracking-wide text-slate-200 hover:text-yellow-400 transition-all active:scale-95">Resume</Link>
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
