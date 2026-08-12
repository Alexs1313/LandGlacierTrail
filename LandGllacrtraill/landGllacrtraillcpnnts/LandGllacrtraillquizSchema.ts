export type QuizOption = {
  optionKey: string;
  label: string;
};

export type QuizQuestion = {
  questionKey: string;
  prompt: string;
  options: QuizOption[];
  correctOptionKey: string;
  explanation: string;
};

export type QuizPhase = 'intro' | 'question' | 'results';
