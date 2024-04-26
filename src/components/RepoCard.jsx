import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Home from "../pages/Home";
import styles from "../styles/RepoCard.module.css";
import RepoPage from "../pages/RepoPage";
import Paginate from "../components/Pagination";

const RepoCard = () => {
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

  const repositoryCards = repos.map((repo) => {
    return (
      <Card variant="outline" size="sm" key={repo.id}>
        <CardHeader className="repoTitle">
          <Heading>{repo.name}</Heading>
        </CardHeader>
        <CardBody className="repoDescription">
          <Text>{repo.description}</Text>
        </CardBody>
        <CardFooter>
          <Text className="repoLanguage">Main language: {repo.language}</Text>
          <Button>
            <Link to={`/RepoPage/${repo.name}`}>View more</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  });

  // // States to create pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(2);

  // // States to store the index of a page's first and last post
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repositoryCards.slice(indexOfFirstRepo, indexOfLastRepo);

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
    <div className={styles.repoCardWrapper}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          {currentRepos}
          <Paginate
            reposPerPage={reposPerPage}
            totalRepos={repositoryCards.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </section>
      )}
    </div>
  );
};

export default RepoCard;