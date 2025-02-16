import netlifyIdentity from 'netlify-identity-widget';

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/admin/') {
    netlifyIdentity.init();
  }
};