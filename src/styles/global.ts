import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--blue: #3a7bfd;
		--radio-background: linear-gradient(#57ddff, #c058f3);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background: ${props => props.theme.colors.background};
		font-size: 1.125rem;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Josefin Sans', sans-serif;
		font-weight: 400; 
	}

	h1, h2, h3 {
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}
`