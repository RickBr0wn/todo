import React from 'react'
import { cleanup, render } from '@testing-library/react'
import App from '../App'
import { TodoProvider } from '../components/TodoStore'

afterEach(cleanup)

const AllTheProviders = ({ children }) => {
	return <TodoProvider>{children}</TodoProvider>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

describe('<App/>', () => {
	it('should render a single <TodoList/>', () => {
		const props = [
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

		const { getByTestId, getAllByTestId } = customRender(
			<TodoProvider>
				<App />
			</TodoProvider>
		)

		expect(getByTestId('todo-list')).toBeInTheDocument()
		expect(getAllByTestId('todo-list')).toHaveLength(1)
		expect(true).toBe(true)
	})
})
