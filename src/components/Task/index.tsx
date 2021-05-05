import { FiX } from 'react-icons/fi'

import { RadioButton } from '../RadioButton'

import { Container } from './styles'

interface TaskParams {
	id: string
	title: string
	isCompleted: boolean
}

interface TaskProps {
	task: TaskParams
	onChange?: () => void
	onDelete?: () => void
}

export function Task({ task, onChange, onDelete }: TaskProps) {

	return (
		<Container
			htmlFor={task.id}
			isSelected={task.isCompleted}
		>
			<RadioButton
				id={task.id}
				isSelected={task.isCompleted}
				checked={task.isCompleted}
				onClick={() => onChange && onChange()}
			/>

			{task.title}

			<button type="button" onClick={() => onDelete && onDelete()}>
				<FiX />
			</button>
		</Container>
	)
}