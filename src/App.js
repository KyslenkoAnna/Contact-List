import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div
        className="mainContainer"
        style={{
          backgroundColor: "#5B7EA1",
        }}
      >
        <div
          title="Hello"
          className="introduction"
          style={{
            height: "150px",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            fontSize: "50px",
            fontFamily: "'Inconsolata', monospace",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Hi All! I am Anna Kyslenko.
        </div>

        <div style={gettingStyling}>I am 24 and I am keen on yoga!</div>
        <div style={gettingStyling}>
          I am an accountant and I love work from home!
        </div>
        <div style={gettingStyling}>
          I like reading books and watching series!
        </div>
      </div>
    );
  }
}

const gettingStyling = {
  height: "190px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  fontFamily: "'Inconsolata', monospace",
  color: "#ffffff",
  textAlign: "center",
};
