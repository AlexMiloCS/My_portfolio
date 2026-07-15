"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ExperienceCard({ title, role, date, location, responsibilities, tags = [], story }) {
  const [isOpen, setIsOpen] = useState(false);

  const locationParts = location.split(' / ');
  const workType = locationParts.length > 1 ? locationParts[0] : null;
  const actualLocation = locationParts.length > 1 ? locationParts[1] : location;

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="relative pl-8 border-l border-slate-800 hover:border-yellow-500/50 transition-colors group pb-4 cursor-pointer"
      >
        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-800 border-2 border-slate-950 rounded-full group-hover:bg-yellow-400 transition-colors shadow-[0_0_10px_0_rgba(250,204,21,0)] group-hover:shadow-[0_0_10px_0_rgba(250,204,21,0.8)]"></div>
        
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
          <span className="text-sm font-medium text-yellow-400 bg-yellow-950/40 px-3 py-1 rounded-full w-fit md:ml-4 border border-yellow-900/50">{date}</span>
        </div>
        
        <div className="flex flex-col text-slate-400 text-sm mb-4 space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
            <span className="font-semibold text-orange-400">{role}</span>
            <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>{actualLocation}</span>
          </div>
          {workType && <span className="text-slate-500 font-medium">{workType}</span>}
        </div>
        
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          {responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1.5 flex-shrink-0 text-[10px]">▶</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-medium text-yellow-400">Read full story &rarr;</span>
        </div>
      </div>

      {/* Story Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200 max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-slate-800 bg-slate-950">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <div className="flex flex-col text-slate-400 text-sm space-y-1 mt-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                    <span className="font-semibold text-orange-400">{role}</span>
                    <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
                    <span>{actualLocation}</span>
                  </div>
                  {workType && <span className="text-slate-500 font-medium">{workType}</span>}
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 space-y-6 bg-slate-900">
              {/* Tags Section */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-yellow-400 bg-yellow-950/40 px-2 py-1 rounded border border-yellow-900/50">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Story Section */}
              {story && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <span className="text-yellow-400 mr-2">/</span> My Experience
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                    {story}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
