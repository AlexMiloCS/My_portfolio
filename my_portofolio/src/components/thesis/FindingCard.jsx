import React from 'react';

export default function FindingCard({ title, description }) {
  return (
    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-colors shadow-inner group h-full">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
