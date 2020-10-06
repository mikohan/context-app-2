import React, { createContext, Component } from 'react';

const ThemeContent = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      isDarkMode: true,
    };
  }
  render() {
    return (
      <ThemeContent.Provider value={{ ...this.state, tastedLikeChicken: true }}>
        {this.props.children}
      </ThemeContent.Provider>
    );
  }
}

export default ThemeProvider;
