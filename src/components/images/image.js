import React from "react";
import Img from "gatsby-image";
import { useImageMap } from "./image-context";

const CustomImage = ({
    src,
    alt = "",
    plain = false,
    style = { width: "100%", height: "auto" },
    imgStyle = { width: "100%", height: "auto", objectFit: "contain" }
}) => {
    const imagesMap = useImageMap();
    const image = imagesMap.get(src);

    if (!image) {
        console.warn(`Image not found: ${src}`);
        return null;
    }

    if (plain) {
        return (
            <img
                src={image.publicURL}
                alt={alt}
                style={{
                    ...style,
                    objectFit: imgStyle.objectFit,
                }}
            />
        );
    }

    return (
        <Img
            fluid={image.fluid}
            alt={alt}
            style={style}
            imgStyle={imgStyle}
        />
    );
};

export default CustomImage;
