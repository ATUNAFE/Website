import React, { useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImageMap } from "./image-context";

const withSizes = (image, sizes) => {
    if (!image || !sizes) return image;

    const { fallback, sources = [] } = image.images || {};

    return {
        ...image,
        images: {
            fallback: fallback ? { ...fallback, sizes } : undefined,
            sources: sources.map(source => ({ ...source, sizes })),
        },
    };
};

const CustomImage = ({
    src,
    alt = "",
    sizes,
    loading,
    priority = false,
    variant,
    style = { width: "100%", height: "auto" },
    imgStyle = { width: "100%", height: "auto", objectFit: "contain" },
    ...props
}) => {
    const imageMaps = useImageMap();
    const image =
        variant === "instrument"
            ? imageMaps.instrumentIcons.get(src)
            : imageMaps.images.get(src);

    const resolvedSizes =
        sizes ||
        (typeof style?.width === "string" && style.width.endsWith("px")
            ? style.width
            : "100vw");

    const imageData = useMemo(
        () => withSizes(image, resolvedSizes),
        [image, resolvedSizes]
    );

    if (!image) {
        if (process.env.NODE_ENV !== "production") {
            console.warn(`Image not found: ${src}`);
        }
        return null;
    }

    const effectiveLoading = priority ? "eager" : loading || "lazy";

    return (
        <GatsbyImage
            {...props}
            image={imageData}
            alt={alt}
            loading={effectiveLoading}
            fetchPriority={priority ? "high" : undefined}
            style={style}
            imgStyle={imgStyle}
            decoding="async"
        />
    );
};

export default CustomImage;
