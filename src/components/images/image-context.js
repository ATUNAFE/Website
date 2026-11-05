import React, { createContext, useContext, useMemo } from "react";
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
						gatsbyImageData(
							layout: CONSTRAINED
							width: 1200
							quality: 58
							placeholder: DOMINANT_COLOR
							formats: [AUTO, WEBP]
						)
					}
                }
            }
            instrumentIcons: allFile(
                filter: {
					sourceInstanceName: { eq: "images" }
					relativePath: { regex: "/^instruments/" }
                }
            ) {
                nodes {
					relativePath
					childImageSharp {
					    gatsbyImageData(
					        layout: FIXED
					        width: 150
					        height: 150
					        quality: 100
					        placeholder: NONE
					        formats: [PNG]
					    )
					}
                }
            }
        }
    `);

    const imagesMap = useMemo(() => {
        const map = new Map();
        data.allFile.nodes.forEach(node => {
            const image = node.childImageSharp?.gatsbyImageData;
            if (image) map.set(node.relativePath, image);
        });

        const instrumentIconsMap = new Map();
        data.instrumentIcons.nodes.forEach(node => {
            const image = node.childImageSharp?.gatsbyImageData;
            if (image) instrumentIconsMap.set(node.relativePath, image);
        });

        return { images: map, instrumentIcons: instrumentIconsMap };
    }, [data]);

    return (
        <ImageContext.Provider value={imagesMap}>
            {children}
        </ImageContext.Provider>
    );
}