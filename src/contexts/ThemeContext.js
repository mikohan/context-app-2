import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      isDarkMode: true,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, tastedLikeChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
