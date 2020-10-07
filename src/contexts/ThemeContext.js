import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

function ThemeProvider(props) {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     isDarkMode: true,
  //   };
  // }

  const [isDarkMode, toggleTheme] = useToggleState(true);

  // const toggleTheme = () => {
  //   this.setState({ isDarkMode: !this.state.isDarkMode });
  // };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
