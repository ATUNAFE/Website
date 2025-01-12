/* import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "./image"


const Banner = props => {
  const backgroundQuery = useStaticQuery(graphql`
    query BackgroundQuery {
      data: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = backgroundQuery.data.edges.find(n => {
    return n.node.relativePath.includes(props.picturePath)
  })

  if (!image) {
    return null
  }

  return (
      /*<Img
      className="banner"
      //alt={alt}
      style={props.style}
      fluid={{
        ...image.node.childImageSharp.fluid,
      }}
    />
    
    <Image
    filename="tunafe.png"
    style={{ margin: "0.5rem", width: "12rem" }}
  />
  )
}

export default Banner
 */