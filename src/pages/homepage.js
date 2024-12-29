import React from "react"
import Seo from "../components/seo"

import Layout from "../components/layout"
import Banner from "../components/banner"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      id="HomepageBanner"
      style={{
        backgroundColor: "var(--dark-grey)",
        display: "flex",
        justifyContent: "center",
      }}
    >
    <Banner picturePath="bem-me-quer.png"/>
    </div>
    <div class="homepage-block">
      <h2>Queres juntar-te a nós? Aparece num dos nossos <a class="engineer-section-link" href="aboutus">ensaios</a>.</h2>
    </div>
    <div
      style={{
        backgroundColor: "var(--dark-grey)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem",
        color: "white",
      }}
    >
      <h2>Sobre nós</h2>
      <h2> Vem para a tuna feminina de engenharia</h2>
    </div>
    <div
      style={{
        backgroundColor: "var(--light)",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <h2>Contactos</h2>
    </div>
  </Layout>
)

export default HomePage
