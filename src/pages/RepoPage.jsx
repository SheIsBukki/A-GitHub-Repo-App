import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// import RepoCard from "../components/RepoCard";

const RepoPage = () => {
  // // States to fetch the repositories
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { repoId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/sheisbukki/repos`)
      .then((response) => response.json())
      .then((userRepos) => {
        setRepos(userRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [repos]);

  const Repositories = repos.map((repo) => {
    return (
      <article key={repo.id}>
        <h2 className="title">{repo.name}</h2>
        <p className="description">{repo.description}</p>
        <p className="language">Main language: {repo.language}</p>
        <p>
          Created on:{" "}
          {new Date(`${repo.created_at}`).toLocaleDateString("en-uk", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>
          Pushed to GitHub on:{" "}
          {new Date(`${repo.pushed_at}`).toLocaleDateString("en-uk", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>
          Last updated on:{" "}
          {new Date(`${repo.updated_at}`).toLocaleDateString("en-uk", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <Button>
          <a href={repo.html_url}>View Soure Code on GitHub</a>
        </Button>
        <Button>
          <a href={repo.homepage}>Visit live site</a>
        </Button>
        <Link to="/">Back to repositories</Link>
      </article>
    );
  });

  return (
    <main>
      <h1 className="pageTitle">Repositories</h1>
      {loading ? <p>Loading...</p> : <section>{Repositories}</section>}
    </main>
  );
};

export default RepoPage;