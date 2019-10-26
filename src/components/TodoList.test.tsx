import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import { toDos } from '../App'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TodoList toDos={toDos} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
