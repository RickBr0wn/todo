import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todoItems }) => {
	return <ul>{todoItems.map((todo) => <TodoItem key={todo.id} title={todo.title} />)}</ul>
}

TodoList.propTypes = {
	todoItems: PropTypes.array.isRequired
}

export default TodoList
