import { useEffect, useContext } from "react";
import { IAnswer, IQuestion, QuestionInput } from "../ts/interfaces/globalInterfaces";
import QuestionContext from "../ts/QuestionContext";

export default function useQuestions(): [
  IQuestion[],
  (updatedQuestions: IQuestion[]) => void, 
  (deletedQuestion: IQuestion) => void, 
  (newQuestion: QuestionInput) => void,
  (editedQuestion: QuestionInput) => void,
  (editedAnswer: IAnswer) => void] {
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


      async function handleDelete(deletedQuestion: IQuestion) {
        const options = {
          method: "DELETE",
        }
        const result = await fetch(`http://localhost:5000/allQuestions/${deletedQuestion.id}`, options);
        if(result.ok) {
          setQuestions((prevQuestion) =>
          prevQuestion.filter(prevQuestion => prevQuestion.id !== deletedQuestion.id))
        }
      }

      async function handleAdd(newQuestion: QuestionInput) {
        newQuestion.id = Math.random() * 9999999
        newQuestion.answers.map(answer => answer.selected = false)

        const options = {
          method: "POST",
          body: JSON.stringify(newQuestion),
          headers: { "Content-Type": "application/json"}
        }

        const result = await fetch("http://localhost:5000/allQuestions", options);
        const data = await result.json();
        setQuestions((prevQuestion) => [...prevQuestion, data])
      }

      async function handleEdit(editedQuestion: QuestionInput) {
        const options = {
          method: "PUT",
          body: JSON.stringify(editedQuestion),
          headers: { "Content-Type": "application/json"}
        }

        const result = await fetch(`http://localhost:5000/allQuestions/${editedQuestion.id}`, options);
        const data = await result.json();
        setQuestions(prevQuestions => 
          prevQuestions?.map(prevQuestion => {
            if (prevQuestion.id === editedQuestion.id) {
              return data;
            }
            return prevQuestion
          })
        )      }


      const changeQuestions = (updatedQuestions: IQuestion[]) => {
        setQuestions(updatedQuestions)
      }

      const handleEditForm = (editedAnswer: IAnswer) => {
        setQuestions(prevQuestions => 
          prevQuestions?.map(prevQuestion => {
            prevQuestion.answers.map(prevAnswers => {
              if(prevAnswers.answer === editedAnswer.answer) {
                return editedAnswer
              }
              return prevAnswers
            })
            return prevQuestion
          })
        ) 
      }

      return [questions, changeQuestions, handleDelete, handleAdd, handleEdit, handleEditForm];
}