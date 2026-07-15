import React from 'react';
import Link from 'next/link';
import { Mail, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';

export default function ContactPage() {
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
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
        </section>
      </main>
    </div>
  );
}

function ContactCard({ href, icon, title, subtitle }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-yellow-400/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.15)] hover:-translate-y-1"
    >
      <div className="mb-6 p-4 bg-slate-950 rounded-full border border-slate-800 group-hover:scale-110 transition-transform duration-500 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm">
        {subtitle}
      </p>
    </a>
  );
}
