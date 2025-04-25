import React, { createContext, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

const ImageContext = createContext();

export const useImageMap = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const data = useStaticQuery(graphql`
        query AllImagesQuery {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                nodes {
                    relativePath
                    childImageSharp {
						fluid(maxWidth: 1920) {
							...GatsbyImageSharpFluid
						}
					}
                }
            }
        }
    `);

    const imagesMap = new Map();
    data.allFile.nodes.forEach(node => {
        imagesMap.set(node.relativePath, node.childImageSharp?.fluid);
    });

    return (
        <ImageContext.Provider value={imagesMap}>
            {children}
        </ImageContext.Provider>
    );
}