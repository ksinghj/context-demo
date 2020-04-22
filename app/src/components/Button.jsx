import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext; Not required when using Consumer

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      // <LanguageContext.Consumer>
      //   {context => {
      //     const text = context === "english" ? "Submit" : "Voorleggen";
      //     return <button className="ui button primary">{text}</button>;
      //   }}
      // </LanguageContext.Consumer>
      //
      // v^ Either of these are OK (above was my attempt before tutorial)
      //
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
