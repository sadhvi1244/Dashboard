
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BreakpointsProvider from "./providers/BreakpointsProviders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BreakpointsProvider>
      <App />
    </BreakpointsProvider>
  </BrowserRouter>
);

