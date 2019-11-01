import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { render } from "@testing-library/react";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("render without crashing ", () => {
  const h1 = document.createElement("h1");
  ReactDOM.render(<App />, h1);
});

test("render without crashing ", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(<App />, nav);
});
