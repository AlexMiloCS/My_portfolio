import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "../components/Topbar";
import NeuralNet from "../components/NeuralNet";
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
        </div>
      </body>
    </html>
  );
}
