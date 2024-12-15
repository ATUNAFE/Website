import React, { useState } from 'react';
import Seo from "../components/seo"

import Layout from "../components/layout"
import Banner from "../components/banner"

const HomePage = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Layout>
      <Seo title="Home" />
      {/* <div
        id="HomepageBanner"
        style={{
          backgroundColor: "var(--dark-grey)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Banner picturePath="tunafe.jpeg">
          <h1>Tuna Feminina de Engenharia da Universidade do Porto</h1>
        </Banner>
      </div> */}
      <div
        style={{
          backgroundColor: "#7ECC7A",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          color: "white",
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: "bold",
        }}
      > 
        <h2>Atualmente</h2>
      </div>
      <div
        style={{
          backgroundColor: "var(--dark-grey)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1rem",
          color: "white",
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: "bold",
        }}
      >
         <div style={{ display: "flex", alignItems: "center", marginLeft: "4rem" }}>
          <div style={{ position: "relative" }}>
          <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={toggleDropdown}
            >
              <h2 style={{ marginRight: "1rem", color: "white" }}>Magister</h2>
              <img
                src={isDropdownVisible 
                    ? require("../images/LogoTunafe.png").default 
                    : require("../images/LogoTunafe_PretoBranco.png").default}
                alt="Dropdown Button"
                style={{ width: "50px", height: "auto" }}
              />
            </button>
          {isDropdownVisible && (
            <div
              style={{
                backgroundColor: "transparent",
                minWidth: "160px",
                zIndex: 1,
                margin: "0rem",
                padding: "12px 16px",
                color: "black",
                display: "flex", // Use flexbox to align items horizontally
                alignItems: "center", // Center items vertically
              }}
            >
                <img
                src={require("../images/Dory.png").default}
                alt="Dropdown Content Image"
                style={{ width: "160px" , height: "160px", margin: "0" }}
                />
                <div style={{ marginLeft: "2rem" }}>
                    <p style={{ fontWeight: "bold", color: "white", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "22px" }}>Doryae C♯ius OptiPeculiaris P⭘lyphónicus</p>
                    <p style={{ color: "white", fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 300, margin: 0 }}>Nome: Ângela Filipa Ribeiro Coelho</p>
                    <p style={{ color: "white", fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 300, margin: 0 }}>Mestrado: Mestrado Integrado em Engenharia Informática e Computação</p>
                    <p style={{ color: "white", fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 300, margin: 0 }}>Madrinha: Nobis ArsDonum YOSarcóMinuciosus Assertivus</p>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                      <img
                        src={require("../images/MagisterCor.png").default}
                        alt="Small Icon"
                        style={{ width: "40px", height: "40px", marginRight: "10px"}} // Increase marginRight to add more space
                      />
                      <img
                        src={require("../images/BandolimCor.png").default}
                        alt="Second Small Icon"
                        style={{ width: "40px", height: "40px", marginRight: "5px"}}
                      />
                      <img
                        src={require("../images/ContrabaixoCor.png").default}
                        alt="Third Small Icon"
                        style={{ width: "40px", height: "40px"}}
                      />
                    </div>
                </div>
            </div> 
          )}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;