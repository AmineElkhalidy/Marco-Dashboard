import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// App Component
import App from "./App";

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// Pro sidebar
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Router>
  </React.StrictMode>
);
