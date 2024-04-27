import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RepoPage from "./pages/RepoPage";
import ErrorPage from "./pages/ErrorPage";
import TestErrorBoundary from "./pages/TestErrorBoundary";
import SEO from "./components/SEO";
import AppOutlet from "./components/AppOutlet"
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
          render={() => (
            <SEO title="Home Page" description="All GitHub repositories" />
          )}
        />
        <Route
          path="/RepoPage"
          element={<AppOutlet />}
          render={() => (
            <SEO
              title="Clicked repository"
              description="One repository at a time"
            />
          )}
        >
          <Route path="/RepoPage/:repoName" element={<RepoPage />} />
        </Route>
        <Route
          path="/TestErrorBoundary"
          element={<TestErrorBoundary />}
          render={() => (
            <SEO title="Error Boundary" description="Test error boundary" />
          )}
        />
        <Route
          path="*"
          element={<ErrorPage />}
          render={() => <SEO title="Error 404" description="Error 404!!!" />}
        />
      </Route>
    </Routes>
  );
}

export default App;