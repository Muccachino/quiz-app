import { useState } from "react";
import { IQuestion } from "../ts/interfaces/globalInterfaces";
import QuestionContext from "../ts/QuestionContext";


interface Props {
  children: React.ReactNode;
}

export default function QuestionsProvider({ children }: Props) {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  return (
    <QuestionContext.Provider value={[questions, setQuestions]}>
      {children}
    </QuestionContext.Provider>
  );
}