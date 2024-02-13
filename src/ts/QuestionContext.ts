import { Dispatch, SetStateAction, createContext } from "react";
import { IQuestion } from "./interfaces/globalInterfaces";

type QuestionContextType = [IQuestion[] | null, Dispatch<SetStateAction<IQuestion[]>>];

const QuestionContext = createContext<QuestionContextType>([null, () => {}]);

export default QuestionContext;