import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePeristedState from './utils/usePeristedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

import Header from './components/Header'

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />

        <div className="content-box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id commodo ligula, vel tempus quam. Sed et dolor mollis, pretium elit at, gravida tellus. Mauris accumsan dapibus hendrerit. Maecenas scelerisque turpis quis risus lacinia, eget blandit metus sodales. Aliquam sapien erat, tristique eget sollicitudin sit amet, mattis vitae mi. In scelerisque dui et cursus feugiat. Curabitur rhoncus posuere lacus, a laoreet augue mattis et.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
