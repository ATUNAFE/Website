import React from "react";
import { graphql } from "gatsby";
import HomePage from "./homepage";
import "../style/concept.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Website({ data }) {
    console.log(data);
    const content = data.allMarkdownRemark.nodes;
    console.log(content);
    return (
        <HomePage />
    );
}

// Export page query
export const query = graphql`
query ContentPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        fileName
      }
      id
    }
  }
}
`