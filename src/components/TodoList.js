import React from 'react'
import TodoItem from './TodoItem'
import { useTodoStateContext } from './TodoStore'

const TodoList = () => {
	const { state } = useTodoStateContext()
	return (
		<ul data-testid='todo-list'>
			{state.todos && state.todos.map((todo) => <TodoItem key={todo.id} title={todo.title} />)}
		</ul>
	)
}

export default TodoList
