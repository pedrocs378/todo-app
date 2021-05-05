import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from 'styled-components'

import { Task } from '../../components/Task'
import { NewTask } from '../../components/NewTask'

import { useThemeApp } from '../../contexts/ThemeAppContext'
import { usePersistedState } from '../../hooks/usePersistedState'

import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

import {
	Container,
	Header,
	Content,
	TitleContainer,
	Tasks,
	TasksFooter,
	TaskFilters,
	FilterButton,
	TipText,
} from './styles'

type Filter = 'all' | 'active' | 'completed'

interface TaskParams {
	id: string
	title: string
	isCompleted: boolean
}

export function Home() {
	const { title: themeTitle } = useContext(ThemeContext)
	const { toggleTheme } = useThemeApp()

	const [tasks, setTasks] = usePersistedState<TaskParams[]>('@TodoApp.tasks', [])

	const [filteredTasks, setFilteredTasks] = useState<TaskParams[]>(tasks)
	const [filter, setFilter] = useState<Filter>('all')
	const [newTask, setNewTask] = useState<TaskParams>({
		id: String(Math.random()),
		isCompleted: false,
		title: ''
	})

	function handleAddNewTask() {
		if (!newTask.title.trim()) {
			return
		}

		setTasks([...tasks, newTask])

		setNewTask({
			id: String(Math.random()),
			isCompleted: false,
			title: ''
		})
	}

	function handleClearCompletedTasks() {
		const tasksUpdated = tasks.filter(task => !task.isCompleted)

		setTasks(tasksUpdated)
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
	}, [tasks, setTasks])

	const handleDeleteTask = useCallback((id: string) => {
		const tasksUpdated = tasks.filter(task => task.id !== id)

		setTasks(tasksUpdated)
	}, [tasks, setTasks])

	const itemsLeft = useMemo(() => {
		return tasks.filter(task => !task.isCompleted).length
	}, [tasks])

	useEffect(() => {
		switch (filter) {
			case 'all':
				setFilteredTasks(tasks)
				break;
			case 'active':
				const tasksActived = tasks.filter(task => !task.isCompleted)

				setFilteredTasks(tasksActived)
				break;
			case 'completed':
				const tasksCompleted = tasks.filter(task => task.isCompleted)

				setFilteredTasks(tasksCompleted)
				break;
			default:
				setFilteredTasks(tasks)
				break;
		}
	}, [filter, tasks])

	return (
		<Container>
			<Header isDark={themeTitle === 'dark'} />

			<Content>
				<TitleContainer>
					<h1>Todo</h1>

					<button type="button" onClick={toggleTheme}>
						<img src={themeTitle === 'light' ? moonIcon : sunIcon} alt="Theme" />
					</button>
				</TitleContainer>

				<NewTask
					value={newTask.title}
					isCompleted={newTask.isCompleted}
					onChangeTaskComplete={() => setNewTask({ ...newTask, isCompleted: !newTask.isCompleted })}
					onChange={event => setNewTask({ ...newTask, title: event.target.value })}
					onSubmit={handleAddNewTask}
				/>

				<Tasks>
					{filteredTasks.map(task => (
						<Task
							key={task.id}
							task={task}
							onChange={() => handleToggleTask(task.id)}
							onDelete={() => handleDeleteTask(task.id)}
						/>
					))}

					<TasksFooter>
						<p>{itemsLeft} items left</p>

						<div>
							<FilterButton
								isSelected={filter === 'all'}
								onClick={() => setFilter('all')}
							>
								All
							</FilterButton>
							<FilterButton
								isSelected={filter === 'active'}
								onClick={() => setFilter('active')}
							>
								Active
							</FilterButton>
							<FilterButton
								isSelected={filter === 'completed'}
								onClick={() => setFilter('completed')}
							>
								Completed
							</FilterButton>
						</div>

						<button type="button" onClick={handleClearCompletedTasks}>
							Clear Completed
						</button>
					</TasksFooter>
				</Tasks>

				<TaskFilters>
					<FilterButton
						isSelected={filter === 'all'}
						onClick={() => setFilter('all')}
					>
						All
					</FilterButton>
					<FilterButton
						isSelected={filter === 'active'}
						onClick={() => setFilter('active')}
					>
						Active
					</FilterButton>
					<FilterButton
						isSelected={filter === 'completed'}
						onClick={() => setFilter('completed')}
					>
						Completed
					</FilterButton>
				</TaskFilters>

				<TipText>Drag and drop to reorder list</TipText>
			</Content>
		</Container>
	)
}