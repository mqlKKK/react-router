interface state {
    todos: Array<{ id: number, completed: boolean, text: string }>
    option: string
}

export type State = state

