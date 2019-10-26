import React from 'react'
import './App.css'
import TodoList from './components/TodoList'

export interface IToDos {
    id: string
    task: string
    isDone: boolean
}

export const toDos: Array<IToDos> = [
    {
        id: '1',
        task: 'try Hooks 🚀',
        isDone: false,
    },
    {
        id: '2',
        task: 'try mobx-react 🚀',
        isDone: false,
    },
    {
        id: '3',
        task: 'try immer 🚀',
        isDone: false,
    },

    {
        id: '4',
        task: 'make world peace 🚀',
        isDone: false,
    },
    {
        id: '5',
        task: 'drink coffee 🚀',
        isDone: false,
    },
]

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <TodoList toDos={toDos} />
            </header>
        </div>
    )
}

export default App
