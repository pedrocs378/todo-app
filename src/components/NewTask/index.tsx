
import { FormEvent, InputHTMLAttributes } from 'react'

import { RadioButton } from '../RadioButton'

import { Container } from './styles'

interface NewTaskProps extends InputHTMLAttributes<HTMLInputElement> {
	isCompleted: boolean
	onSubmit?: () => void
	onChangeTaskComplete: () => void
}

export function NewTask({ isCompleted, onSubmit, onChangeTaskComplete, ...rest }: NewTaskProps) {

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		onSubmit && onSubmit()
	}

	return (
		<Container onSubmit={handleSubmit}>
			<RadioButton
				isSelected={isCompleted}
				checked={isCompleted}
				onClick={() => onChangeTaskComplete()}
			/>

			<input
				type="text"
				placeholder="Create a new todo..."
				{...rest}
			/>
		</Container>
	)
}