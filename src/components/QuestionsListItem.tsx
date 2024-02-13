import { ListItem, ListItemAvatar, Avatar, ListItemText, List, Typography } from "@mui/material"
import Icon from '@mdi/react';
import { mdiAlphaA, mdiAlphaB, mdiAlphaC, mdiAlphaD } from '@mdi/js';
import { IQuestion, IAnswer} from "../ts/interfaces/globalInterfaces";
import { MouseEvent } from "react";

interface Props {
    questions: IQuestion[] | null;
}

export default function QuestionsListItem({ questions }: Props) {

const choseAnswer = (item: IAnswer) => {
    console.log(item)
}

    return(
        
            questions?.map((item) => {
                return(
                    
                    <div key={item.id}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        {item.question}
                    </Typography>
                    </div>
                    

                
                )
            })
        
    )
        }


                           {/*  <List>
                        {item.answers.map((answer: IAnswer) => {
                            return (
                                <>
                                    <ListItem sx={{cursor: "pointer"}} onClick={() => choseAnswer(answer)} key={answer.answer}>
                                        <ListItemAvatar>
                                        <Avatar>  
                                        <Icon path={mdiAlphaA} size={2} />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={answer.answer}
                                        />
                                    </ListItem>
                                </>
                            )
                        })}
                        
                    </List> */}