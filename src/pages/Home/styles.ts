import styled from 'styled-components'

interface TaskProps {
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
	border-radius: 8px;
	background: #fff;
	height: 400px;
	width: 100%;
	box-shadow: 0 3px 15px 0px ${props => props.theme.colors.complements};
`

export const Task = styled.label<TaskProps>`
	display: flex;
	align-items: center;

	padding: 1.25rem;
	border-bottom: 1px solid ${props => props.theme.colors.complements};
	color: ${props => props.theme.colors.heading};
	font-weight: 700;
	font-size: 1rem;

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
		}
	}

	> button {
		margin-left: auto;
		background: transparent;
		border: 0;

		svg {
			height: 22px;
			width: 22px;
			color: ${props => props.theme.colors.text};
		}
	}
`