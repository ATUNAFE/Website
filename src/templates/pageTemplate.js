import React from "react";
import Banner from "../components/banner";
import Godparents from "../components/about-us/godparents";
import History from "../components/about-us/history";
import TIET from "../components/about-us/tiet";
import Rehearsals from "../components/about-us/rehearsals";
import AllMembers from "../components/about-us/all-members";
import HeroSection from "../components/homepage/hero-section";
import FollowUsSection from "../components/homepage/follow-us-section";
import PhotoAlbum from "../components/homepage/photo-album";
import NextEvents from "../components/homepage/next-events";
import Layout from "../components/layout";
import Members from "../components/members/members";
import Discography from "../components/music/discography";
import Repertoire from "../components/music/repertoire";
import Events from "../components/events/events";
import TietEditions from "../components/tiet/tietEditions";
import Seo from "../components/seo";

import "../style/concept.css";
import "bootstrap/dist/css/bootstrap.min.css";

const componentMap = {
    Banner,
    Godparents,
    AllMembers,
    History,
    TIET,
    Rehearsals,
    HeroSection,
    FollowUsSection,
    PhotoAlbum,
    NextEvents,
    Members,
    Discography,
    Repertoire,
    Events,
    TietEditions,
};

const Page = ({ pageContext }) => {
    const { frontmatter } = pageContext.data;
    const seo = pageContext.seo || {};
    const pageTitle = seo.title || frontmatter?.title?.text || "TUNAFE";
    const pageDescription =
        seo.description ||
        "Site oficial da TUNAFE, Tuna Feminina de Engenharia da Universidade do Porto.";

    const children = frontmatter.components.map((component, index) => {
        const Component = componentMap[component.type];
        return Component ? <Component key={index} id={component.id} /> : null;
    });

    const siteUrl = "https://tunafe.netlify.app";
    const canonical = seo.pathname ? `${siteUrl}${seo.pathname}` : `${siteUrl}/`;
    const logoUrl = `${siteUrl}/icons/icon-512x512.png`;

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "TUNAFE",
        alternateName: "Tuna Feminina de Engenharia da Universidade do Porto",
        url: `${siteUrl}/`,
        logo: logoUrl,
        image: logoUrl,
        description: pageDescription,
        sameAs: [
            "https://www.instagram.com/tunafe",
            "https://www.facebook.com/tunafe",
            "https://www.youtube.com/@tunafe",
            "https://pt.linkedin.com/company/tunafe",
            "https://open.spotify.com/artist/60Hg2AzIe678S9Q8Guw1hI",
        ],
    };

    const webSiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "TUNAFE",
        alternateName: "Tuna Feminina de Engenharia da Universidade do Porto",
        url: `${siteUrl}/`,
        inLanguage: "pt-PT",
        publisher: { "@id": `${siteUrl}/#organization` },
    };

    const pageData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: canonical,
        inLanguage: "pt-PT",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
    };

    const musicGroupData = {
        "@context": "https://schema.org",
        "@type": ["MusicGroup", "PerformingGroup"],
        "@id": `${siteUrl}/#musicgroup`,
        name: "TUNAFE",
        alternateName: "Tuna Feminina de Engenharia da Universidade do Porto",
        url: `${siteUrl}/`,
        description: pageDescription,
        genre: ["Tuna académica", "Música académica portuguesa"],
        foundingDate: "1994",
        location: {
            "@type": "Place",
            name: "Faculdade de Engenharia da Universidade do Porto",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Porto",
                addressCountry: "PT",
            },
        },
        parentOrganization: { "@id": `${siteUrl}/#organization` },
    };

    return (
        <Layout>
            <Seo
                title={pageTitle}
                description={pageDescription}
                pathname={seo.pathname}
                meta={[
                    {
                        name: "application-name",
                        content: "TUNAFE",
                    },
                ]}
            />
            <script type="application/ld+json">
                {JSON.stringify(organizationData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(webSiteData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(pageData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(musicGroupData)}
            </script>
            {children}
        </Layout>
    );
};

export default Page;
