import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Banner from "../components/banner"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{backgroundColor:'var(--dark-grey)', display:'flex', justifyContent:'center'}}
    >
      <Banner className="homepageBanner" picturePath="tunafe.png">
        
      </Banner>
    </div>
  </Layout>
)

export default HomePage