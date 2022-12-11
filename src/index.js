import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import generateMuiTheme from "./mui/theme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={generateMuiTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
