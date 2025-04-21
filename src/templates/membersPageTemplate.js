import React from "react";
import { graphql } from "gatsby";

// Vamos por partes, primeiro vamos buscar os membros atuais

const membersType = [
    "magister",
    "mestreTunas",
    "tunas",
    "caloiras"
];

export default function MembersPageTemplate({ data }) {
    console.log("[MembersPageTemplate] data:");
    console.log(data);

    return (
        <div>
            Hello!
        </div>
    );
}

export const query = graphql`
query MembersQuery {
  magister: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/magister/"}}
  ) {
    nodes {
      frontmatter {
        date
        name
        nameC
        course
        godmother
        instruments
        picture
      }
    }
  }
}
`;