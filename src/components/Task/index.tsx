import { LabelHTMLAttributes, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { FiX } from 'react-icons/fi'

import { RadioButton } from '../RadioButton'

import { Container } from './styles'

interface TaskParams {
	id: string
	title: string
	isCompleted: boolean
}

interface TaskProps extends LabelHTMLAttributes<HTMLLabelElement> {
	task: TaskParams
	index: number
	onMoveTask: (dragIndex: number, hoverIndex: number) => void
	onChange?: () => void
	onDelete?: () => void
}

const type = 'Task'

export function Task({ task, index, onMoveTask, onChange, onDelete, ...rest }: TaskProps) {
	const taskRef = useRef(null)

	const [, drop] = useDrop({
		accept: type,
		hover(item: TaskProps) {
			if (!taskRef.current) {
				return
			}

			const dragIndex = item.index

			const hoverIndex = index

			if (dragIndex === hoverIndex) {
				return
			}

			onMoveTask(dragIndex, hoverIndex)

			item.index = hoverIndex
		}
	})

	const [{ isDragging }, drag] = useDrag({
		type,
		item: { type, id: task.id, index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),

	})

	drag(drop(taskRef))

	return (
		<Container
			ref={taskRef}
			style={{
				opacity: isDragging ? 0.5 : 1
			}}
			htmlFor={task.id}
			isSelected={task.isCompleted}
			{...rest}
		>
			<RadioButton
				id={task.id}
				isSelected={task.isCompleted}
				checked={task.isCompleted}
				onClick={() => onChange && onChange()}
				onChange={() => onChange && onChange()}
			/>

			{task.title}

			<button type="button" onClick={() => onDelete && onDelete()}>
				<FiX />
			</button>
		</Container>
	)
}