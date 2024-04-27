import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/Layout.module.css"

export default function Layout() {
  return (
    <div className={styles.navigationWrapper}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TestErrorBoundary">Test Error Boundary</Link>
          </li>
          {/* <li> */}
          {/*   <Link to="/ErrorPage">Error 404</Link> */}
          {/* </li> */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}