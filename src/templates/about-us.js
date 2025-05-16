import React from "react";
import Banner from "../components/banner";
import Godparents from "../components/about-us/godparents";
import History from "../components/about-us/history";
import TIET from "../components/about-us/tiet";
import Rehearsals from "../components/about-us/rehearsals";
import AllMembers from "../components/about-us/all-members";

const componentMap = {
    Banner,
    Godparents,
    AllMembers,
    History,
    TIET,
    Rehearsals
};

const AboutUs = ({ pageContext }) => {
    const { data } = pageContext;
    console.log(data);
    const { frontmatter } = data.markdownRemark;
    console.log("[FRONTMATTER]");
    console.log(frontmatter);
    // const { layout, history, godparents } = data;
    // console.log("history:");
    // console.log(history);
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