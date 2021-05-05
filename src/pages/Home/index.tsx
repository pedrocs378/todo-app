import { DefaultTheme, ThemeContext } from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { useThemeApp } from '../../contexts/ThemeAppContext'

import imgBackgroundLight from '../../assets/bg-mobile-light.jpg'
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

import {
	Container,
	Content,
	TitleContainer,
	Tasks,
	Task,
	TasksFooter,
	TaskFilters,
	FilterButton,
	TipText,
} from './styles'
import { useContext } from 'react'

interface HomeProps {
	onChangeTheme?: (theme: DefaultTheme) => void
}

export function Home({ onChangeTheme }: HomeProps) {
	const { title: themeTitle } = useContext(ThemeContext)
	const { theme, toggleTheme } = useThemeApp()

	function handleToggleTheme() {
		toggleTheme()
		onChangeTheme && onChangeTheme(theme)
	}

	return (
		<Container>
			<img src={imgBackgroundLight} alt="Background" />
			<Content>
				<TitleContainer>
					<h1>Todo</h1>

					<button type="button" onClick={handleToggleTheme}>
						<img src={themeTitle === 'light' ? moonIcon : sunIcon} alt="Theme" />
					</button>
				</TitleContainer>
				<Tasks>
					<Task htmlFor="task-radio" isSelected={true}>
						<div>
							<input type="radio" id="task-radio" />
							<span>
								<FaCheck />
							</span>
						</div>
						10 minutes meditation
						<button type="button">
							<FiX />
						</button>
					</Task>
					<Task htmlFor="task-radio" isSelected={false}>
						<div>
							<input type="radio" id="task-radio" />
							<span>
								<FaCheck />
							</span>
						</div>
						Read for 1 hour
						<button type="button">
							<FiX />
						</button>
					</Task>
					<Task htmlFor="task-radio" isSelected={false}>
						<div>
							<input type="radio" id="task-radio" />
							<span>
								<FaCheck />
							</span>
						</div>
						Pick up graceries
						<button type="button">
							<FiX />
						</button>
					</Task>
					<TasksFooter>
						<p>5 items left</p>
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