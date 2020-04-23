import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const initialState = {
	todos: [
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
}

function TodoProvider({ children }) {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	return (
		<TodoStateContext.Provider value={{ state }}>
			<TodoDispatchContext.Provider value={{ dispatch }}>{children}</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	)
}

TodoProvider.propTypes = {
	children: PropTypes.object
}

function useTodoStateContext() {
	const context = useContext(TodoStateContext)
	if (context === undefined) {
		throw new Error('useTodoDispatchContext must be used within a TodoProvider')
	}
	return context
}

function useTodoDispatchContext() {
	const context = useContext(TodoDispatchContext)
	if (context === undefined) {
		throw new Error('useTodoDispatchContext must be used within a TodoProvider')
	}
	return context
}

export { useTodoStateContext, useTodoDispatchContext, TodoProvider }
