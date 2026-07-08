import React, { useState } from "react";
import { GraduationCap, ArrowRight, Menu, X, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentView: 'landing' | 'app';
  setView: (view: 'landing' | 'app') => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ currentView, setView, onScrollTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Product", id: "product-preview" },
    { label: "Features", id: "features-section" },
    { label: "How We Code", id: "process" },
    { label: "Pricing", id: "pricing-section" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <div 
            onClick={() => { setView('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 cursor-pointer group"
            id="nav-logo"
          >
            <div className="h-9 w-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
              <GraduationCap className="h-5 w-5 stroke-[1.75]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-zinc-950 flex items-center gap-1">
                Calvent <span className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-mono font-medium">v1.2</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          {currentView === 'landing' ? (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onScrollTo(link.id)}
                  className="font-sans text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors pointer-events-auto"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          ) : (
            <div className="hidden md:flex items-center gap-3 bg-zinc-50 border border-zinc-100 p-1 rounded-lg">
              <button 
                onClick={() => setView('landing')}
                className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-all flex items-center gap-1.5"
              >
                <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                Landing Page
              </button>
              <div className="h-4 w-[1px] bg-zinc-200"></div>
              <span className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-indigo-600 bg-white shadow-sm flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                Demo Sandbox
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setView(currentView === 'app' ? 'landing' : 'app')}
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {currentView === 'app' ? "Exit Sandbox" : "Sign in"}
            </button>
            <button
              onClick={() => setView('app')}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-950 transition-all shadow-sm gap-1.5 group font-sans"
              id="nav-get-started"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5 stroke-[2] transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Hamburguer Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {currentView === 'landing' && navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollTo(link.id);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="h-[1px] bg-zinc-100 my-2"></div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setView(currentView === 'app' ? 'landing' : 'app');
                  }}
                  className="w-full text-center px-3 py-2 text-base font-medium text-zinc-650 hover:bg-zinc-50 rounded-lg transition-colors"
                >
                  {currentView === 'app' ? "Goto Landing Page" : "Open Workspace Demo"}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setView('app');
                  }}
                  className="w-full text-center py-2.5 rounded-lg text-base font-semibold text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm transition-all"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
