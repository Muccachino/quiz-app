import { Button } from "@mui/material"

interface Props {
    onStart: () => void
    onEdit: () => void
}

export default function StartPage({onStart, onEdit}: Props) {
    

    return(
        <div style={{textAlign: "center"}}>
            <Button sx={{border: "1px solid black", marginRight: "20px"}} onClick={onStart}>Start Quiz</Button>
            <Button sx={{border: "1px solid black"}} onClick={onEdit}>Edit Questions</Button>
        </div>
    )
}