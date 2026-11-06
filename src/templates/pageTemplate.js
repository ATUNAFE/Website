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

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        name: "TUNAFE",
        alternateName: "Tuna Feminina de Engenharia da Universidade do Porto",
        url: "https://tunafe.netlify.app/",
        description: pageDescription,
        sameAs: [
            "https://www.instagram.com/tunafe",
            "https://www.facebook.com/tunafe",
            "https://www.youtube.com/@tunafe",
            "https://pt.linkedin.com/company/tunafe",
            "https://open.spotify.com/artist/60Hg2AzIe678S9Q8Guw1hI",
        ],
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
                {JSON.stringify(structuredData)}
            </script>
            {children}
        </Layout>
    );
};

export default Page;
