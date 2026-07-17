"use client";
import React, { useState } from 'react';

export default function ContactCard({ href, icon, title, subtitle, onClick }) {
  const [copied, setCopied] = useState(false);
  const isMailTo = href?.startsWith('mailto:');

  const handleClick = async (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
      return;
    }
    
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
    <a 
      href={href || "#"}
      onClick={handleClick}
      target={isMailTo || onClick ? undefined : "_blank"}
      rel={isMailTo || onClick ? undefined : "noopener noreferrer"}
      className="group flex flex-col items-center justify-center p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-yellow-400/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.15)] hover:-translate-y-1 cursor-pointer relative"
    >
      <div className="mb-6 p-4 bg-slate-950 rounded-full border border-slate-800 group-hover:scale-110 transition-transform duration-500 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      <p className={`text-sm transition-colors duration-300 ${copied ? 'text-green-400 font-medium' : 'text-slate-400'}`}>
        {copied ? 'Copied to clipboard!' : subtitle}
      </p>
    </a>
  );
}
