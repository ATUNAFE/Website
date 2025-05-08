import netlifyIdentity from 'netlify-identity-widget';
import React from "react";
import { ImageProvider } from "./src/components/images/image-context";

export const wrapRootElement = ({ element }) => (
  <ImageProvider>{element}</ImageProvider>
);

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/admin/') {
    netlifyIdentity.init();
  }
};
