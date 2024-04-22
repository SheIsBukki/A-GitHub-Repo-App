import React from "react";
import { Button } from "@chakra-ui/react";
// import RepoPage from "../pages/RepoPage";

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
    <div className="pagination-container">
      <ul className="pagination">
        <Button onClick={previousPage} className="page-number">
          Previous
        </Button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-number"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <Button
          onClick={nextPage}
          className="page-number
        "
        >
          Next
        </Button>
      </ul>
    </div>
  );
};

export default Paginate;