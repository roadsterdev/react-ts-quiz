import clsx from "clsx";
import React, { useState, useEffect } from "react";

import { useQuizContext } from "../../context/QuizContext";

import QuestionLayout from "../QuestionLayout";

const CustomInputQuestion = ({ question }: { question: string }) => {
  const { currentIndex, answers, handleAnswer } = useQuizContext();

  // Retrieve the current answer from context or use an empty string
  const currentAnswer =
    answers.find(
      (ans) => ans.questionId === currentIndex + 1 // currentIndex + 1 because IDs are 1-based
    )?.answer || "";

  const [inputValue, setInputValue] = useState<string>(currentAnswer);

  useEffect(() => {
    setInputValue(currentAnswer); // Sync local state with context answer
  }, [currentAnswer]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(inputValue);
  };

  return (
    <QuestionLayout question={question}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          className="w-full border-b-4 border-blue-0 p-2 focus:outline-0"
        />
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className={clsx(
              "font-semibold text-xl py-4 px-12 rounded-md leading-none",
              inputValue === ""
                ? "bg-gray-0 text-gray-100"
                : "bg-blue-0 text-white"
            )}
            disabled={inputValue === ""}
          >
            <span>Next</span>
          </button>
        </div>
      </form>
    </QuestionLayout>
  );
};

export default CustomInputQuestion;
