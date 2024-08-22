import clsx from "clsx";
import React from "react";

import { useQuizContext } from "../../context/QuizContext";

import QuestionLayout from "../QuestionLayout";

interface SingleVariantQuestionProps {
  question: string;
  options: string[];
}

const SingleVariantQuestion: React.FC<SingleVariantQuestionProps> = ({
  question,
  options,
}) => {
  const { currentIndex, answers, handleAnswer } = useQuizContext();

  // Find the selected option from the answers
  const selectedOption = answers.find(
    (ans) => ans.questionId === currentIndex + 1 // currentIndex + 1 because IDs are 1-based
  )?.answer;

  return (
    <QuestionLayout question={question}>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div
            key={option}
            className={clsx(
              "flex items-center gap-2 p-4 rounded-lg cursor-pointer",
              "border border-gray hover:border-blue-100",
              selectedOption === option && "border-blue-100"
            )}
            onClick={() => handleAnswer(option)}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleAnswer(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default SingleVariantQuestion;
