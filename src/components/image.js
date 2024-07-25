import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Image = (props) => {
// export default (props) => {

  const { filename, alt, style = {margin:`0`}} = props;

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
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  return (
    <Img alt={alt} style= {style} fluid={{
      ...image.node.childImageSharp.fluid
    }} />
  )
}

export default Image;