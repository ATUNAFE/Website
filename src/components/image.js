import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default (props) => {

  const { filename, type = 'default', alt, sizes = '(max-width: 250px) 200px, (max-width: 450px) 400px, 800px' , style = "{{maxHeight:'80px', maxWidth: '80px' }}"} = props;

  const images = useStaticQuery(graphql`
    query ImageQuery {
      data: allFile {
        edges {
          node {
            relativePath
            default: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            square: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
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
    <Img alt={alt} fluid={{
      ...image.node[type].fluid,
      sizes: sizes,
      style: style,
    }} />
  )
}