import { ThemeProvider } from 'styled-components';

import { useThemeApp } from './contexts/ThemeAppContext';

import { Home } from './pages/Home';

import GlobalStyles from './styles/global'

export function App() {
  const { theme } = useThemeApp()

  return (
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyles />
    </ThemeProvider>
  );
}
