export default function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] hover:-translate-y-1 overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4 group-hover:scale-110 duration-500">
        {icon}
      </div>
      <div className="mb-4 inline-block p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
