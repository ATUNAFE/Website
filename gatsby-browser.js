/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ImageProvider } from "./src/components/images/image-context";

export const wrapRootElement = ({ element }) => (
  <ImageProvider>{element}</ImageProvider>
);
