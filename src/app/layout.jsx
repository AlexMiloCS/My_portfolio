import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "../components/Topbar";
import NeuralNet from "../components/NeuralNet";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { Mail } from "lucide-react";
import SocialLink from "../components/SocialLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alexandros Milonakis | AI Engineer",
  description: "Portfolio of Alexandros Milonakis, Software Engineer specializing in AI & Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-slate-950 antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200 relative">
        {/* Global Background Neural Network */}
        <div className="fixed inset-0 w-screen h-screen opacity-100 pointer-events-none z-0 overflow-hidden">
          <NeuralNet />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Topbar />
          <div className="pt-20 flex-1">
            {children}
          </div>
          
          {/* Global Footer */}
          <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md mt-12 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Side: Tech Stack & Source */}
              <div className="flex flex-col items-center md:items-start text-sm text-slate-500">
                <p>
                  Designed & Built with <span className="text-slate-300 font-medium">Next.js</span> and <span className="text-yellow-400 font-medium">Tailwind CSS</span>.
                </p>
                <a 
                  href="https://github.com/AlexMiloCS/My_portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 hover:text-indigo-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Source on GitHub
                </a>
              </div>
              
              {/* Right Side: Social Icons */}
              <div className="flex items-center space-x-6">
                <SocialLink href="mailto:alexmilcs@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                <SocialLink href="https://github.com/AlexMiloCS" icon={<GithubIcon className="w-5 h-5" />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/alexandros-milonakis-42651127a/" icon={<LinkedinIcon className="w-5 h-5" />} label="LinkedIn" />
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
