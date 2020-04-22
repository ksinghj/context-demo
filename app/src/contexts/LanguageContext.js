import React from "react";
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLangChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLangChange: this.onLangChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
