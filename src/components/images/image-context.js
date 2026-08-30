import React, { createContext, useContext, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const ImageContext = createContext(new Map());

export const useImageMap = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const data = useStaticQuery(graphql`
        query AllImagesQuery {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 1600
                            quality: 68
                            placeholder: DOMINANT_COLOR
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    `);

    const imagesMap = useMemo(() => {
        const map = new Map();
        data.allFile.nodes.forEach(node => {
            const imageData = node.childImageSharp?.gatsbyImageData;
            if (imageData) map.set(node.relativePath, imageData);
        });
        return map;
    }, [data]);

    return (
        <ImageContext.Provider value={imagesMap}>
            {children}
        </ImageContext.Provider>
    );
};
