export type QuestionType =
  | "select-sex"
  | "single-variant"
  | "custom-input"
  | "final";

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  nextQuestionId?: number | Record<string, number>;
  conditionalBlocks?: {
    showIf?: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    type: "select-sex",
    question: "What is your gender assigned at birth?",
    options: ["Male", "Female"],
    nextQuestionId: {
      Male: 3, // Skip the pregnancy question if Male is selected
      Female: 2, // Go to the pregnancy question if Female is selected
    },
  },
  {
    id: 2,
    type: "single-variant",
    question: "Are you currently pregnant?",
    options: ["Yes", "No"],
    nextQuestionId: 3, // Go to the next question regardless of the answer
    conditionalBlocks: {
      showIf: "Female",
    },
  },
  {
    id: 3,
    type: "custom-input",
    question: "Do you have any known allergies?",
    nextQuestionId: 4, // Go to the final question
  },
  {
    id: 4,
    type: "final",
    question: "You are all set!",
  },
];
