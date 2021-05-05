import styled, { css } from 'styled-components'

interface ContainerProps {
	isSelected: boolean
}

export const Container = styled.label<ContainerProps>`
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