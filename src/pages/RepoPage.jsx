import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// import RepoCard from "../components/RepoCard";

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
        console.log(userRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <h1 className="pageTitle">Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <article key={repos.id}>
            <h2 className="title">{repos.name}</h2>
            <p className="description">{repos.description}</p>
            <p className="language">Main language: {repos.language}</p>
            <p>
              Created on:{" "}
              {new Date(`${repos.created_at}`).toLocaleDateString("en-uk", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
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
            <Button>
              <a href={repos.html_url}>View Soure Code on GitHub</a>
            </Button>
            <Button>
              <a href={repos.homepage}>Visit live site</a>
            </Button>
            <Link to="/">Back to repositories</Link>
          </article>
        </section>
      )}
    </main>
  );
};

export default RepoPage;