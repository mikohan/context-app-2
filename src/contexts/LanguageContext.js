import React, { createContext, Component } from 'react';

export const LanguageContext = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      language: 'russian',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
