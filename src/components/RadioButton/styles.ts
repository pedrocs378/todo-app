import styled, { css } from 'styled-components'

interface ContainerProps {
	isSelected: boolean
}

export const Container = styled.label<ContainerProps>`	
	
	margin-right: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	height: 20px;
	width: 20px;
	border-radius: 10px;
	border: 1px solid ${props => props.theme.colors.complementsSecondary};
	background: ${({ isSelected }) => isSelected ? 'var(--radio-background)' : 'transparent'};

	transition: border-color 0.2s;

	&:hover {
		border-color: var(--radio-background);
	}

	input {
		display: none;
	}

	svg {
		height: 9px;
		width: 9px;
		color: #fff;

		${({ isSelected }) => !isSelected && css`
			display: none;
		`}
	}

	@media (min-width: 600px) {
		height: 22px;
		width: 22px;
		border-radius: 11px;

		svg {
			height: 10px;
			width: 10px;	
		}
	}
`