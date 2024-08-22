import React from "react";

import { useQuizContext } from "../../context/QuizContext";

import QuestionLayout from "../QuestionLayout";

interface FinalQuestionProps {
  question: string;
}

const FinalQuestion: React.FC<FinalQuestionProps> = ({ question }) => {
  const { resetQuiz } = useQuizContext();

  return (
    <QuestionLayout question={question}>
      <button
        onClick={resetQuiz}
        className="py-2 px-10 border border-gray-100 rounded-md"
      >
        Reset
      </button>
    </QuestionLayout>
  );
};

export default FinalQuestion;
