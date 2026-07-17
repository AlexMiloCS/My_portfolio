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
          <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md mt-12 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Copyright */}
              <div className="text-sm text-slate-500 w-full md:w-1/3 text-center md:text-left">
                &copy; {new Date().getFullYear()} Alexandros Milonakis
              </div>
              
              {/* Center: Tech Stack */}
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 text-xs text-slate-500 gap-1">
                <p>
                  Built with <span className="text-slate-300">Next.js</span> & <span className="text-yellow-400">Tailwind</span>
                </p>
                <a 
                  href="https://github.com/AlexMiloCS/My_portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  View Source
                </a>
              </div>
              
              {/* Right Side: Social Icons */}
              <div className="flex items-center justify-center md:justify-end space-x-4 w-full md:w-1/3">
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
