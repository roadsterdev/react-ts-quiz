import { ReactNode } from "react";

import { useQuizContext } from "../context/QuizContext";

import ProgressBar from "./progressBar";
import Topbar from "./topbar";
import clsx from "clsx";

interface QuestionLayoutProps {
  question: string;
  children: ReactNode;
}

const QuestionLayout = ({ question, children }: QuestionLayoutProps) => {
  const { answers, totalSteps, handlePrev } = useQuizContext();

  const currentStep = answers.length + 1;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div
      className={clsx(
        "fixed top-8 left-[calc(50%-300px)]",
        "flex flex-col gap-8 shadow-custom p-12 w-[600px] bg-white"
      )}
    >
      <Topbar
        currentStep={currentStep}
        totalSteps={totalSteps}
        handlePrev={handlePrev}
      />

      <ProgressBar progressPercentage={progressPercentage} />

      <div className="flex flex-col gap-5">
        <p className="text-blue-100 text-2xl">{question}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default QuestionLayout;
