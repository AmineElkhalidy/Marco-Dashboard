import React from "react";

import Login from "./scenes/auth/Login";
import Dashboard from "./scenes/dashboard";
import CompanyDetails from "./scenes/company/CompanyDetails";
import Score from "./scenes/company/Score";
import Unique from "./scenes/company/Unique";
import AllCompanyInfo from "./scenes/company/AllCompanyInfo";

// React Router Components
import { Routes, Route } from "react-router-dom";

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
          <Route path="/companies" element={<Dashboard />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/company/:id/score" element={<Score />} />
          <Route path="/company/:id/unique" element={<Unique />} />
          <Route path="/company/:id/all-details" element={<AllCompanyInfo />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
