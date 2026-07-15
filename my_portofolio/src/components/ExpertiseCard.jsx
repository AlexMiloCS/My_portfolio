export default function ExpertiseCard({ icon, title, description, skills, philosophy }) {
  return (
    <div className="group relative h-[280px] w-full [perspective:1000px] cursor-pointer">
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-orange-400/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.15)] [backface-visibility:hidden] overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity transform translate-x-4 -translate-y-4 duration-500">
            {icon}
          </div>
          <div className="mb-4 inline-block p-3 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
            {icon}
          </div>
          <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
          {skills ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="group/skill flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold tracking-wide bg-slate-950/80 text-slate-300 border border-slate-800 rounded-lg shadow-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-900"
                >
                  <skill.icon size={14} color={skill.color || 'currentColor'} className="shrink-0 opacity-80 group-hover/skill:opacity-100 transition-opacity" />
                  <span className="group-hover/skill:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-300 leading-relaxed text-sm">
              {description}
            </p>
          )}
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 w-full h-full p-6 rounded-2xl bg-slate-900/90 border border-orange-500/30 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_-5px_rgba(251,146,60,0.2)]">
          <div className="mb-4 opacity-50 scale-125 text-orange-400">
            {icon}
          </div>
          <p className="text-slate-200 text-sm md:text-base italic font-medium leading-relaxed">
            "{philosophy}"
          </p>
        </div>

      </div>
    </div>
  );
}
