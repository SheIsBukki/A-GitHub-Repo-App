import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          {repos.map((repo) => {
            return (
              <article key={crypto.randomUUID()}>
                <h1>Repositories</h1>
                <h2 className="repoTitle">{repo.name}</h2>
                <p className="description">{repo.description}</p>
                <p className="language">Main language: {repo.language}</p>
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
                  <Link to={repo.html_url}>View Soure Code on GitHub</Link>
                </Button>
                <Button>
                  <Link to={repo.homepage}>Visit site</Link>
                </Button>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Repositories;

// <div>
//   <h1 className="repoTitle"> {name}</h1>
//   <p className="description">{description}</p>
//   <p className="language">Main language: {language}</p>
//   <P>Pushed to GitHub on: {pushed_at}</P>
//   <p>Last updated on: {updated_at}</p>
//   <p>View Soure Code on GitHub {html_url}</p>
//   <p>Visit site {homepage}</p>
// </div>
//
// updated_at
// pushed_at
// homepage
// html_url
// language
// name
// description
//
// Visit site will be the homepage, which is the vercel hosted site
// Last updated will be updated_at
// Pushed to GitHub on will be pushed_at
// View Source Cod on GitHub wil be html_url