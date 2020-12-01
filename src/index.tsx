import React from "react";
import ReactDOM from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { App } from "./App";

const Root = () => (
  <div style={{ margin: 20, border: "1px solid black" }}>
    <div className="vkui-root">
      <App />
    </div>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
