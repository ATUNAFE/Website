import React from "react";
import Img from "gatsby-image";
import { useImageMap } from "./image-context";

const CustomImage = ({ src, alt = '', style = { width: '100%', height: 'auto' }, imgStyle = { width: '100%', height: 'auto', objectFit: 'contain' } }) => {
	const imagesMap = useImageMap();
	const image = imagesMap.get(src);

	if (!image) {
		console.warn(`Image not found: ${src}`);
		return null;
	}

	return (
		<Img
			fluid={image}
			alt={alt}
			style={style} // styles applied to the wrapper div
			imgStyle={imgStyle} // styles applied to the img tag itself
		/>
	);
};

export default CustomImage;