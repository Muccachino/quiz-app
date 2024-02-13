import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import useQuestions from './useQuestions';
import AnswerListItem from './AnswerListItem';
import { useState } from 'react';
import { IAnswer, IQuestion } from '../ts/interfaces/globalInterfaces';
import ResultForm from './ResultForm';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



export default function QuestionsList() {
  const [questions, setQuestions] = useQuestions()
  const [allCorrect, setAllCorrect] = useState(0);


  const setCounter = ( answerList: IAnswer[]) => {
    let newCorrect: number = 0
    answerList.map(answer => {
      if (answer.correct && answer.selected) {
        (setQuestions as React.Dispatch<React.SetStateAction<IQuestion[]>>)((prev: IQuestion) => {
          prev.answers.map(item => {
            item.answer === answer.answer? {...item, selected: true}
          })
        }) 
      }
    })
    setAllCorrect(newCorrect)

  }


  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <Demo>
          {questions?.map((item) => {
                return(
                  <div key={item.id}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        {item.question}
                    </Typography>
                    <AnswerListItem answers={item.answers} setCounter={setCounter}/>
                  </div>
                )
            })}
          <Button sx={{border: "1px solid black"}}>Submit</Button>
          </Demo>
        </Grid>
      <ResultForm correctAnswers={allCorrect}/>
    </Box>
  );
}