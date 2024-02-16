import { ListItem, ListItemAvatar, Avatar, ListItemText, List } from "@mui/material"
import Icon from '@mdi/react';
import { mdiAlphaA, mdiAlphaB, mdiAlphaC, mdiAlphaD } from '@mdi/js';
import { IAnswer} from "../ts/interfaces/globalInterfaces";
import { useRef, useState } from "react";

interface Props {
    answers: IAnswer[]
    setSelectedAnswer: (answer: IAnswer[]) => void
}


export default function AnswerListItem({ answers, setSelectedAnswer }: Props) {

    const [answerList, setAnswerList] = useState(answers);
    const iconCounter = useRef(0);
    const icon = useRef("");
    const iconList = [mdiAlphaA, mdiAlphaB, mdiAlphaC, mdiAlphaD];

    const setIcons = () => {
        if (iconCounter.current === 4) iconCounter.current = 0;
        icon.current = iconList[iconCounter.current]
        iconCounter.current += 1
    }

    const clickAnswer = (answer: IAnswer) => {
        const newAnswerList1: IAnswer[] = answerList.map((item: IAnswer) => {
            item.selected = false
            return item
        })

        const newAnswerList2: IAnswer[] = newAnswerList1.map((item: IAnswer) => {
            if(item.answer === answer.answer) {
                 item.selected = !item.selected 
            }
            return item
        })
        setAnswerList(newAnswerList2)
    }

    return(
        <>
        <List>
            {answerList.map((answer: IAnswer) => {
                setIcons()
                return (
                    <ListItem sx={{cursor: "pointer"}} key={answer.answer} onClick={() => {clickAnswer(answer); setSelectedAnswer(answerList)}} className={answer.selected ? "selected" : ""}>
                        <ListItemAvatar>
                        <Avatar>
                        <Icon path={icon.current} size={2} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary={answer.answer}
                        />
                    </ListItem>
                )
            })} 

        </List>
        </>
        
    )
}


