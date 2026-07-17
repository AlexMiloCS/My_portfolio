"use client";
import { useState } from 'react';

export default function SocialLink({ href, icon, label }) {
  const [copied, setCopied] = useState(false);
  const isMailTo = href?.startsWith('mailto:');

  const handleClick = async (e) => {
    if (isMailTo) {
      e.preventDefault();
      const email = href.replace('mailto:', '');
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    }
  };

  return (
    <div className="relative group/social">
      <a 
        href={href} 
        onClick={handleClick}
        aria-label={label}
        target={isMailTo ? undefined : "_blank"}
        rel={isMailTo ? undefined : "noopener noreferrer"}
        className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-orange-400/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(251,146,60,0.3)] transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
      >
        {icon}
      </a>
      
      {/* Tooltip for Copy Action */}
      {isMailTo && (
        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded border border-slate-700 shadow-lg pointer-events-none transition-all duration-300 ${copied ? 'opacity-100 text-green-400 -translate-y-2' : 'opacity-0 text-slate-300 group-hover/social:opacity-100 group-hover/social:-translate-y-1'}`}>
          {copied ? 'Copied!' : 'Copy Email'}
        </div>
      )}
    </div>
  );
}
