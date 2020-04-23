import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from '../App'
import TodoItem from '../components/TodoItem'

// Arrange - Act - Assert

const props = {
	id: 0,
	title: 'Walk the dog',
	completed: false,
	setCompleted: jest.fn()
}

describe('<TodoItem/>', () => {
	it('should render the todo item', () => {
		const { getByText } = render(<TodoItem {...props} />)
		expect(getByText('Walk the dog')).toBeInTheDocument()
	})

	it('should display `complete` when the completed prop changes', () => {
		const propsWithTrue = {
			id: 0,
			title: 'Walk the dog',
			completed: true,
			setCompleted: jest.fn()
		}

		const { queryByText, getByText, rerender } = render(<TodoItem {...props} />)
		expect(queryByText('complete')).not.toBeInTheDocument()

		rerender(<TodoItem {...propsWithTrue} />)
		expect(getByText('complete')).toBeInTheDocument()
	})

	it('should render a button that switches the completed status', () => {
		const props = {
			id: 0,
			title: 'Walk the dog',
			completed: false,
			setCompleted: jest.fn()
		}
		const { queryByText, getByText } = render(
			<App>
				<TodoItem {...props} />
			</App>
		)
		const button = getByText(/click/i)
		expect(button).toBeInTheDocument()
		expect(queryByText('complete')).not.toBeInTheDocument()

		fireEvent.click(button)
		expect(getByText('complete')).toBeInTheDocument()

		fireEvent.click(button)
		expect(queryByText('complete')).not.toBeInTheDocument()
	})
})
