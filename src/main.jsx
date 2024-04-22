import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider } from "@chakra-ui/react";
import TestErrorBoundary from "./pages/TestErrorBoundary";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={TestErrorBoundary}
      onReset={() => (location.href = "/")}
    >
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);