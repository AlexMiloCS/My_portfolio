import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ExperienceCard from '../../components/ExperienceCard';

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Work Experience</span>
        </nav>

        {/* EXPERIENCE */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Work Experience
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            <p className="text-xl text-slate-400 max-w-4xl leading-relaxed pt-4">
              A detailed timeline of my professional journey in software engineering, operations, and IT support.
            </p>
          </div>

          <div className="max-w-4xl space-y-8 ml-2 md:ml-4 pt-8">
            <ExperienceCard 
              title="Ontovisual"
              role="Software Engineering Intern"
              date="May 2026 – June 2026"
              location="On-Site / Ioannina, Greece"
              responsibilities={[
                "Architected an automated typesetting engine utilizing Shape Grammars and Guillotine Partitioning algorithms to deterministically map generative AI outputs into pixel-perfect, magazine-style UI pages.",
                "Designed structured prompt architectures to constrain LLM outputs into strictly formatted JSON payloads, seamlessly integrating with a custom client-side validation schema.",
                "Engineered a fault-tolerant deserialization pipeline with dynamic overflow and look-ahead buffer logic to translate serialized AI object states into continuous, multi-page component layouts.",
                "Developed adaptive typography guardrails to resolve Greek text-wrapping collisions, automatically truncating text in edit mode to guarantee zero element overlaps."
              ]}
            />
            <ExperienceCard 
              title="PanCar Rentals"
              role="Fleet Operations & Client Service"
              date="2018 – 2022"
              location="Chania, Crete"
              responsibilities={[
                "Utilized strategic communication to de-escalate and resolve last-minute scheduling conflicts under strict time constraints, maintaining high customer satisfaction across 5 consecutive seasons.",
                "Demonstrated rapid adaptability in a fast-paced operational hub by onboarding new seasonal staff and adjusting fleet logistics to meet shifting daily demands."
              ]}
            />
            <ExperienceCard 
              title="University of Ioannina Radio Club"
              role="IT Support & Web Administrator"
              date="2017 – 2021"
              location="Ioannina, Greece"
              responsibilities={[
                "Fostered effective teamwork by coordinating technical setups and logistics alongside cross-functional teams to deliver successful live music festivals and university seminars.",
                "Maintained and updated the station’s digital infrastructure and website content, ensuring high uptime and accessibility for listeners."
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
