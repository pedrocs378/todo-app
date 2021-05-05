import { createContext, ReactNode, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface ThemeAppContextData {
	theme: DefaultTheme
	toggleTheme: () => void
}

interface ThemeAppProviderProps {
	children: ReactNode
}

const ThemeAppContext = createContext({} as ThemeAppContextData)

export function ThemeAppProvider({ children }: ThemeAppProviderProps) {
	const [theme, setTheme] = useState(light)

	function toggleTheme() {
		setTheme(theme.title === 'light' ? dark : light)
	}

	return (
		<ThemeAppContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeAppContext.Provider>
	)
}

export const useThemeApp = () => useContext(ThemeAppContext)