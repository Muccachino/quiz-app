import { Dispatch, SetStateAction, createContext } from "react";
import { IQuestion } from "./interfaces/globalInterfaces";

type QuestionContextType = [IQuestion[], Dispatch<SetStateAction<IQuestion[]>>];

const QuestionContext = createContext<QuestionContextType>([[],() => {}]);

export default QuestionContext;