import { useCallback, useContext, useState } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

import { Task } from '../../components/Task'

import { useThemeApp } from '../../contexts/ThemeAppContext'

import imgBackgroundLight from '../../assets/bg-mobile-light.jpg'
import imgBackgroundDark from '../../assets/bg-mobile-dark.jpg'
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

import {
	Container,
	Content,
	TitleContainer,
	Tasks,
	TasksFooter,
	TaskFilters,
	FilterButton,
	TipText,
} from './styles'

interface TaskParams {
	id: string
	title: string
	isCompleted: boolean
}

interface HomeProps {
	onChangeTheme?: (theme: DefaultTheme) => void
}

const initialTasks = [
	{
		id: String(Math.random()),
		title: 'Read for 1 hour',
		isCompleted: true,
	},
	{
		id: String(Math.random()),
		title: 'Pick up graceries',
		isCompleted: false,
	},
	{
		id: String(Math.random()),
		title: '10 minutes meditation',
		isCompleted: true,
	},
	{
		id: String(Math.random()),
		title: 'Study React',
		isCompleted: false,
	},
]

export function Home({ onChangeTheme }: HomeProps) {
	const { title: themeTitle } = useContext(ThemeContext)
	const { theme, toggleTheme } = useThemeApp()

	const [tasks, setTasks] = useState<TaskParams[]>(initialTasks)

	function handleToggleTheme() {
		toggleTheme()
		onChangeTheme && onChangeTheme(theme)
	}

	const handleToggleTask = useCallback((id: string) => {
		const tasksUpdated = tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					isCompleted: !task.isCompleted
				}
			}

			return task
		})

		setTasks(tasksUpdated)
	}, [tasks])

	const handleDeleteTask = useCallback((id: string) => {
		const tasksUpdated = tasks.filter(task => task.id !== id)

		setTasks(tasksUpdated)
	}, [tasks])

	return (
		<Container>
			<img src={themeTitle === 'light' ? imgBackgroundLight : imgBackgroundDark} alt="Background" />

			<Content>
				<TitleContainer>
					<h1>Todo</h1>

					<button type="button" onClick={handleToggleTheme}>
						<img src={themeTitle === 'light' ? moonIcon : sunIcon} alt="Theme" />
					</button>
				</TitleContainer>
				<Tasks>

					{tasks.map(task => (
						<Task
							key={task.id}
							task={task}
							onChange={() => handleToggleTask(task.id)}
							onDelete={() => handleDeleteTask(task.id)}
						/>
					))}

					<TasksFooter>
						<p>{tasks.length} items left</p>

						<button type="button">
							Clear Completed
						</button>
					</TasksFooter>

				</Tasks>
				<TaskFilters>
					<FilterButton isSelected={true}>
						All
					</FilterButton>
					<FilterButton isSelected={false}>
						Active
					</FilterButton>
					<FilterButton isSelected={false}>
						Completed
					</FilterButton>
				</TaskFilters>

				<TipText>Drag and drop to reorder list</TipText>
			</Content>
		</Container>
	)
}