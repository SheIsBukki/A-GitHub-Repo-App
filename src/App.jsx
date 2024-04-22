import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RepoPage from "./pages/RepoPage";
import ErrorPage from "./pages/ErrorPage";
import Repositories from "./components/Repositories";
import TestErrorBoundary from "./pages/TestErrorBoundary";
import SEO from "./components/SEO";
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
          element={<RepoPage />}
          render={() => (
            <SEO
              title="Paginated Repositories Page"
              description="One GitHub at a time"
            />
          )}
        />
        <Route path="/Repositories" element={<Repositories />} />
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