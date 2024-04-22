import React from "react";
// import { useErrorBoundary } from "react-error-boundary";
import { Button } from "@chakra-ui/react";

const TestErrorBoundary = ({ error, resetErrorBoundary }) => {
  // const { resetBoundary } = useErrorBoundary();
  // console.log(`Error occured`, error);

  return (
    <div className="error-boundary-wrapper">
      <p className="error-message">
        Something went wrong. Try clicking the refresh page button to reload the
        application.
      </p>
      <Button onClick={resetErrorBoundary}>Refresh page</Button>
    </div>
  );
};

export default TestErrorBoundary;