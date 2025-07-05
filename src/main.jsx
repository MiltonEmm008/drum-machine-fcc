import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.scss";
import ActionProvider from "./context/ActionProvider.jsx";

ReactDOM.render(
  <ActionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ActionProvider>,
  document.getElementById("root")
);
