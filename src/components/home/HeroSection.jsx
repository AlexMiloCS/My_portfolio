import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[85vh] gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 py-12 md:py-0 pb-20">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Alexandros Milonakis.
          </h1>
        </div>
        
        <p className="max-w-2xl text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
          Computer Science & Engineering graduate specializing in Machine Learning and LLM research. I combine a rigorous foundation in algorithm design with hands-on expertise to build scalable, AI-driven software solutions.
        </p>

        <div className="pt-10 space-y-12 relative z-10">
          <div className="font-mono text-sm md:text-base text-slate-400 inline-flex items-center opacity-80">
            <span className="text-yellow-500 mr-3">{'>'}</span>
            <span>Model loaded. Parameters optimized.</span>
            <span className="inline-block w-2.5 h-4 md:h-5 bg-yellow-400 ml-2 animate-blink shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative mt-8 md:mt-0 z-10">
        <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
          <Image
            src="https://res.cloudinary.com/zfs5luyr/image/upload/v1784297410/profile_picture_w38zof.jpg" 
            alt="Alexandros Milonakis"
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce pointer-events-none">
        <span className="text-[10px] text-yellow-400/80 tracking-[0.4em] uppercase mb-2 font-semibold">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
