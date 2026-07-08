export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  concept: string; // The subconcept tested, useful for weak topic analysis
}

export interface KeyConcept {
  term: string;
  definition: string;
}

export interface StudySummary {
  title: string;
  overview: string;
  keyConcepts: KeyConcept[];
  fullMarkdown: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  subject: string;
  memorized: boolean;
}

export interface StudyPlanSession {
  day: string;
  topic: string;
  method: string;
  durationMinutes: number;
}

export interface PracticeExamQuestion {
  id: string;
  question: string;
  type: 'scenario' | 'conceptual' | 'critical-thinking';
  hint: string;
  rubric: string;
}

export interface StudyKit {
  notesText: string;
  title: string;
  summary: StudySummary;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
  studyPlan: StudyPlanSession[];
  practiceExam: PracticeExamQuestion[];
}

export interface WeakConcept {
  concept: string;
  timesMissed: number;
  subject: string;
  recommendation: string;
}

export interface UserStudyStats {
  streakDays: number;
  lastStudyDate: string;
  completedQuizzesCount: number;
  completedFlashcardsCount: number;
  overallScorePercent: number;
  subjectProgress: {
    name: string;
    completedHours: number;
    totalHours: number;
    color: string;
  }[];
  weakConcepts: WeakConcept[];
}
