import styled, { css } from 'styled-components'
import { setLightness, shade } from 'polished'

interface ContainerProps {
	isSelected: boolean
}

export const Container = styled.label<ContainerProps>`
	display: flex;
	align-items: center;

	height: 4rem;
	padding: 0 1.25rem;
	border-bottom: 1px solid ${props => props.theme.colors.complements};
	color: ${props => props.theme.colors.heading};
	font-weight: 400;
	font-size: 1rem;
	cursor: pointer;

	transition: color 0.2s;

	${({ isSelected }) => isSelected && css`
		text-decoration: line-through;
		color: ${props => props.theme.colors.complements};
	`}

	&:hover {
		color: ${props => props.isSelected ? shade(0.2, props.theme.colors.complements) : props.theme.colors.headingHover};
	}

	> button {
		margin-left: auto;
		background: transparent;
		border: 0;

		svg {
			height: 22px;
			width: 22px;
			color: ${props => props.theme.colors.complementsSecondary};
		}
	}

	@media (min-width: 600px) {
		padding: 0 1.25rem;
		height: 3.5rem;
		
		> button {
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.4s;

			svg {
				height: 24px;
				width: 24px;
				transition: color 0.2s;
			}

			&:hover {
				svg {
					color: ${props => props.theme.title === 'light' ? shade(0.4, props.theme.colors.complementsSecondary) : setLightness(0.9, props.theme.colors.complementsSecondary)};
				}
			}
		}

		&:hover {
			> button {
				visibility: visible;
				opacity: 1;
			}
		}
	}
`