import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

import { questions } from "../data/questions";

interface Answer {
  questionId: number;
  answer: string;
}

interface QuizContextProps {
  currentIndex: number;
  answers: Answer[];
  totalSteps: number;
  handleNext: (selectedOption?: string) => void;
  handlePrev: () => void;
  resetQuiz: () => void;
  handleAnswer: (answer: string) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentIndex, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const totalSteps = useMemo(() => {
    let totalSteps = 0;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];

      // Check if the question has conditional logic
      console.log(question);
      if (question.conditionalBlocks?.showIf) {
        // Find the answer to the question that determines whether to show this question
        const relevantAnswer = answers.find(
          (ans) => ans.questionId === question.id - 1
        )?.answer;

        if (relevantAnswer !== question.conditionalBlocks.showIf) {
          continue; // Skip this question if the condition isn't met
        }
      }

      totalSteps++;
    }
    console.log(totalSteps);
    return totalSteps;
  }, [questions, answers]);

  const handleNext = (selectedOption?: string) => {
    const currentQuestion = questions[currentIndex];

    // Determine the next question ID based on the current answer or a fixed ID
    const nextQuestionId =
      typeof currentQuestion.nextQuestionId === "object"
        ? currentQuestion.nextQuestionId[selectedOption!]
        : currentQuestion.nextQuestionId;

    const nextQuestionIndex = questions.findIndex(
      (q) => q.id === nextQuestionId
    );
    setCurrentQuestion(nextQuestionIndex);
  };

  const handlePrev = () => {
    const previousAnswer = answers[answers.length - 1];
    if (!previousAnswer) return;

    const prevQuestionIndex = questions.findIndex(
      (q) => q.id === previousAnswer.questionId
    );
    setCurrentQuestion(prevQuestionIndex);
    setAnswers(answers.slice(0, -1)); // Remove the last answer
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
  };

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentIndex].id;
    setAnswers([...answers, { questionId, answer }]);
    handleNext(answer);
  };

  return (
    <QuizContext.Provider
      value={{
        currentIndex,
        answers,
        totalSteps,
        handleNext,
        handlePrev,
        resetQuiz,
        handleAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
