import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Image = props => {
  const { filename, alt, style = { margin: `0` } } = props

  const images = useStaticQuery(graphql`
    query ImageQuery {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const imageNode = images.allFile.edges.find(n => 
    n.node.relativePath.includes(filename)
  )

  if (!imageNode) {
    return null
  }

  const image = getImage(imageNode.node.childImageSharp.gatsbyImageData)

  return (
    <GatsbyImage
      alt={alt}
      style={style}
      image={image}
    />
  )
}

export default Image
