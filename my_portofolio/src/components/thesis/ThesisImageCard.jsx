import React from 'react';
import Image from 'next/image';

export default function ThesisImageCard({ src, alt, title, description }) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors flex flex-col h-full group">
      <div className="relative w-full h-64 md:h-80 bg-slate-950 p-4">
        <Image 
          src={src} 
          alt={alt} 
          fill
          style={{ objectFit: 'contain' }}
          className="p-2"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col border-t border-slate-800">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}
