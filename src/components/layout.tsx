/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

import "react-multi-email/style.css";
import "../styles/global.scss";


const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="404" viewBox="0 0 291.15 129.784">
          <path d="M76.05 113.384v-19.5h12.3v-22.2h-12.3v-69.3h-26.4L0 73.184v20.7h48.9v19.5zm-25.35-41.7H28.5l22.2-34.8zm228.15 41.7v-19.5h12.3v-22.2h-12.3v-69.3h-26.4l-49.65 70.8v20.7h48.9v19.5zm-25.35-41.7h-22.2l21.9-34.8h.3z" />
          <path d="M146.136 129.784a64.274 64.274 0 0 1-39.056-12.708 62.346 62.346 0 0 1-23.97-36.358 64.565 64.565 0 0 1-1.764-20.117 65.239 65.239 0 0 1 36-53.969 65.946 65.946 0 0 1 51.612-2.558 61.545 61.545 0 0 1 18.331 10.786 60.674 60.674 0 0 1 16.05 20.742 56.4 56.4 0 0 1 5.724 19.287c.372 4.186 1.05 8.405.839 12.571a66.244 66.244 0 0 1-10.046 32.83 62.444 62.444 0 0 1-28.293 24.269 54.79 54.79 0 0 1-17.56 4.564q-3.934.323-7.867.661zm-.074-37.173c15.605.358 26.782-12.4 26.88-27.181.109-16.549-10.985-27.857-25.866-28.466-16.057-.656-28.411 12.851-28.839 26.968-.496 16.275 12.386 29.136 27.824 28.679z" />
        </symbol>
      </svg>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
