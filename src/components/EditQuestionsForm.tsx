import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Checkbox } from "@mui/material"
import { QuestionInput } from "../ts/interfaces/globalInterfaces"
import { useForm } from "react-hook-form"
import { useEffect } from "react";
import useQuestions from "./useQuestions";

interface Props {
    open: boolean;
    question?: QuestionInput
    onSave: (question: QuestionInput) => void;
    onClose: () => void;

}

export default function EditQuestionsForm ({open, question, onClose, onSave}: Props) {
    const {register, handleSubmit, reset, setValue} = useForm<QuestionInput>({defaultValues: question})
    const[,,,,,handleEditForm] = useQuestions();

    useEffect(() => {
        if(question?.id) reset(question);
    }, [question, reset])




    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
                Edit Question
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
                        <Checkbox title="Correct?" 
                            {...register(`answers.${0}.correct`)}
                            onChange={
                                (e) => {
                                    setValue(`answers.${0}.correct`, e.target.checked ? true : false);
                                handleEditForm(question!.answers[0])}} 
                            checked={question?.answers[0].correct}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${1}.answer`)}
                        label="Answer 2"/>
                        <Checkbox title="Correct?" 
                            {...register(`answers.${1}.correct`)}
                            onChange={
                                (e) => {
                                    setValue(`answers.${1}.correct`, e.target.checked ? true : false);
                                handleEditForm(question!.answers[1])}} 
                            checked={question?.answers[1].correct}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${2}.answer`)}
                        label="Answer 3"/>
                        <Checkbox title="Correct?" 
                            {...register(`answers.${2}.correct`)}
                            onChange={
                                (e) => {
                                    setValue(`answers.${2}.correct`, e.target.checked ? true : false);
                                handleEditForm(question!.answers[2])}} 
                            checked={question?.answers[2].correct}/>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <TextField
                        {...register(`answers.${3}.answer`)}
                        label="Answer 4"/>
                        <Checkbox title="Correct?" 
                            {...register(`answers.${3}.correct`)}
                            onChange={
                                (e) => {
                                    setValue(`answers.${3}.correct`, e.target.checked ? true : false);
                                handleEditForm(question!.answers[3])}} 
                            checked={question?.answers[3].correct}/>
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