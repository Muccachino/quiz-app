export interface IAnswer {
    answer: string,
    selected: boolean,
    correct: boolean
}

export interface IQuestion {
    id: number,
    question: string,
    answers: IAnswer[]
}

export type QuestionInput = Omit<IQuestion, "id"> & {
    id?: number
}

