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

  const { isDarkMode, setIsDarkMode } = useToggleState(true);

  const toggleTheme = useToggleState(isDarkMode);

  // const toggleTheme = () => {
  //   this.setState({ isDarkMode: !this.state.isDarkMode });
  // };

  return (
    <ThemeContext.Provider value={{ ...this.state, toggleTheme: toggleTheme }}>
      {this.props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
