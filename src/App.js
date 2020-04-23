import React, { useState } from 'react'
import TodoList from './components/TodoList'

const App = () => {
	const todoItems = [
		{
			id: 0,
			title: 'Walk the dog'
		},
		{
			id: 1,
			title: 'Feed the dog'
		},
		{
			id: 2,
			title: 'Wash the dog'
		}
	]
	return <TodoList todoItems={todoItems} />
}

export default App
