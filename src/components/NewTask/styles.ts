import styled from 'styled-components'

export const Container = styled.form`
	display: flex;
	align-items: center;

	border-radius: 5px;
	padding: 0 1.25rem;
	height: 3.2rem;
	background: ${props => props.theme.colors.shape};

	input {
		padding: 0 2px;
		background: transparent;
		border: 0;
		height: 100%;
		width: 100%;
		color: ${props => props.theme.colors.heading};
		font-size: 1rem;

		&::placeholder {
			color: ${props => props.theme.colors.placeholder};
		}
	}
`