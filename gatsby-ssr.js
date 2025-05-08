/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ImageProvider } from "./src/components/images/image-context";

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			key="google-fonts"
			href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Source+Sans+Pro:wght@300;600&display=swap"
			rel="stylesheet"
		/>
	]);
};

export const wrapRootElement = ({ element }) => (
	<ImageProvider>{element}</ImageProvider>
);
