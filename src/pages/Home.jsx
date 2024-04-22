import React from "react";
import RepoCard from "../components/RepoCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.homepage}>
      <header>
        <h1>GitHub Repo Explorer</h1>
      </header>
      <RepoCard />
    </main>
  );
};

export default Home;