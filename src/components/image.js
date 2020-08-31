import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default (props) => {

  const { filename, alt, sizes = '(max-width: 250px) 200px, (max-width: 450px) 400px, 800px' , style = {margin:`0`}} = props;

  const images = useStaticQuery(graphql`
    query ImageQuery {
      data: allFile {
        edges {
          node {
            relativePath
             childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = images.data.edges.find(n => {
  console.log(style);
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  return (
    <Img alt={alt} style= {style} fluid={{
      ...image.node.childImageSharp.fluid,
      sizes: sizes,
    }} />
  )
}