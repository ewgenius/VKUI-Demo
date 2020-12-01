import React from "react";
import ReactDOM from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { App } from "./App";

const Root = () => (
  <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
    <h1>Embedded VKUI App demo</h1>
    <div>
      <input placeholder="some native form elemnts" />
      <br />
      <textarea />
    </div>
    <div
      style={{
        marginTop: 20,
        minWidth: 500,
        maxWidth: 800,
        border: "1px solid black",
      }}
    >
      <App />
    </div>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
