import React from "react";
import { Button } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404!!!</h1>
      <p>Looks like nothing and no one else is here...</p>
      <div></div>
      <Button>
        <a href="/">Back to Home</a>
      </Button>
    </div>
  );
};

export default ErrorPage;