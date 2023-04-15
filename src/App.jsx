import React from "react";

import Login from "./scenes/auth/Login";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/Sidebar";

// React Router Components
import { Link, Routes, Route } from "react-router-dom";

// MUI
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main className="w-full h-full font-sans">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
