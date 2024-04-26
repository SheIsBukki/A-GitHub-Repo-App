import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404!!!</h1>
      <p>Looks like nothing and no one else is here...</p>
      <p className="errorCode-and-Msg">{error.status}: {error.statusText}</p>
      <div></div>
      <Button>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;