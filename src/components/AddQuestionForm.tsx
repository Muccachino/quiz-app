import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Checkbox } from "@mui/material"
import { QuestionInput } from "../ts/interfaces/globalInterfaces"
import { useForm } from "react-hook-form"

interface Props {
    open: boolean;
    question?: QuestionInput
    onSave: (question: QuestionInput) => void;
    onClose: () => void;

}

export default function AddQuestionsForm ({open, question, onClose, onSave}: Props) {
    const {register, handleSubmit} = useForm<QuestionInput>({defaultValues: question})


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
                Add Question
            </DialogTitle>
            <form onSubmit={handleSubmit(onSave)}>
                <DialogContent>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`question`)}
                        label="Question"/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${0}.answer`)}
                        label="Answer 1"/>
                        <Checkbox title="Correct?" {...register(`answers.${0}.correct`)}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${1}.answer`)}
                        label="Answer 2"/>
                        <Checkbox title="Correct?" {...register(`answers.${1}.correct`)}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${2}.answer`)}
                        label="Answer 3"/>
                        <Checkbox title="Correct?" {...register(`answers.${2}.correct`)}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${3}.answer`)}
                        label="Answer 4"/>
                        <Checkbox title="Correct?" {...register(`answers.${3}.correct`)}/>
                    </div>
                    <DialogActions>
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                        <Button color="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    )
}