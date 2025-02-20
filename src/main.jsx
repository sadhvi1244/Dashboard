<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
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
>>>>>>> a8ab0b9 (Re-added all project files (layout completed))
