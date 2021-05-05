import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string

		colors: {
			background: string
			shape: string
			placeholder: string
			heading: string
			text: string
			complements: string
		}
	}
}