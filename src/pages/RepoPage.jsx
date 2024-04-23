import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Paginate from "../components/Pagination";
// import RepoCard from "../components/RepoCard";

const RepoPage = () => {
  // // States to fetch the repositories
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
  }, [repos]);

  const Repositories = repos.map((repo) => {
    return (
      <article key={crypto.randomUUID()}>
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
          <a target="_blank" href={repo.html_url}>View Soure Code on GitHub</a>
        </Button>
        <Button>
          <Link target="_blank" to={repo.homepage}>Visit site</Link>
        </Button>
      </article>
    );
  });

  // // States to create pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(1);

  // // States to store the index of a page's first and last post
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = Repositories.slice(indexOfFirstRepo, indexOfLastRepo);

  //// This sets the currentPage to the number received
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(repos.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <h1 className="pageTitle">Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          {currentRepos}
          <Paginate
            reposPerPage={reposPerPage}
            totalRepos={Repositories.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </section>
      )}
    </main>
  );
};

export default RepoPage;