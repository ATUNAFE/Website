import React, { useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImageMap } from "./image-context";

// Rewrite the `sizes` attribute on a Gatsby image data object so the browser
// picks the right srcSet candidate for where the image is actually rendered.
// `sizes` lives on the public IGatsbyImageData shape (images.fallback and
// images.sources[]), so only documented fields are touched.
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
	style = { width: "100%", height: "auto" },
	imgStyle = { width: "100%", height: "auto", objectFit: "contain" },
	...props
}) => {
	const imagesMap = useImageMap();
	const image = imagesMap.get(src);

	// A fixed px width is itself a reliable `sizes` hint (icons, watermarks…).
	const resolvedSizes =
		sizes ||
		(typeof style?.width === "string" && style.width.endsWith("px")
			? style.width
			: undefined);

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

	// Priority (LCP) images: rendered eagerly and already present in the SSR
	// HTML, so the browser's preload scanner fetches them immediately at high
	// priority. `fetchpriority` reinforces that where supported.
	return (
		<GatsbyImage
			{...props}
			image={imageData}
			alt={alt}
			loading={priority ? "eager" : loading || "lazy"}
			fetchpriority={priority ? "high" : undefined}
			style={style}
			imgStyle={imgStyle}
		/>
	);
};

export default CustomImage;
