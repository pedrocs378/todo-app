import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string

		colors: {
			background: string
			shape: string
			heading: string
			headingHover: string
			text: string
			complements: string
			complementsSecondary: string
		}
	}
}