import React from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Button } from "@chakra-ui/react";

const TestErrorBoundary = ({ error, resetErrorBoundary }) => {
  const { resetBoundary } = useErrorBoundary();
  console.log(`Error occured`, error);

  const buttonStyle = {
    marginBlock: "2rem",
    color: "#FFF",
    backgroundColor: "#86C232",
  };

  return (
    <div
      style={{
        maxWidth: "768px",
        width: "100%",
        margin: "5rem auto",
        textAlign: "center",
      }}
    >
      <p style={{color: "#efefef"}}>
        Something went wrong. Click the refresh button to reload the
        application.
      </p>
      <Button style={buttonStyle} onClick={resetErrorBoundary}>
        Refresh
      </Button>
    </div>
  );
};

export default TestErrorBoundary;