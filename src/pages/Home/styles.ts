import styled, { css } from 'styled-components'

interface TaskProps {
	isSelected: boolean
}

interface FilterButtonProps {
	isSelected: boolean
}

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
	
	img {
		width: 100%;
	}
`

export const Content = styled.main`
	width: 100%;
	padding: 0 2rem;
	position: absolute;
	top: 50px;
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		text-transform: uppercase;
		letter-spacing: 0.8rem;
		color: #fff;
		font-size: 2rem;
	}

	button {
		background: transparent;
		border: 0;

		img {
			height: 100%;
			width: 100%;
		}
	}
`

export const Tasks = styled.div`
	margin-top: 2rem;
	border-radius: 5px;
	background: ${props => props.theme.colors.shape};
	width: 100%;
	box-shadow: 0 3px 15px ${props => props.theme.title === 'light' && props.theme.colors.complements};
`

export const Task = styled.label<TaskProps>`
	display: flex;
	align-items: center;

	padding: 1.25rem;
	border-bottom: 1px solid ${props => props.theme.colors.complements};
	color: ${props => props.theme.colors.heading};
	font-weight: 400;
	font-size: 1rem;

	${({ isSelected }) => isSelected && css`
		text-decoration: line-through;
		color: ${props => props.theme.colors.placeholder};
	`}

	div {
		margin-right: 0.8rem;

		input {
			display: none;
		}

		span {
			display: flex;
			align-items: center;
			justify-content: center;

			height: 20px;
			width: 20px;
			border-radius: 10px;
			border: 1px solid ${props => props.theme.colors.complements};
			background: ${({ isSelected }) => isSelected ? 'var(--radio-background)' : 'transparent'};
		
			svg {
				height: 9px;
				width: 9px;
				color: #fff;

				${({ isSelected }) => !isSelected && css`
					display: none;
				`}
			}
		}
	}

	> button {
		margin-left: auto;
		background: transparent;
		border: 0;

		svg {
			height: 22px;
			width: 22px;
			color: ${props => props.theme.colors.complements};
		}
	}
`

export const TasksFooter = styled.div`
	padding: 1.5rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		font-size: 0.85rem;
		color: ${props => props.theme.colors.text};
	}

	button {
		background: transparent;
		border: 0;
		font-size: 0.85rem;
		color: ${props => props.theme.colors.text};
	}
`

export const TaskFilters = styled.div`
	margin-top: 1.5rem;
	border-radius: 5px;
	padding: 1.5rem 0;
	background: ${props => props.theme.colors.shape};
	box-shadow: 0 3px 10px ${props => props.theme.title === 'light' && props.theme.colors.complements};

	display: flex;
	align-items: center;
	justify-content: center;
`

export const FilterButton = styled.button<FilterButtonProps>`
	color: ${({ isSelected, theme }) => isSelected ? 'var(--blue)' : theme.colors.text};
	background: transparent;
	border: 0;
	font-weight: 700;

	& + button {
		margin-left: 1rem;
	}
`

export const TipText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 4rem;
	color: ${props => props.theme.colors.text};
`