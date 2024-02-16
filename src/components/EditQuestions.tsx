import { Grid, Card, CardContent, Typography, CardActions, IconButton, Fab } from "@mui/material"
import { Edit, Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import useQuestions from "./useQuestions";
import { useState } from "react";
import { IQuestion, QuestionInput } from "../ts/interfaces/globalInterfaces";
import DeleteDialog from "./DeleteDialog";
import EditQuestionsForm from "./EditQuestionsForm";
import AddQuestionsForm from "./AddQuestionForm";

export default function EditQuestions() {
    const [questions, , handleDelete, handleAdd ,handleEdit] = useQuestions()
    const [deleteDialog, setDeleteDialog] = useState<{
      open: boolean;
      question: IQuestion | null
    }>({
      open: false,
      question: null
    })
    const [formDialog, setFormDialog] = useState<{
      open: boolean;
      question?: IQuestion
    }>({open: false});
    const [addFormDialog, setAddFormDialog] = useState<{
      open: boolean;
      question?: IQuestion
    }>({open: false});

    const handleDialog = (open: boolean, question: IQuestion) => {
      if (open) {
        setDeleteDialog({open: true, question});
      } else {
        setDeleteDialog({open: false, question: null});
      }
    }
  
    const handleEditDialog = (open: boolean, question: IQuestion) => {
      if (open) {
        setFormDialog({open: true, question});
      } else {
        setFormDialog({open: false, question: undefined});
      }
    }

    const handleAddDialog = (open: boolean, question: IQuestion | undefined) => {
      if (open) {
        setAddFormDialog({open: true, question});
      } else {
        setAddFormDialog({open: false, question: undefined});
      }
    }

    return(
      <>
      <Grid item>
        {questions.map(question => {
          return (
              <Card key={question.question}>
              <CardContent>
                <Typography variant="body1" component="p">
                  {question.question}
                </Typography>
        
              </CardContent>
              <CardActions disableSpacing>
                <IconButton color="primary" aria-label="delete-movie" onClick={() => handleDialog(true, question)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="edit-movie"
                  onClick={() => handleEditDialog(true, question)}
                >
                  <Edit/>
                </IconButton>
              </CardActions>
            </Card>
          )
        })}  
        
          <Fab color="primary" onClick={() => handleAddDialog(true, undefined)}>
              <Add />
          </Fab>
      </Grid>
      <DeleteDialog 
      title="Delete Question"
      text="Do you really want to delete this question?"
      open={deleteDialog.open}
      onConfirm={(isConfirmed) => {
        if (isConfirmed && deleteDialog.question) {
          handleDelete(deleteDialog.question)
        }
        setDeleteDialog({open: false, question: null})
      }}
      >
      </DeleteDialog>
      <EditQuestionsForm 
        onSave={(question: QuestionInput) => {
          setFormDialog({open: false, question: undefined});
          handleEdit(question)
        }}
        open={formDialog.open}
        onClose={() => setFormDialog({ open: false, question: undefined})}
        question={formDialog.question}
      />
      <AddQuestionsForm
        onSave={(question: QuestionInput) => {
          setAddFormDialog({open: false, question: undefined});
          handleAdd(question)
        }}
        open={addFormDialog.open}
        onClose={() => setAddFormDialog({open: false, question: undefined})}
        question={addFormDialog.question}
      />
    </>
    )
}