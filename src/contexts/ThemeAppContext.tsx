import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme } from "styled-components";

import { usePersistedState } from "../hooks/usePersistedState";

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
	const [theme, setTheme] = usePersistedState<DefaultTheme>('@TodoApp.theme', light)

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