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
    NextEvents
};

const AboutUs = ({ pageContext }) => {
    const { frontmatter } = pageContext.data;

    return (
        <main>            
            <div className="d-flex flex-column">
                {frontmatter.components.map((component, index) => {
                    const Component = componentMap[component.type];
                    return Component ? <Component key={index} id={component.id} /> : null;
                })}
            </div>
        </main>
    );
    
}

export default AboutUs;