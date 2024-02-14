import { useEffect, useContext } from "react";
import { IQuestion } from "../ts/interfaces/globalInterfaces";
import QuestionContext from "../ts/QuestionContext";

export default function useQuestions() {
    const [questions, setQuestions] = useContext(QuestionContext);

    useEffect(() => {
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        const connect = async () => {
          try {
            const data = await fetch("http://localhost:5000/allQuestions", options);
            if (!data.ok) {
              throw new Error("Sorry, we couldn't connect to our server!");
            }
            setQuestions((await data.json()) as IQuestion[]);
          } catch (error) {
            console.log("Fail");
          }
        };
        connect();
      }, [setQuestions]);


      const changeQuestions = (updatedQuestions: IQuestion[]) => {
        setQuestions(updatedQuestions)
      }

      return [questions, changeQuestions];
}