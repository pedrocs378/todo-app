import styled, { css } from 'styled-components'
import { shade, setLightness } from 'polished'

import imgBackgroundMobileLight from '../../assets/bg-mobile-light.jpg'
import imgBackgroundMobileDark from '../../assets/bg-mobile-dark.jpg'

import imgBackgroundDesktopLight from '../../assets/bg-desktop-light.jpg'
import imgBackgroundDesktopDark from '../../assets/bg-desktop-dark.jpg'

interface HeaderProps {
	isDark: boolean
}

interface FilterButtonProps {
	isSelected: boolean
}

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
`

const showBackgroundDesktopLight = css`
	background: url(${imgBackgroundDesktopLight});
`

const showBackgroundDesktopDark = css`
	background: url(${imgBackgroundDesktopDark});
`

export const Header = styled.header<HeaderProps>`
	width: 100%;
	height: 200px;
	background: url(${({ isDark }) => isDark ? imgBackgroundMobileDark : imgBackgroundMobileLight});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	@media (min-width: 600px) {
		height: 300px;

		${({ isDark }) => isDark ? showBackgroundDesktopDark : showBackgroundDesktopLight}
	}
`

export const Content = styled.main`
	width: 100%;
	max-width: 600px;
	padding: 0 2rem;
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);

	@media (min-width: 600px) {
		top: 7rem;	
	}
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;

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
	margin-top: 1rem;
	border-radius: 5px;
	background: ${props => props.theme.colors.shape};
	width: 100%;
	box-shadow: 0 3px 10px ${props => {
		return shade(props.theme.title === 'light' ? 0.1 : 0.5, props.theme.colors.shape)
	}};
`

export const TasksFooter = styled.div`
	padding: 1.5rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.85rem;

	p {
		color: ${props => props.theme.colors.text};
	}

	div {
		display: none;
	}

	> button {
		background: transparent;
		border: 0;
		color: ${props => props.theme.colors.text};
	}

	@media (min-width: 600px) {
		padding: 1rem 1.25rem;
		font-size: 0.75rem;

		div {
			display: block;
		}

		> button {
			transition: color 0.2s;

			&:hover {
				color: ${({ theme }) => theme.title === 'light' ? shade(0.4, theme.colors.text) : setLightness(0.9, theme.colors.text)};
			}
		}
	}
`

export const TaskFilters = styled.div`
	margin-top: 1.5rem;
	border-radius: 5px;
	padding: 1.5rem 0;
	background: ${props => props.theme.colors.shape};
	box-shadow: 0 3px 10px ${props => {
		return shade(props.theme.title === 'light' ? 0.2 : 0.5, props.theme.colors.shape)
	}};

	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 600px) {
		display: none;
	}
`

export const FilterButton = styled.button<FilterButtonProps>`
	color: ${({ isSelected, theme }) => isSelected ? 'var(--blue)' : theme.colors.text};
	background: transparent;
	border: 0;
	font-weight: 700;

	& + button {
		margin-left: 1rem;
	}

	@media (min-width: 600px) {
		font-size: 0.8rem;
		transition: color 0.2s;

		&:hover {
			color: ${({ isSelected, theme }) => isSelected ? shade(0.2, '#3a7bfd') : theme.title === 'light' ? shade(0.4, theme.colors.text) : setLightness(0.9, theme.colors.text)};
		}
	}
`

export const TipText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 4rem;
	color: ${props => props.theme.colors.text};

	@media (min-width: 600px) {
		margin-top: 3.5rem;
		font-size: 0.8rem;
	}
`