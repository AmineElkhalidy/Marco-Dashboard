import React from "react";

import Login from "./scenes/Login";

// React Router Components
import { Link, Routes, Route } from "react-router-dom";

// MUI
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
