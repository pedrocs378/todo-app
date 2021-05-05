import styled, { css } from 'styled-components'

interface ContainerProps {
	isSelected: boolean
}

export const Container = styled.div<ContainerProps>`
	margin-right: 1rem;

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
`