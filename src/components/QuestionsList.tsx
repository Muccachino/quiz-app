import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import useQuestions from './useQuestions';
import AnswerListItem from './AnswerListItem';
import { useEffect, useState } from 'react';
import { IAnswer, IQuestion } from '../ts/interfaces/globalInterfaces';
import ResultForm from './ResultForm';
import EditQuestions from './EditQuestions';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function QuestionsList() {
  const [questions, changeQuestions] = useQuestions()
  const [allCorrect, setAllCorrect] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(prevVisible =>  !prevVisible)
  }

  const setSelectedAnswer = (answerList: IAnswer[]) => {
    const updatedQuestions: IQuestion[] = questions?.map((question: IQuestion) => {
      return {
        ...question,
        answers: question.answers.map((oldAnswer: IAnswer) => 
          answerList.find((newAnswer: IAnswer) => newAnswer.answer === oldAnswer.answer) || oldAnswer
        )
      }
    })

    changeQuestions(updatedQuestions)

  }

  useEffect(() => {
    let newCounter = 0;
    questions?.map(question => {
      question.answers.map(answer => {
        if (answer.correct && answer.selected) {
          newCounter += 1
    }})
    })
    setAllCorrect(newCounter);
  }, [questions])



  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        {isVisible &&
        <Grid item xs={12} md={6}>
          <Demo>
          {questions?.map((item) => {
                return(
                  <div key={item.id}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        {item.question}
                    </Typography>
                    <AnswerListItem answers={item.answers} setSelectedAnswer={setSelectedAnswer}/>
                  </div>
                )
            })}
          <Button sx={{border: "1px solid black"}} onClick={toggleVisibility}>Submit</Button>
          </Demo>
        </Grid>}
      {!isVisible && <ResultForm correctAnswers={allCorrect} amountQuestions={questions.length}/>}
      <EditQuestions/>
    </Box>
  );
}