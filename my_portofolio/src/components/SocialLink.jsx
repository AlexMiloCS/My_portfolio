export default function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
