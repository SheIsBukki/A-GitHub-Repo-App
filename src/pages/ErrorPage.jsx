import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";
import Gif from "../assets/8njrd1.gif";

const ErrorPage = () => {
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.errorTitle}>Error 404</h1>
      <p>
        Sorry, looks like the page you're looking for doesn't exist...
      </p>
      <div>
        <img className={styles.gif} height={400} src={Gif} alt="a man talking to a brick wall"/>
      </div>
      <Button className={styles.errorButton}
        style={{
          marginBlock: "2rem",
          color: "#FFF ",
          backgroundColor: "#86C232",
        }}
      >
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;