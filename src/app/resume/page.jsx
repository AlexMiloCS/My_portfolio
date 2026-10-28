import React from 'react';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Download, FileText } from 'lucide-react';

const CV_PATH = '/Alexandros_Mylonakis_CV.pdf';

export const metadata = {
  title: "Resume | Alexandros Mylonakis",
};

function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-yellow-400/50">
        <ExternalLink className="w-5 h-5 mr-2 text-yellow-400" />
        Open in new tab
      </a>
      <a href={CV_PATH} download="Alexandros_Mylonakis_CV.pdf" className="inline-flex items-center px-6 py-3 font-semibold text-slate-900 bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-colors hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.5)]">
        <Download className="w-5 h-5 mr-2" />
        Download PDF
      </a>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans pb-24">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">

        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Resume</span>
        </nav>

        {/* HEADER */}
        <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Resume
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          <ResumeActions />
        </section>

        {/* PDF VIEWER */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 md:p-4 shadow-2xl">
          <object
            data={CV_PATH}
            type="application/pdf"
            aria-label="Resume of Alexandros Mylonakis (PDF)"
            className="w-full h-[75vh] md:h-[85vh] rounded-2xl bg-slate-950"
          >
            {/* Fallback for browsers that cannot embed PDFs (most mobile browsers) */}
            <div className="flex flex-col items-center justify-center text-center gap-6 p-8 md:p-12 h-full">
              <div className="p-4 bg-slate-950 rounded-full border border-slate-800 shadow-inner">
                <FileText className="w-10 h-10 text-yellow-400" />
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Your browser can&apos;t display the PDF here. Open it in a new tab or download it instead.
              </p>
              <ResumeActions />
            </div>
          </object>
        </section>

      </main>
    </div>
  );
}
