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

const withSiteUrl = (siteUrl, value) => {
    if (!value) return "";
    if (/^https?:\/\//i.test(value)) return value;
    const base = (siteUrl || "").replace(/\/$/, "");
    const path = value.startsWith("/") ? value : `/${value}`;
    return base ? `${base}${path}` : path;
};

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

    const metaDescription =
        description || site.siteMetadata.description || "";
    const canonical = withSiteUrl(site.siteMetadata.siteUrl, pathname);
    const imageUrl = withSiteUrl(
        site.siteMetadata.siteUrl,
        image || "/icons/icon-512x512.png"
    );
    const isHome = pathname === "/";
    const fullTitle =
        title || "TUNAFE | Tuna Feminina de Engenharia da Universidade do Porto";
    const ogTitle = isHome ? fullTitle : `${fullTitle} | ${site.siteMetadata.title}`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={fullTitle}
            titleTemplate={isHome ? `%s` : `%s | ${site.siteMetadata.title}`}
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
                {
                    property: `og:image`,
                    content: imageUrl,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:title`,
                    content: ogTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: imageUrl,
                },
                {
                    name: `google-site-verification`,
                    content: `b384c527a2c25196`,
                },
            ].concat(meta)}
        />
    );
}

Seo.defaultProps = {
    lang: `pt-PT`,
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
