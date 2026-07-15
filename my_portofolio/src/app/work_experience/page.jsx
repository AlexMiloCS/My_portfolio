import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ExperienceCard from '../../components/ExperienceCard';

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
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
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <p className="text-xl text-slate-400 max-w-4xl leading-relaxed pt-4">
              A detailed timeline of my professional journey in software engineering, operations, and IT support.
            </p>
          </div>

          <div className="max-w-4xl space-y-8 ml-2 md:ml-4 pt-8">
            <ExperienceCard 
              title="Ontovisual"
              role="Software Engineering Intern"
              date="May 2026 – June 2026"
              location="On-Site / Ioannina, Epirus, Greece"
              responsibilities={[
                "Architected an automated typesetting engine utilizing Shape Grammars and Guillotine Partitioning algorithms to deterministically map generative AI outputs into pixel-perfect, magazine-style UI pages.",
                "Designed structured prompt architectures to constrain LLM outputs into strictly formatted JSON payloads, seamlessly integrating with a custom client-side validation schema.",
                "Engineered a fault-tolerant deserialization pipeline with dynamic overflow and look-ahead buffer logic to translate serialized AI object states into continuous, multi-page component layouts.",
                "Developed adaptive typography guardrails to resolve Greek text-wrapping collisions, automatically truncating text in edit mode to guarantee zero element overlaps."
              ]}
              tags={["React.js", "Shape Grammars", "LLMs", "JSON", "Craft.js"]}
              story="My time at Ontovisual was a deep dive into the intersection of generative AI and deterministic UI design. The core challenge was taming the unpredictable outputs of LLMs to fit into strict, magazine-style layouts. I architected an automated typesetting engine using algorithms like Shape Grammars and Guillotine Partitioning to ensure that AI-generated content was mapped into pixel-perfect pages. One of my proudest achievements was developing adaptive typography guardrails—a system that gracefully handled Greek text-wrapping collisions, ensuring that no matter what the AI generated, the UI elements would never overlap."
            />
            <ExperienceCard 
              title="PanCar Rentals"
              role="Customer Service & Fleet Management"
              date="2015 – 2022"
              location="Chania, Crete, Greece"
              responsibilities={[
                "As an active member of the family business, I progressively took on greater responsibilities, transitioning from vehicle preparation and basic maintenance checks (fluid levels, tire pressure) to direct customer service roles.",
                "Managed the direct delivery of vehicles and briefed customers on basic vehicle operations, ensuring client familiarization and high satisfaction.",
                "Responsible for issuing rental contracts and occasionally assisting with payment processing (cash, POS) as needed during vehicle pick-ups and drop-offs.",
                "Demonstrated strong resilience and efficiency by working highly demanding hours during the peak summer tourist season, consistently maintaining top-tier service quality."
              ]}
              tags={["Customer Success", "Fleet Management", "Operations", "Logistics"]}
              story="Growing up in a family business taught me the fundamentals of operations and resilience from a young age. At PanCar Rentals, I started with the basics—vehicle prep and maintenance—and progressively moved into direct customer-facing roles. During the peak summer tourist seasons in Crete, the demand was relentless. Managing fleet logistics, issuing contracts, and briefing customers in a high-pressure environment honed my ability to stay calm, communicate clearly, and ensure every client walked away with a smile and a clear understanding of their rental."
            />
            <ExperienceCard 
              title="University of Ioannina Radio Station"
              role="Event Coordinator & IT Support"
              date="2017 – 2021"
              location="Ioannina, Epirus, Greece"
              responsibilities={[
                "Served as a core coordinator for the station's annual festival (Raspi) and numerous other events, attracting hundreds of attendees and managing logistics.",
                "Maintained and updated the station's digital infrastructure and website content, ensuring high uptime and accessibility for listeners.",
                "Provided technical support and organized equipment setups alongside cross-functional teams to ensure the smooth execution of live music festivals."
              ]}
              tags={["Event Coordination", "IT Support", "Cross-functional Teams", "Web Administration"]}
              story="Volunteering at the University's Radio Station was an incredible exercise in balancing technical infrastructure with human coordination. On the technical side, I maintained our digital presence and ensured the website remained highly accessible for our listeners. On the ground, I served as a core coordinator for our annual Raspi festival. Organizing live music setups, managing cross-functional teams, and handling the logistics for hundreds of attendees taught me how to bridge the gap between IT support and real-world event management."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
