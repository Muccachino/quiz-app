export interface IQuestion {
    id: number,
    question: string,
    answers: [
        {answer: string, selected: boolean, correct: boolean},
        {answer: string, selected: boolean, correct: boolean},
        {answer: string, selected: boolean, correct: boolean},
        {answer: string, selected: boolean, correct: boolean}
    ]
}

export interface IAnswer {
    answer: string,
    selected: boolean,
    correct: boolean
}