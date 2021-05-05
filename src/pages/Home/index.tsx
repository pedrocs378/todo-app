import { FaCheck } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import imgBackgroundLight from '../../assets/bg-mobile-light.jpg'
import moonIcon from '../../assets/icon-moon.svg'

import {
	Container,
	Content,
	TitleContainer,
	Tasks,
	Task,
	TasksFooter,
	TaskFilters,
	FilterButton,
} from './styles'

export function Home() {

	return (
		<Container>
			<img src={imgBackgroundLight} alt="Background" />
			<Content>
				<TitleContainer>
					<h1>Todo</h1>

					<button type="button">
						<img src={moonIcon} alt="Moon" />
					</button>
				</TitleContainer>
				<Tasks>
					<Task htmlFor="task-radio" isSelected={true}>
						<div>
							<input type="radio" id="task-radio" />
							<span>
								<FaCheck color="#fff" size={9} />
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
								<FaCheck color="#fff" size={9} />
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
								<FaCheck color="#fff" size={9} />
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
			</Content>
		</Container>
	)
}