"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ChevronRight, FileDown, ExternalLink, Download, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import ContactCard from '../../components/ContactCard';

export default function ContactPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Contact</span>
        </nav>

        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's build something great.
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed pt-4">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </section>

        {/* CONTACT CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <ContactCard 
            href="mailto:alexmilcs@gmail.com"
            icon={<Mail className="w-8 h-8 text-yellow-400" />}
            title="Email"
            subtitle="alexmilcs@gmail.com"
          />
          <ContactCard 
            href="https://www.linkedin.com/in/alexandros-milonakis-42651127a/"
            icon={<LinkedinIcon className="w-8 h-8 text-blue-400" />}
            title="LinkedIn"
            subtitle="Let's connect professionally"
          />
          <ContactCard 
            href="https://github.com/AlexMiloCS"
            icon={<GithubIcon className="w-8 h-8 text-white" />}
            title="GitHub"
            subtitle="Check out my code"
          />
          <ContactCard 
            href="#"
            onClick={() => setIsResumeModalOpen(true)}
            icon={<FileDown className="w-8 h-8 text-slate-300 group-hover:text-yellow-400 transition-colors" />}
            title="Resume"
            subtitle="View or download"
          />
        </section>
      </main>

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
                href="/Alex_Mil_CV_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsResumeModalOpen(false)}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 hover:border-yellow-400/50"
              >
                <ExternalLink className="w-5 h-5 text-yellow-400" />
                Open in Browser
              </a>
              <a 
                href="/Alex_Mil_CV_en.pdf"
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
    </div>
  );
}


