import React, { useState, useEffect } from "react";
import { Upload, FileText, ChevronRight, Sparkles, Check, CheckCircle2, RefreshCw, Layers, BrainCircuit, Play, ArrowRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { StudyKit } from "../types";
import { BIOLOGY_STUDY_KIT, CS_STUDY_KIT, HISTORY_STUDY_KIT } from "../demoData";

interface LandingHeroProps {
  setView: (view: 'landing' | 'app') => void;
  onSetGeneratedKit: (kit: StudyKit) => void;
}

export default function LandingHero({ setView, onSetGeneratedKit }: LandingHeroProps) {
  const [inputText, setInputText] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [simulatedResult, setSimulatedResult] = useState<StudyKit | null>(null);
  
  // Interactive mini preview state
  const [activeTab, setActiveTab] = useState<'concepts' | 'quiz' | 'cards'>('concepts');
  const [quizAnsweredIndex, setQuizAnsweredIndex] = useState<number | null>(null);
  const [cardFlipped, setCardFlipped] = useState(false);

  const processingSteps = [
    "Reading notes structure & vocabulary...",
    "Extracting critical academic concepts...",
    "Structuring comprehensive key-term glossaries...",
    "Drafting interactive recall quiz modules...",
    "Generating study schedules & weakness guides...",
    "Finalizing customized Ivy-grade study deck!"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isProcessing) {
      if (processingStep < processingSteps.length - 1) {
        timer = setTimeout(() => {
          setProcessingStep(prev => prev + 1);
        }, 800);
      } else {
        timer = setTimeout(() => {
          setIsProcessing(false);
          // Auto route to app with the newly selected kit
          if (simulatedResult) {
            onSetGeneratedKit(simulatedResult);
            setView('app');
          }
        }, 900);
      }
    }
    return () => clearTimeout(timer);
  }, [isProcessing, processingStep, simulatedResult]);

  const handleSelectPreloaded = (sampleName: string) => {
    let kit: StudyKit;
    if (sampleName === 'Biology') {
      kit = BIOLOGY_STUDY_KIT;
    } else if (sampleName === 'CS') {
      kit = CS_STUDY_KIT;
    } else {
      kit = HISTORY_STUDY_KIT;
    }
    setInputText(kit.notesText);
    setSubjectTitle(kit.title);
    setSimulatedResult(kit);
    
    // Auto trigger generation flow
    setIsProcessing(true);
    setProcessingStep(0);
  };

  const handleTriggerCustomGenerate = () => {
    if (!inputText.trim()) {
      // populate with biology first if empty
      handleSelectPreloaded('Biology');
      return;
    }

    // Prepare custom procedural fallback
    setIsProcessing(true);
    setProcessingStep(0);

    const mockupKit: StudyKit = {
      notesText: inputText,
      title: subjectTitle.trim() || "My Study Course",
      summary: {
        title: subjectTitle.trim() || "My Study Course",
        overview: "A custom overview derived from your entered study documents, isolating key themes, formulas, and methodologies.",
        keyConcepts: [
          { term: "Fundamental Concept", definition: "Primary system attribute or theorem identified in notes outline." },
          { term: "Core Catalyst", definition: "Major mechanism responsible for system-level operational transitions." },
          { term: "Operational Framework", definition: "Construct linking active theory with logical practice scenarios." }
        ],
        fullMarkdown: `### Main Concepts Analysed
- **Subject**: ${subjectTitle || "Custom Document"}
- Comprehensive analysis of parameters detailed in text.
- Focus strictly on procedural retention guides.`
      },
      quiz: [
        {
          id: "custom-q1",
          question: "Based on the uploaded concepts, which of the following is correct regarding the primary mechanism?",
          options: [
            "It is completely static with no external dependency.",
            "It relies on the dynamic interaction of key concept catalysts.",
            "It is discarded in standard operational testing environments.",
            "It increases processing overhead by 400% without adding value."
          ],
          correctAnswerIndex: 1,
          explanation: "The core catalyst drives standard operational transitions, verifying chemical, historical, or computer model boundaries.",
          concept: "Primary Concept"
        }
      ],
      flashcards: [
        { id: "custom-f1", front: "Primary Catalyst", back: "The underlying force producing system changes.", subject: "Custom", memorized: false },
        { id: "custom-f2", front: "System State", back: "Active configurations held securely.", subject: "Custom", memorized: false }
      ],
      studyPlan: [
        { day: "Day 1", topic: "Foundational structure mapping", method: "Active Recall", durationMinutes: 20 },
        { day: "Day 2", topic: "Self assessment quiz boards", method: "Testing", durationMinutes: 30 }
      ],
      practiceExam: [
        {
          id: "custom-ex1",
          question: "Draft an analytical hypothesis of how these structural elements would collapse under extreme operational parameters. Suggest remediation protocols.",
          type: "scenario",
          hint: "Think of resource limits or structural friction details",
          rubric: "High score answers must cite the original terms, identify potential structural failure points, and propose realistic mitigation steps."
        }
      ]
    };

    setSimulatedResult(mockupKit);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 lg:pt-20">
      
      {/* Background Decorative Mesh Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-50/40 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-[15%] w-[400px] h-[200px] bg-blue-50/30 rounded-full filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Column: Copywriting */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100/60 shadow-sm animate-pulse-slow">
                <Sparkles className="h-3.5 w-3.5 fill-indigo-100" />
                Voted #1 Premium Study AI companion of 2026
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.10]">
              Upload your notes. <br />
              <span className="text-indigo-600">Ace your exams.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Calvent turns unstructured class material, textbooks, or research drafts into professional summaries, real multiple-choice quizzes, memorization flashcard desks, and custom active study guides.
            </p>

            {/* Quick-select Demo Subject Area */}
            <div className="flex flex-col space-y-3 pt-2">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans">
                Select a premium subject deck to try instantly:
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                <button
                  onClick={() => handleSelectPreloaded('Biology')}
                  className="px-3.5 py-2 border border-zinc-200/80 bg-white hover:border-emerald-200 hover:bg-emerald-50/10 text-zinc-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm pointer-events-auto"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Biology: Respiration & ATP
                </button>
                <button
                  onClick={() => handleSelectPreloaded('CS')}
                  className="px-3.5 py-2 border border-zinc-200/80 bg-white hover:border-indigo-200 hover:bg-indigo-50/10 text-zinc-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm pointer-events-auto"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  CS: APIs & Scaling
                </button>
                <button
                  onClick={() => handleSelectPreloaded('History')}
                  className="px-3.5 py-2 border border-zinc-200/80 bg-white hover:border-amber-200 hover:bg-amber-50/10 text-zinc-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm pointer-events-auto"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  History: Roman Republic
                </button>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => setView('app')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                Enter App Workspace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => {
                  const target = document.getElementById('product-preview');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold text-zinc-600 bg-white border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Watch Product Tour
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-8 pt-4 border-t border-zinc-150/60">
              <div>
                <span className="block text-2xl font-bold font-display text-zinc-900">99.2%</span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest font-sans">Exam Pass Rate</span>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div>
                <span className="block text-2xl font-bold font-display text-zinc-900">20M+</span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest font-sans">Cards Formed</span>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div>
                <span className="block text-2xl font-bold font-display text-zinc-900">4.9/5</span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest font-sans">Student Rating</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Interactive Processing & Live Preview Widget Mockup */}
          <div className="lg:col-span-6 w-full" id="product-preview">
            
            <div className="relative mx-auto max-w-lg bg-white rounded-xl border border-zinc-200/90 shadow-xl overflow-hidden study-card-border">
              
              {/* Card Titlebar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-50/85 border-b border-zinc-150/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 font-mono ml-1.5">sandbox_study_engine.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400 bg-white px-2 py-1 rounded border border-zinc-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Calvent Core</span>
                </div>
              </div>

              {/* Card Body Panel */}
              <div className="p-5 space-y-4">
                
                {/* 1. Drag & Paste Upload Form */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest font-sans flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-indigo-500" />
                      Paste notes or custom text summary:
                    </label>
                    <span className="text-[10px] font-semibold text-zinc-400/80">
                      {inputText.length} characters
                    </span>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Paste your unformatted lecture slides, textbook clip, or type outlines here to generate a complete study package..."
                      className="w-full h-32 p-3 text-xs bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-mono transition-all resize-none leading-relaxed"
                    />
                    
                    {inputText.length === 0 && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                        <Upload className="h-8 w-8 text-zinc-300 mb-2 stroke-[1.5]" />
                        <span className="text-[11px] font-medium text-zinc-400">
                          Or click a preset topic sample pill below the hero!
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Name Setting & Run Action Button */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-6">
                    <input
                      type="text"
                      placeholder="Optional Subject Title..."
                      value={subjectTitle}
                      onChange={(e) => setSubjectTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white text-zinc-800 border border-zinc-200 text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    />
                  </div>
                  <div className="sm:col-span-6">
                    <button
                      onClick={handleTriggerCustomGenerate}
                      disabled={isProcessing}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-85 text-white font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm glow-subtle group"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          Analyzing Materials...
                        </>
                      ) : (
                        <>
                          <BrainCircuit className="h-4 w-4" />
                          Transform notes with AI
                          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Subtitle separator or Processing Overlay state */}
                <AnimatePresence mode="wait">
                  {isProcessing ? (
                    <motion.div
                      key="processing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 flex flex-col space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
                          <RefreshCw className="h-3 text-indigo-500 animate-spin" />
                          Analyzing Study Materials
                        </span>
                        <span className="text-[10px] font-mono font-medium text-indigo-600">
                          {Math.round(((processingStep + 1) / processingSteps.length) * 100)}% Complete
                        </span>
                      </div>
                      
                      {/* Loading Meter */}
                      <div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-indigo-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Loading text line */}
                      <span className="text-xs text-zinc-600 font-sans italic">
                        &ldquo;{processingSteps[processingStep]}&rdquo;
                      </span>
                    </motion.div>
                  ) : simulatedResult ? (
                    
                    /* Simulated Generated interactive output block */
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 border-t border-zinc-150 pt-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-zinc-800">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span className="text-xs font-bold font-display">Generated Kit: {simulatedResult.title}</span>
                        </div>
                        <button
                          onClick={() => {
                            onSetGeneratedKit(simulatedResult);
                            setView('app');
                          }}
                          className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5"
                        >
                          View Full Screen
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Output Tabs */}
                      <div className="flex border-b border-zinc-150">
                        <button
                          onClick={() => setActiveTab('concepts')}
                          className={`flex-1 pb-2 text-center text-xs font-semibold border-b ${activeTab === 'concepts' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}
                        >
                          Summary
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('quiz');
                            setQuizAnsweredIndex(null);
                          }}
                          className={`flex-1 pb-2 text-center text-xs font-semibold border-b ${activeTab === 'quiz' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}
                        >
                          Quiz Play
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('cards');
                            setCardFlipped(false);
                          }}
                          className={`flex-1 pb-2 text-center text-xs font-semibold border-b ${activeTab === 'cards' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}
                        >
                          Flashcard
                        </button>
                      </div>

                      {/* Tab Content Panels */}
                      <div className="min-h-[140px] bg-zinc-50 border border-zinc-150 rounded-xl p-3.5">
                        {activeTab === 'concepts' && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider font-mono">Overview</span>
                            <p className="text-xs text-zinc-600 leading-normal line-clamp-2">
                              {simulatedResult.summary.overview}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1.5">
                              {simulatedResult.summary.keyConcepts.slice(0, 2).map((kc, i) => (
                                <span key={i} className="px-2 py-1 bg-white text-[10px] font-semibold text-zinc-600 border border-zinc-200 rounded-md">
                                  <strong>{kc.term}</strong>: {kc.definition.substring(0, 45)}...
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'quiz' && simulatedResult.quiz.length > 0 && (
                          <div className="space-y-3">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Quiz Mockup</span>
                            <h4 className="text-xs font-bold text-zinc-800 leading-snug">
                              {simulatedResult.quiz[0].question}
                            </h4>
                            
                            <div className="grid grid-cols-1 gap-1.5">
                              {simulatedResult.quiz[0].options.map((opt, i) => {
                                const isCorrect = i === simulatedResult.quiz[0].correctAnswerIndex;
                                const isChosen = i === quizAnsweredIndex;
                                
                                let optionStyle = "bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-700";
                                if (quizAnsweredIndex !== null) {
                                  if (isCorrect) optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-800";
                                  else if (isChosen) optionStyle = "bg-rose-50 border-rose-300 text-rose-800";
                                  else optionStyle = "opacity-45 bg-white border-zinc-200 text-zinc-400";
                                }

                                return (
                                  <button
                                    key={i}
                                    disabled={quizAnsweredIndex !== null}
                                    onClick={() => setQuizAnsweredIndex(i)}
                                    className={`w-full text-left px-3 py-1.5 border rounded-lg text-[11px] font-semibold transition-all ${optionStyle}`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                            
                            {quizAnsweredIndex !== null && (
                              <p className="text-[10px] text-zinc-500 leading-relaxed bg-white border border-zinc-200 p-2 rounded-lg mt-1 select-none">
                                <strong>Explanation:</strong> {simulatedResult.quiz[0].explanation}
                              </p>
                            )}
                          </div>
                        )}

                        {activeTab === 'cards' && simulatedResult.flashcards.length > 0 && (
                          <div className="flex flex-col items-center justify-center h-28">
                            <div
                              onClick={() => setCardFlipped(!cardFlipped)}
                              className="w-full max-w-sm h-24 bg-white border border-zinc-200 rounded-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:border-indigo-300 transition-all shadow-sm group select-none relative"
                            >
                              <div className="absolute top-1.5 right-2 px-1.5 py-0.5 bg-zinc-100 text-[8px] rounded font-mono text-zinc-400 font-bold uppercase group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                click to flip
                              </div>
                              <AnimatePresence mode="wait">
                                {!cardFlipped ? (
                                  <motion.div
                                    key="front"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    className="flex flex-col space-y-1"
                                  >
                                    <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Question Term</span>
                                    <span className="text-xs font-bold text-zinc-800">{simulatedResult.flashcards[0].front}</span>
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    key="back"
                                    initial={{ opacity: 0, rotateY: -90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: 90 }}
                                    className="flex flex-col space-y-1"
                                  >
                                    <span className="text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Definition</span>
                                    <span className="text-[11px] font-medium text-zinc-700 leading-normal">{simulatedResult.flashcards[0].back}</span>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    
                  ) : (
                    
                    /* Empty prompt initial instruction banner list */
                    <div className="text-center p-6 border-2 border-dashed border-zinc-200 rounded-xl bg-zinc-50/50">
                      <Layers className="h-6 w-6 text-zinc-300 mx-auto mb-2" />
                      <span className="block text-xs font-bold text-zinc-500 mb-1">Interactive Sandbox Idle</span>
                      <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                        Type notes in the box, or click one of the preset subject buttons above to watch Calvent compile.
                      </p>
                    </div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
