"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function ThesisImageCard({ src, alt, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

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
        className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-yellow-500/30 hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.2)] transition-all flex flex-col h-full group cursor-pointer"
      >
        <div className="relative w-full h-64 md:h-80 bg-slate-950 p-4">
          <Image 
            src={src} 
            alt={alt} 
            fill
            style={{ objectFit: 'contain' }}
            className="p-2 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col border-t border-slate-800 relative">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm flex-1">
            {description}
          </p>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-medium bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded border border-yellow-500/20">Click to expand</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[95vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-950">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-400 line-clamp-1">{title}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            {/* Modal Image */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-8 min-h-[40vh] bg-slate-950 flex flex-col items-center justify-center">
              <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] h-[75vh]">
                <Image 
                  src={src} 
                  alt={alt} 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority={true}
                />
              </div>
            </div>
            
            {/* Modal Description */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900 max-h-[30vh] overflow-y-auto">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
