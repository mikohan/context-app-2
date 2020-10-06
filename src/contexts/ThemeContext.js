import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      isDarkMode: true,
    };
  }
  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
