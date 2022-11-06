import Main from "./pages/Main";
import React from "react";
import { InfoProvider } from "./context/Fetch";
import { ThemeProvider } from "./context/Theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorBoundary from "./Error/ErrorBoundary";
import Sole from "./components/Sole";
import AB from "./pages/About";
const App = () => {
  return (
    <ThemeProvider>
      <InfoProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Main />
              </ErrorBoundary>
            }
          />
          <Route
            path="/Home"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="/sole"
            element={
              <ErrorBoundary>
                <Sole />
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <AB />
              </ErrorBoundary>
            }
          />
        </Routes>
      </InfoProvider>
    </ThemeProvider>
  );
};

export default App;
