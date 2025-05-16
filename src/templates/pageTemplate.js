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
    Members
};

const AboutUs = ({ pageContext }) => {
    const { frontmatter } = pageContext.data;
    
    const children = frontmatter.components.map((component, index) => {
        const Component = componentMap[component.type];
        return Component ? <Component key={index} id={component.id} /> : null;
    });

    return (
        <Layout children={children} />
    );
}

export default AboutUs;