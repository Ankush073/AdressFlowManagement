import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Your main app component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router> {/* Wrap the entire app in Router */}
    <App />
  </Router>
);
