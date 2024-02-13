
interface Props {
    correctAnswers: number
}

export default function ResultForm({correctAnswers}: Props) {


    return (
        <div>
            {correctAnswers} correct Answers
        </div>
    )

}