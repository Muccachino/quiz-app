
interface Props {
    correctAnswers: number
    amountQuestions: number
}

export default function ResultForm({correctAnswers, amountQuestions}: Props) {

    return (
        <div>
            <p>{correctAnswers} correct Answers</p>
            <p>{correctAnswers / amountQuestions * 100} %</p>
        </div>
    )

}