import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static contextType = LanguageContext; Not required when using Consumer

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
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
