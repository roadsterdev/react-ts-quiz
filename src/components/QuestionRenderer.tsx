import React from "react";

import { useQuizContext } from "../context/QuizContext";

import SelectSexQuestion from "./questions/SelectSexQuestion";
import SingleVariantQuestion from "./questions/SingleVariantQuestion";
import CustomInputQuestion from "./questions/CustomInputQuestion";
import FinalQuestion from "./questions/FinalQuestion";

import { questions } from "../data/questions";

const QuestionRenderer: React.FC = () => {
  const { currentIndex } = useQuizContext();

  const question = questions[currentIndex];

  switch (question.type) {
    case "select-sex":
      return (
        <SelectSexQuestion
          question={question.question}
          options={question.options || []}
        />
      );
    case "single-variant":
      return (
        <SingleVariantQuestion
          question={question.question}
          options={question.options || []}
        />
      );
    case "custom-input":
      return <CustomInputQuestion question={question.question} />;
    case "final":
      return <FinalQuestion question={question.question} />;
    default:
      return null;
  }
};

export default QuestionRenderer;
