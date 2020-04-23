import React from 'react'
import TodoItem from '../components/TodoItem'
import { cleanup, render } from '@testing-library/react'
import TodoList from '../components/TodoList'

afterEach(cleanup)

describe('<TodoList/>', () => {
	it('should display a list of <TodoItem /> equal to the `todoItems.length`', () => {
		const todo1 = {
			id: 0,
			title: 'Walk the dog',
			completed: false,
			setCompleted: jest.fn()
		}
		const todo2 = {
			id: 0,
			title: 'Feed the dog',
			completed: false,
			setCompleted: jest.fn()
		}
		const todo3 = {
			id: 0,
			title: 'Wash the dog',
			completed: false,
			setCompleted: jest.fn()
		}

		const props = [ todo1, todo2, todo3 ]

		const { getByText } = render(<TodoList todoItems={props} />)
	})
})
