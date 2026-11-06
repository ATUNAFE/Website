/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, title, image, pathname }) {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    locale
                    keywords
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description || "";
    const canonical =
        pathname && site.siteMetadata.siteUrl
            ? `${site.siteMetadata.siteUrl.replace(/\/$/, "")}${pathname}`
            : site.siteMetadata.siteUrl;
    const imageUrl =
        image && site.siteMetadata.siteUrl && !/^https?:\/\//i.test(image)
            ? `${site.siteMetadata.siteUrl.replace(/\/$/, "")}${image}`
            : image;
    const fullTitle = title || site.siteMetadata.title;
    const ogTitle = title
        ? `${title} | ${site.siteMetadata.title}`
        : site.siteMetadata.title;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={fullTitle}
            titleTemplate={title ? `%s | ${site.siteMetadata.title}` : `%s`}
            link={
                canonical
                    ? [
                          {
                              rel: "canonical",
                              href: canonical,
                          },
                      ]
                    : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: (site.siteMetadata.keywords || []).join(", "),
                },
                {
                    name: `robots`,
                    content: `index,follow,max-image-preview:large`,
                },
                {
                    property: `og:site_name`,
                    content: site.siteMetadata.title,
                },
                {
                    property: `og:title`,
                    content: ogTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                ...(canonical
                    ? [
                          {
                              property: `og:url`,
                              content: canonical,
                          },
                      ]
                    : []),
                {
                    property: `og:locale`,
                    content: site.siteMetadata.locale || `pt_PT`,
                },
                ...(imageUrl
                    ? [
                          {
                              property: `og:image`,
                              content: imageUrl,
                          },
                          {
                              name: `twitter:image`,
                              content: imageUrl,
                          },
                      ]
                    : []),
                {
                    name: `twitter:card`,
                    content: imageUrl ? `summary_large_image` : `summary`,
                },
                {
                    name: `twitter:title`,
                    content: ogTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
}

Seo.defaultProps = {
    lang: `pt`,
    meta: [],
    description: ``,
    title: ``,
    image: ``,
    pathname: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
};

export default Seo;
