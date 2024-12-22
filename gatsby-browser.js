/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { initNetlifyIdentity } from './src/scripts/netlify-identity';

export const onClientEntry = () => {
  initNetlifyIdentity();
};