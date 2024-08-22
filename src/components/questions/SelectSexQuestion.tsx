import React from "react";
import clsx from "clsx";

import { useQuizContext } from "../../context/QuizContext";

import QuestionLayout from "../QuestionLayout";

interface SelectSexQuestionProps {
  question: string;
  options: string[];
}

const SelectSexQuestion: React.FC<SelectSexQuestionProps> = ({
  question,
  options,
}) => {
  const { currentIndex, answers, handleAnswer } = useQuizContext();

  const selectedOption = answers.find(
    (ans) => ans.questionId === currentIndex + 1
  )?.answer;

  return (
    <QuestionLayout question={question}>
      <div className="flex flex-col gap-4">
        <p className="text-gray text-lg">Please select your sex</p>
        <div className="flex gap-4">
          {options.map((option) => (
            <div
              key={option}
              className={clsx(
                "flex items-center justify-center",
                "flex-1 rounded-md cursor-pointer min-h-60",
                "border border-blue-100 hover:border-blue-0 hover:text-blue-0",
                selectedOption === option && "border-blue-0 text-blue-0"
              )}
              onClick={() => handleAnswer(option)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </QuestionLayout>
  );
};

export default SelectSexQuestion;
