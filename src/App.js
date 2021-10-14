import "./App.css";
import Page from "./components/UI/Page.js";
import Header from "./components/UI/Header.js";
import Card from "./components/UI/Card.js";
import reactDom from "react-dom";
import React from "react";

const App = () => {
  const cards = [{ caption: "Caption", text: "Text..." }];
  const header = "Header";

  return React.createElement(
    "div",
    {},
    React.createElement(Page),
    React.createElement(Header, {text: header}),
    React.createElement(Card, {items: cards})
  );

  //return (
  //  <div>
  //    <Page></Page>
  //    <Header text={header}></Header>
  //    <Card caption={cards[0].caption} text={cards[0].text}></Card>
  //  </div>
  //);
}

export default App;
