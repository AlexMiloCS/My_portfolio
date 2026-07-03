import React from 'react';
import { Cpu, ChevronRight, BookOpen, Code, Scale, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from '../../components/Icons';
import Link from 'next/link';
import FindingCard from '../../components/thesis/FindingCard';
import ThesisImageCard from '../../components/thesis/ThesisImageCard';

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans pb-24">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-white font-medium">Master's Thesis</span>
        </nav>

        {/* Hero & Abstract */}
        <section className="space-y-8">
          <div className="inline-block p-4 bg-slate-900 rounded-2xl border border-slate-800 mb-2">
            <Cpu className="w-10 h-10 text-cyan-400" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Bias Measurement in LLM2Vec Embeddings
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-400 font-medium">
              Μέτρηση προκατάληψης σε LLM2Vec αναπαραστάσεις
            </h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-4xl text-slate-400 leading-relaxed">
            <p>
              This research explores the application of LLM2Vec to transform Causal Language Models (Decoder-only LLMs) like LLaMA, Mistral, and Sheared-LLaMA into powerful text encoders. The primary objective is to evaluate how this transformation—and its specific training stages (MNTP, Unsupervised SimCSE, Supervised SimCSE)—affects the geometric structure and encoding of gender bias.
            </p>
            <p className="pt-4">
              By transitioning from traditional static models (Word2Vec) and early contextual models (BERT) to modern architectures, the thesis demonstrates that LLM2Vec enables <strong>selective encoding</strong>. These modern embeddings overcome structural limitations by learning to separate societal stereotypes from semantic utility, applying gender rationally based on context rather than polarizing neutral concepts.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {['Python', 'PyTorch', 'LLM2Vec', 'NLP', 'AI Fairness', 'PCA', 'LLaMA', 'Mistral', 'Gender Bias', 'AI Ethics', 'Text Embeddings', 'Bias Measurement', 'SimCSE', 'Large Language Models'].map(tag => (
              <span key={tag} className="px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-900/50 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-4">
            <a href="https://github.com/AlexMiloCS/LLM2Vec_Thesis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 font-semibold text-slate-900 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]">
              <GithubIcon className="w-5 h-5 mr-2" />
              View Repository
            </a>
            <a href="/thesis/Thesis_final.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
              <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
              Read Full Thesis (Greek PDF)
            </a>
          </div>
        </section>

        {/* Impact on Inclusivity */}
        <section className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5">
            <Scale className="w-64 h-64 text-cyan-400" />
          </div>
          <div className="relative z-10 space-y-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Scale className="w-6 h-6 mr-3 text-purple-400" />
              Impact on AI Fairness & Inclusivity
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              At its core, this research is driven by the need for <strong>inclusive and equitable AI systems</strong>. By rigorously quantifying how large language models internalize societal biases, we provide a mathematical framework to diagnose and mitigate stereotypic correlations. Our findings prove that through targeted alignment (like Supervised SimCSE), AI can learn to decouple gender from neutral professions, ensuring that downstream applications do not inherit or amplify human prejudices. This is a critical step toward building AI that serves diverse populations fairly.
            </p>
          </div>
        </section>

        {/* Key Findings */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-3">01.</span> Key Findings
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FindingCard 
              title="The Principle of Selective Encoding"
              description="Unlike static models (Word2Vec) that blindly polarize neutral professions, LLM2Vec models achieve optimal selective encoding. They successfully place neutral professions at the center of the geometric space while preserving a robust gender dimension only where semantically necessary (e.g., Patriarch, Firewoman)."
            />
            <FindingCard 
              title="Supervised SimCSE as the Optimal Strategy"
              description="The Supervised SimCSE training stage systematically achieves the greatest reduction in Direct Bias for neutral professions while maintaining clear semantic separation for inherently gendered words, outperforming both MNTP and Unsupervised approaches."
            />
            <FindingCard 
              title="Robustness of PCA over Single Pairs"
              description="Traditional bias metrics relying on a single definitional pair (e.g., he-she) are unstable. Distributional methods—specifically Principal Component Analysis (PCA) and Mean Difference—are highly robust, with PCA explaining over 55% of the variance in the Supervised stage."
            />
            <FindingCard 
              title="The Scaling Paradox & Pruning as Denoising"
              description="Increasing model parameters provides capacity but does not automatically reduce bias. Interestingly, model pruning (Sheared-LLaMA-1.3B) acts as a drastic denoising mechanism, eliminating weak stereotypical parameters while preserving strong semantic gender structures."
            />
            <div className="md:col-span-2">
              <FindingCard 
                title="Systematic Asymmetry (The 'Female' Deviation)"
                description="Across all evaluated architectures, there is a consistent geometric asymmetry: representations of the female gender systematically record higher Direct and Directional Bias compared to the male gender, meaning female terms deviate further from the neutral semantic axis."
              />
            </div>
          </div>
        </section>

        {/* Visualizations */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-3">02.</span> Visualizations
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <ThesisImageCard 
              src="/thesis/bias_comparison_clean.png"
              alt="Comparative bar chart of Direct Bias"
              title="Comparative Analysis of Bias across Training Stages"
              description={<><strong>Figure 6.1:</strong> Comparative bar chart of Direct Bias in Neutral Occupations across the three training stages (MNTP, Unsupervised SimCSE, Supervised SimCSE). We observe that while the Unsupervised stage (orange) often offers an improvement over MNTP (red), the Supervised strategy (blue) systematically achieves the optimal bias reduction across most models.</>}
            />
            <ThesisImageCard 
              src="/thesis/directional_bias_polarity_dot.png"
              alt="Polarity Analysis and Creation of Gender Dipole"
              title="Polarity Analysis and Creation of Gender Dipole"
              description={<><strong>Figure 7.4:</strong> Polarity Analysis and Creation of Gender Dipole (Directional Bias). The graph depicts the direction and position of the categories on the axis. BERT exhibits complete asymmetry (all points negative), whereas LLM2Vec models construct a robust semantic dipole (red on the left, blue on the right), concentrating neutral concepts (grey) very close to the absolute center (0.0).</>}
            />
            <ThesisImageCard 
              src="/thesis/Neutral Gender Bias PCA.png"
              alt="Stereotype Analysis in Neutral Sentences"
              title="Stereotype Analysis in Neutral Sentences"
              description={<><strong>Figure 7.6:</strong> Stereotype Analysis in Neutral Sentences. Dispersion of PCA values for neutral occupations. Occupations were ranked based on the average LLM scores. Overlaying the values for BERT and Word2Vec highlights the differences in stereotype encoding, as well as the common tendency of models to assign negative (female) values to specific occupations (e.g., nurse, housekeeper).</>}
            />
            <ThesisImageCard 
              src="/thesis/architecture_size_impact.png"
              alt="Impact of Size and Architecture on Gender Bias"
              title="Impact of Size and Architecture on Gender Bias"
              description={<><strong>Figure 8.1:</strong> Comparative visualization of Direct Bias (PCA) for Neutral, Male, and Female categories across models of different sizes (1.3B to 8.1B). Observations: (1) The Female category (red) consistently shows a higher value regardless of size, indicating strong encoding. (2) The Sheared-LLaMA-1.3B model achieves lower Neutral Bias than larger models (e.g., Llama-3.2), highlighting the importance of structural optimization (pruning) over the absolute number of parameters.</>}
            />
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-cyan-400 mr-3">03.</span> Architecture
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-white font-bold flex items-center mb-4"><Code className="w-5 h-5 mr-2 text-purple-400"/> Repository Structure</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><strong className="text-cyan-300">src/</strong>: Core Python modules and tools.</li>
                <li><strong className="text-cyan-300">llm2vec/</strong>: Execution notebooks utilizing LLM2Vec methodology.</li>
                <li><strong className="text-cyan-300">w2v/ & bert/</strong>: Baseline execution notebooks.</li>
                <li><strong className="text-cyan-300">tools/</strong>: Utility scripts for calculating bias and manipulating models.</li>
                <li><strong className="text-cyan-300">datasets/</strong>: Datasets containing protected attributes and professions.</li>
                <li><strong className="text-cyan-300">Results/</strong>: Generated logs, tables, and visualization plots.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-cyan-400 mr-3">04.</span> Usage
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">Install dependencies and run experiments using Jupyter notebooks.</p>
              
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                <p className="text-slate-500 mb-1"># Install dependencies</p>
                <p>pip install -r requirements.txt</p>
                <br/>
                <p className="text-slate-500 mb-1"># Run LLM2Vec encoding pipeline</p>
                <p>jupyter notebook src/llm2vec/llm2vec_run_all_models_sentences.ipynb</p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-slate-400" />
              Citation
            </h2>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-400 font-mono leading-relaxed">
{`@mastersthesis{Mylonakis2026,
  author  = {Alexandros Mylonakis},
  title   = {Bias Measurement in LLM2Vec embeddings},
  school  = {University of Ioannina, Department of Computer Science and Engineering},
  year    = {2026},
  type    = {Diploma Thesis}
}`}
            </pre>
          </div>
        </section>

      </main>
    </div>
  );
}
