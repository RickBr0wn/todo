import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TodoList from '../components/TodoList'
import { TodoProvider } from '../components/TodoStore'

afterEach(cleanup)

const AllTheProviders = ({ children }) => {
	return <TodoProvider>{children}</TodoProvider>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

describe('<TodoList/>', () => {
	it('should display a list of <TodoItem /> equal to the `todoItems.length`', () => {
		const props = [
			{
				id: 1,
				title: 'Walk the dog'
			},
			{
				id: 2,
				title: 'Feed the dog'
			},
			{
				id: 3,
				title: 'Wash the dog'
			}
		]

		const { getByText, getAllByTestId } = customRender(
			<TodoProvider>
				<TodoList todoItems={props} />
			</TodoProvider>
		)

		expect(getByText(/walk/i)).toBeInTheDocument()
		expect(getByText(/feed/i)).toBeInTheDocument()
		expect(getByText(/wash/i)).toBeInTheDocument()

		expect(getAllByTestId('todo-item')).toHaveLength(3)
	})
})
