import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <Example />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
