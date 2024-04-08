import React from "react";
import ReactDOM from "react-dom/client";
import MyTheme from "./theme.jsx";
import DefaultLayout from "./layouts/defaultLayout.jsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={MyTheme}>
      <CssBaseline/>
      <DefaultLayout isLoggedIn={true} />
    </ThemeProvider>
  </React.StrictMode>
);
