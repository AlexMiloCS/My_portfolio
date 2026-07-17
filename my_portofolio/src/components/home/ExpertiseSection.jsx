import React from 'react';
import ExpertiseCard from '../ExpertiseCard';
import { 
  Terminal, 
  BrainCircuit, 
  Cpu,
  Code2,
  LayoutTemplate,
  Lightbulb,
  Network,
  Users,
  MessageSquare,
  Presentation,
  CheckCircle,
  Puzzle,
  Brain,
  FileCode2,
  Binary,
  Grid
} from 'lucide-react';
import { 
  SiPython, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiHuggingface,
  SiJavascript, SiReact, SiHtml5, SiCss, SiGithub, SiPostgresql
} from '@icons-pack/react-simple-icons';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-white flex items-center">
          <span className="text-yellow-400 mr-3">01.</span> Core Expertise & Skills
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <ExpertiseCard 
          icon={<BrainCircuit className="w-8 h-8 text-cyan-400" />}
          title="Machine Learning & NLP"
          skills={[
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
            { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
            { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
            { name: 'Pandas', icon: SiPandas, color: '#93C5FD' },
            { name: 'HuggingFace', icon: SiHuggingface, color: '#FFD21E' },
            { name: 'LLMs & AI', icon: Brain, color: '#8B5CF6' },
            { name: 'Prompt Engineering', icon: Terminal, color: '#34D399' }
          ]}
          philosophy="I believe the future of AI isn't just about scaling up parameters, but intelligently refining representations to be unbiased, efficient, and robust."
        />
        <ExpertiseCard 
          icon={<Code2 className="w-8 h-8 text-purple-400" />}
          title="Software Engineering"
          skills={[
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'React.js', icon: SiReact, color: '#61DAFB' },
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss, color: '#1572B6' },
            { name: 'Java', icon: FileCode2, color: '#007396' },
            { name: 'C', icon: Binary, color: '#A8B9CC' },
            { name: 'Git & GitHub', icon: SiGithub, color: '#FFFFFF' },
            { name: 'SQL', icon: SiPostgresql, color: '#60A5FA' }
          ]}
          philosophy="I believe in writing clean, scalable code that solves real-world problems efficiently, never sacrificing readability for cleverness."
        />
        <ExpertiseCard 
          icon={<LayoutTemplate className="w-8 h-8 text-blue-400" />}
          title="Architecture & Layout"
          skills={[
            { name: 'Computer Science', icon: Network, color: '#60A5FA' },
            { name: 'Optimization Algorithms', icon: Cpu, color: '#F472B6' },
            { name: 'Space Partitioning', icon: Grid, color: '#FBBF24' },
            { name: 'Computational Geometry', icon: LayoutTemplate, color: '#A78BFA' }
          ]}
          philosophy="The beauty of Computer Science lies in taking massive, chaotic problems and breaking them down into elegant, highly-optimized systems."
        />
        <ExpertiseCard 
          icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
          title="Soft Skills & Leadership"
          skills={[
            { name: 'Team Leadership', icon: Users, color: '#FCD34D' },
            { name: 'Problem Solving', icon: Puzzle, color: '#F87171' },
            { name: 'Communication', icon: MessageSquare, color: '#6EE7B7' },
            { name: 'Presentations', icon: Presentation, color: '#93C5FD' },
            { name: 'Adaptability', icon: CheckCircle, color: '#C4B5FD' }
          ]}
          philosophy="The best code in the world means nothing if a team isn't aligned. I thrive on clear communication and turning chaotic ideas into organized execution."
        />
      </div>
    </section>
  );
}
