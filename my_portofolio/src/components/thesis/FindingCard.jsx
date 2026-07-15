import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FindingCard({ title, description, href }) {
  const CardContent = (
    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-yellow-500/30 hover:bg-slate-900/60 transition-all shadow-inner group h-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm mb-4">
        {description}
      </p>
      
      {href && (
        <div className="mt-auto pt-2 flex items-center text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          View Graph <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
