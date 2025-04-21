import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/LogoTunafe.png";

const AboutUs = ({ data }) => {
    console.log("[AboutUs] content:");
    console.log(data);
    const content = data.markdownRemark.html;
    console.log(content);

  return (
    <Layout>
        <Seo title="AboutUs" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>

        <section className="Historial">

        <div>
            <h2>Historial</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, paddingRight: '20px'}}>
            <img style={{ width: '100%', height: 'auto' }} src={logo} />
            </div>
            <div style={{ flex: 2 }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        </section>
    </Layout>
    );
}

export default AboutUs

export const aboutUsQuery = graphql`
query AboutUsQuery {
  markdownRemark(frontmatter: { fileName: { eq: "historial" } }) {
    frontmatter {
      fileName
    }
    html
    id
  }
}
`