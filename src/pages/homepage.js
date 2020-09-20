import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Banner from "../components/banner"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepageBanner" 
      style={{backgroundColor:'var(--dark-grey)', display:'flex', justifyContent:'center'}}
    >
      <Banner picturePath="tunafe.png" style={{filter: 'saturate(50%)'}}>
        <h1>Tuna Feminina de Engenharia</h1>
      </Banner>
    </div>
    <div
      style={{backgroundColor:'var(--dark-grey)', display:'flex', justifyContent:'center'}}
    >

    </div>
  </Layout>
)

export default HomePage