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

const RepoCard = ({ currentRepos }) => {
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
      <Card variant="outline" size="sm" key={crypto.randomUUID()}>
        <CardHeader className="repoTitle">
          <Heading>{repo.name}</Heading>
        </CardHeader>
        <CardBody className="repoDescription">
          <Text>{repo.description}</Text>
        </CardBody>
        <CardFooter>
          <Text className="repoLanguage">Main language: {repo.language}</Text>
          <Button>
            <a href="/RepoPage">View more</a>
          </Button>
        </CardFooter>
      </Card>
    );
  });

  return (
    <div className={styles.repoCardWrapper}>
      {loading ? <p>Loading...</p> : <>{repositoryCards}</>}
    </div>
  );
};

export default RepoCard;