import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemeAppProvider } from './contexts/ThemeAppContext';

import { Home } from './pages/Home';

import GlobalStyles from './styles/global'
import light from './styles/themes/light';

export function App() {
  const [currentTheme, setCurrentTheme] = useState(light)

  function handleChangeTheme(theme: DefaultTheme) {
    setCurrentTheme(theme)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeAppProvider>
        <Home onChangeTheme={handleChangeTheme} />

        <GlobalStyles />
      </ThemeAppProvider>
    </ThemeProvider>
  );
}
