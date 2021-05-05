import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import { Home } from './pages/Home';

import GlobalStyles from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />

      <GlobalStyles />
    </ThemeProvider>
  );
}
