import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ title }) => {
	const [ completed, setCompleted ] = useState(false)
	return (
		<li data-testid='todo-item' style={styles.container}>
			<p>{title}</p>
			<p>{completed ? 'complete' : null}</p>
			<button onClick={() => setCompleted((prev) => !prev)}>click</button>
		</li>
	)
}

const styles = {
	container: {
		backgroundColor: '#1f8908',
		width: '350px',
		borderRadius: '5px',
		padding: '10px 30px',
		display: 'flex',
		justifyContent: 'space-between',
		margin: '5px'
	}
}

TodoItem.propTypes = {
	title: PropTypes.string.isRequired
}

export default TodoItem
