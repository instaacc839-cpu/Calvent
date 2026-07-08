import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DashboardApp from "./components/DashboardApp";
import CtaSection from "./components/CtaSection";
import { StudyKit } from "./types";
import { Sparkles, ArrowRight, MousePointerClick } from "lucide-react";

export default function App() {
  // 'landing' for public website; 'app' for maximized distraction-free study workspace cockpit
  const [currentView, setView] = useState<'landing' | 'app'>('landing');
  
  // Custom generated kit loaded from the hero's upload sandbox
  const [generatedKit, setGeneratedKit] = useState<StudyKit | null>(null);

  // Smooth scrolling anchors
  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* 1. Global Responsive Navigation Header */}
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        onScrollTo={handleScrollToSection} 
      />

      {currentView === 'landing' ? (
        
        /* THE CALVENT startup website landing sequence */
        <main className="animate-fade-in">
          
          {/* Section 2: Copywriting Hero & Interactive AI Process Mockup */}
          <LandingHero 
            setView={setView} 
            onSetGeneratedKit={setGeneratedKit} 
          />

          {/* Section 5: Dynamic Dashboard Preview Section */}
          <section id="product-preview-dashboard" className="py-20 bg-white border-t border-zinc-150">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100/60 shadow-sm font-sans">
                  <Sparkles className="h-3.5 w-3.5 fill-indigo-100 animate-ping" />
                  Try live client-side sandbox
                </span>
                
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Step inside the active workspace.
                </h2>
                
                <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
                  Below is a real-time pre-loaded mockup of the central Calvent Cockpit. Click on subjects, draft responses, start focus counts, and solve interactive checks.
                </p>
                
                <div className="flex items-center justify-center gap-1.5 text-xs text-indigo-600 font-bold uppercase tracking-wide font-sans pt-1 animate-pulse">
                  <MousePointerClick className="h-4 w-4" />
                  Fully Interactive Demo Workspace Below:
                </div>
              </div>

              {/* Embed the FULL Dashboard app directly here so users can try it immediately! */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-1.5 sm:p-3 shadow-md">
                <DashboardApp 
                  initialKit={generatedKit}
                  setView={setView}
                />
              </div>

              {/* Quick Prompt CTA to move maximized */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 text-center">
                <span className="text-xs font-semibold text-zinc-500 font-sans">
                  Prefer a zero-distriction focused workspace?
                </span>
                <button
                  onClick={() => {
                    setView('app');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4.5 py-1.5 border border-zinc-900 bg-zinc-900 text-white rounded-lg text-xs font-semibold tracking-wide hover:bg-zinc-805 shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Enter Cockpit View
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          </section>

          {/* Section 3: Value Proposition Bento Grid */}
          <Features />

          {/* Section 4: Operational Process Timeline */}
          <HowItWorks />

          {/* Section 6: Pricing Tier Cards, Newsletter signups, and Modern Footer */}
          <CtaSection setView={setView} />

        </main>

      ) : (

        /* Maximize study space, free of clutter - optimized layout for long review periods */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-100">
                ● Sandbox Cockpit Session Active
              </span>
              <h1 className="font-display font-black text-2xl tracking-tight text-zinc-950 mt-1.5">
                Calvent Academic Studio
              </h1>
            </div>
            
            <button
              onClick={() => {
                setView('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-905 bg-white border border-zinc-200 px-4 py-2 rounded-lg shadow-sm hover:bg-zinc-50 transition-all cursor-pointer self-start sm:self-auto"
            >
              ← Back to marketing Landing
            </button>
          </div>

          <div className="shadow-lg border border-zinc-200 rounded-2xl">
            <DashboardApp 
              initialKit={generatedKit}
              setView={setView} 
            />
          </div>

          <div className="mt-8 text-center text-xs text-zinc-400 font-medium pb-12">
            Designed to ensure academic excellence. Calvent Studio complies with standard University Syllabus parameters.
          </div>

        </main>

      )}

    </div>
  );
}
