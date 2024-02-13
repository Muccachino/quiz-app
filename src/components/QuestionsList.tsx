import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import QuestionsListItem from './QuestionsListItem';
import useQuestions from './useQuestions';
import { MouseEvent, useState } from 'react';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function InteractiveList() {
  const [questions] = useQuestions()
  const [chosenStyle, setChosenStyle] = useState("notChosen")



  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <Demo>
            <QuestionsListItem questions={questions} />            
          </Demo>
        </Grid>
    </Box>
  );
}