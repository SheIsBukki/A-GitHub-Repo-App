import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "../styles/Pagination.module.css";

const Paginate = ({
  reposPerPage,
  totalRepos,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      <ul className="pagination">
        <Button className={styles.paginationButton} onClick={previousPage}>
          Previous
        </Button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={styles.pageNumber}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <Button className={styles.paginationButton} onClick={nextPage}>
          Next
        </Button>
      </ul>
    </div>
  );
};

export default Paginate;