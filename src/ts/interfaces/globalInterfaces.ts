export interface IQuestion {
    id: number,
    question: string,
    answers: [
        {answer: string},
        {answer: string},
        {answer: string},
        {answer: string}
    ]
}

export interface IAnswer {
    answer: string
}