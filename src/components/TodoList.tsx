import React, { useState } from 'react'
import { arrayPush } from '../utils/arrays/arrayPush'
import { arrayUpdate } from '../utils/arrays/arrayUpdate'

import { IToDos } from '../App'

import { P, Container, Input, Button } from './Typography'

const TodoList: React.FC<{ toDos: IToDos[] }> = ({ toDos }) => {
    const [todos, setTodos] = useState(toDos)
    const [todoInput, setTodoInput] = useState('')

    function handleInputChange(event: any) {
        setTodoInput(event.target.value)
    }

    function handleCrossTodo(taskId: string) {
        setTodos(
            arrayUpdate(
                todos,
                ({ id }: any) => id === taskId,
                (v: any) => ({ ...v, isDone: !v.isDone })
            )
        )
    }

    function handleAddTodo(task: string) {
        const newTask = {
            id: Math.random()
                .toString(36)
                .substring(2, 15),
            task,
            isDone: false,
        }
        setTodos(arrayPush(todos, newTask))
    }
    return (
        <>
            <Container>
                <Input
                    placeholder="add task"
                    onChange={event => handleInputChange(event)}
                />
                <Button onClick={() => handleAddTodo(todoInput)}>
                    Add Todo
                </Button>
            </Container>

            {todos.map(({ id, task, isDone }) => (
                <P
                    key={id}
                    style={
                        isDone
                            ? { textDecoration: 'line-through', opacity: 0.5 }
                            : {}
                    }
                    onClick={() => handleCrossTodo(id)}
                >
                    {task}
                </P>
            ))}
        </>
    )
}
export default TodoList
