import React from "react";
import "./App.css";
//import Page from "./components/UI/Page.js";
import Header from "./components/UI/Header.js";
//import Card from "./components/UI/Card.js";
import Body from "./components/UI/Body.js";

const App = () => {
  const cards = [
    { caption: "Toyota", text: "2012" },
    { caption: "BMW", text: "2009" },
    { caption: "Opel", text: "2019" },
    { caption: "Mazda", text: "2015" },
    { caption: "Audi", text: "2001" },
    { caption: "Ford", text: "2005" },
    { caption: "Kia", text: "2020" },
    { caption: "Volkswagen", text: "1998" },
  ];
  const header = "Авто из Америки и Европы";
  /*
  return React.createElement(
    "div",
    {},
    React.createElement(Page),
    React.createElement(Header, {text: header}),
    React.createElement(Card, {items: cards})
  );
*/
  return (
    <div>
      <Header text={header}></Header>
      <Body items={cards}></Body>
    </div>
  );
};
/*
      <Page />
      <Card items={cards}></Card>
*/

export default App;
