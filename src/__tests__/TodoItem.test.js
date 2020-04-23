import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import TodoItem from '../components/TodoItem'

// Arrange - Act - Assert

afterEach(cleanup)

describe('<TodoItem/>', () => {
	it('should render the todo item', () => {
		const props = {
			id: 0,
			title: 'Walk the dog'
		}

		const { getByText } = render(<TodoItem {...props} />)
		expect(true).toBe(true)
		expect(getByText('Walk the dog')).toBeInTheDocument()
	})

	it('should render a button that switches the completed status', () => {
		const props = {
			id: 0,
			title: 'Walk the dog'
		}

		const { queryByText, getByText } = render(<TodoItem {...props} />)

		const button = getByText(/click/i)

		expect(button).toBeInTheDocument()
		expect(queryByText('complete')).not.toBeInTheDocument()

		fireEvent.click(button)
		expect(getByText('complete')).toBeInTheDocument()

		fireEvent.click(button)
		expect(queryByText('complete')).not.toBeInTheDocument()
	})
})
