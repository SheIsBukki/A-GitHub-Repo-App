import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "../styles/RepoPage.module.css";

const RepoPage = () => {
  // // States to fetch the repositories
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { repoName } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/repos/sheisbukki/${repoName}`)
      .then((response) => response.json())
      .then((userRepos) => {
        setRepos(userRepos);
        // console.log(userRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <h1 className={styles.pageTitle}>Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <article className={styles.repo} key={repos.id}>
            <div className={styles.smallViewport}>
              <h2>Repository title: {repos.name}</h2>
              <p>Repository description: {repos.description}</p>
              <p>Main language: {repos.language}</p>
              <p>
                Pushed to GitHub on:{" "}
                {new Date(`${repos.pushed_at}`).toLocaleDateString("en-uk", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p>
                Last updated on:{" "}
                {new Date(`${repos.updated_at}`).toLocaleDateString("en-uk", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className={styles.repoTable}>
              <div className={styles.repoTitle}>
                <h2 className={styles.verticalLine}>Repository title</h2>
                <h2 className={styles.repoInfo}>{repos.name}</h2>
              </div>
              <div className={styles.repoDescription}>
                <p className={styles.verticalLine}>Description</p>
                <p className={styles.repoInfo}>{repos.description}</p>
              </div>
              <div className={styles.repoLanguage}>
                <p className={styles.verticalLine}>Main language</p>
                <p className={styles.repoInfo}>{repos.language}</p>
              </div>
              <div className={styles.createdOn}>
                <p className={styles.verticalLine}>Created on</p>
                <p className={styles.repoInfo}>
                  {new Date(`${repos.created_at}`).toLocaleDateString("en-uk", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className={styles.pushedOn}>
                <p className={styles.verticalLine}>Pushed to GitHub on</p>
                <p className={styles.repoInfo}>
                  {new Date(`${repos.pushed_at}`).toLocaleDateString("en-uk", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className={styles.updatedOn}>
                <p className={styles.verticalLine}>Last updated on</p>
                <p className={styles.repoInfo}>
                  {new Date(`${repos.updated_at}`).toLocaleDateString("en-uk", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className={styles.buttonsWrapper}>
              <Button>
                <a href={repos.html_url}>View Soure Code on GitHub</a>
              </Button>
              <Button>
                <a href={repos.homepage}>Visit live site</a>
              </Button>
            </div>
          </article>
          <Button className={styles.backToHome}>
            <Link to="/">Back to repositories</Link>
          </Button>
        </section>
      )}
    </main>
  );
};

export default RepoPage;