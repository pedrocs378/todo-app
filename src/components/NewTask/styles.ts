import styled from 'styled-components'

export const Container = styled.form`
	display: flex;
	align-items: center;

	border-radius: 5px;
	padding: 0 1.25rem;
	height: 3.2rem;
	background: ${props => props.theme.colors.shape};

	input {
		padding: 0 3px;
		background: transparent;
		border: 0;
		height: 80%;
		width: 100%;
		color: ${props => props.theme.colors.heading};
		font-size: 1rem;

		outline-color: ${props => props.theme.colors.background};

		&::placeholder {
			color: ${props => props.theme.colors.text};
		}
	}
`