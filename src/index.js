import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecipeContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
