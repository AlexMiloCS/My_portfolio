export default function ExperienceCard({ title, role, date, location, responsibilities }) {
  return (
    <div className="relative pl-8 border-l border-slate-800 hover:border-cyan-500/50 transition-colors group pb-4">
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-800 border-2 border-slate-950 rounded-full group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_0_rgba(6,182,212,0)] group-hover:shadow-[0_0_10px_0_rgba(6,182,212,0.8)]"></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h4>
        <span className="text-sm font-medium text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full w-fit md:ml-4 border border-cyan-900/50">{date}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center text-slate-400 text-sm mb-4 space-y-1 sm:space-y-0 sm:space-x-3">
        <span className="font-semibold text-purple-400">{role}</span>
        <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
        <span>{location}</span>
      </div>
      
      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
        {responsibilities.map((resp, i) => (
          <li key={i} className="flex items-start">
            <span className="text-cyan-500 mr-3 mt-1.5 flex-shrink-0 text-[10px]">▶</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
