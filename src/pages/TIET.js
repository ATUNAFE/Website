import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import xv from "../images/15_XVTIET_2017.png"
import xvi from "../images/16_XVITIET_2019.jpg"
import xvii from "../images/CartazXVII_v1c.png"

const eventsData = [
  {
    edition: "XVII Tudo Isto é Tuna",
    date: "26 e 27 de Novembro de 2021",
    location: "Casa de Vilar",
    participants: [
      "ATITUNA – Tuna Feminina da Faculdade de Psicologia e Ciências da Educação da UP",
      "Legislatuna – Tuna Feminina da Faculdade de Direito da UP",
      "TAFNUP – Tuna Académica Feminina de Nutrição da UP",
      "TFB – Tuna Feminina de Biomédicas",
    ],
    extraParticipants: [
      "TEUP – Tuna de Engenharia da U. P.",
      "TUNAFE – Tuna Feminina de Engenharia da U.P.",
    ],
    prizes: [
      "Melhor Claque - TAFNUP",
      "Melhor Pandeireta - Legislatuna",
      "Melhor Porta-estandarte - TFB",
      "Melhor Solista - Legislatuna",
      "Melhor Instrumental - TFB",
      "Tuna mais Tuga - TFB",
      "Tuna mais Solidária - TAFNUP",
      "Tuna mais Tuna - ATITUNA",
      "Melhor Tuna - Legislatuna",
    ],
    jury: [
      "Raquel Ribeiro (AndôrBiuleta)",
      "Sérgio Luí­s Pinto (Jet Lee)",
      "(Jinx)",
      "Professora Maria Inês Carvalho",
      "Sofia Malheiro (FotoMIX)",
    ],
    presentation: "Pedro Silva (Rodas)",
    image: xvii,
  },
  {
    edition: "XVI Tudo Isto é Tuna",
    date: "8 e 9 de Março de 2019",
    location: "Grande Auditório da FEUP",
    participants: [
      "Cientuna – Tuna Feminina de Ciências do Porto",
      "Legislatuna – Tuna Feminina da Faculdade de Direito da UP",
      "TFB – Tuna Feminina de Biomédicas",
      "TUFEMED – Tuna Feminina de Medicina do Porto",
    ],
    extraParticipants: [
      "TEUP – Tuna de Engenharia da U. P.",
      "TUNAFE – Tuna Feminina de Engenharia da U.P.",
    ],
    prizes: [
      "Tuna mais Solidária – TUFEMED",
      "Melhor Tema – Legislatuna",
      "Melhor Pandeireta – Legislatuna",
      "Melhor Porta-Estandarte – Cientuna",
      "Melhor Instrumental – Cientuna",
      "Melhor Solista – TFB",
      "Tuna mais Tuna – Cientuna",
      "Melhor Tuna – Legislatuna",
    ],
    jury: [
      "Paulo Nunes",
      "Professor Augusto Sousa",
      "Pedro Matos",
      "Ângela Pinheiro (Brilho)",
      "João Paulo Pereira",
    ],
    presentation: "Beatriz Costa",
    image: xvi,
  },
  {
    edition: "XV Tudo Isto é Tuna",
    date: "31 de Março e 1 de Abril de 2017",
    location: "Auditório do Seminário Diocesano de Vilar",
    participants: [
      "Legislatuna – Tuna Feminina da Faculdade de Direito da UP",
      "Sirigaitas – Tuna Feminina da Faculdade de Farmácia da UP",
      "TeSuna – Tuna Feminina da Escola Superior de Tecnologia da Saúde do Porto",
      "Tufemed – Tuna Feminina de Medicina do Porto",
    ],
    extraParticipants: [
      "TEUP – Tuna de Engenharia da U. P.",
      "TUNAFE – Tuna Feminina de Engenharia da U.P.",
    ],
    prizes: [
      "Melhor Claque - Legislatuna",
      "Melhor Pandeireta - Legislatuna",
      "Melhor Porta-estandarte - Legislatuna",
      "Melhor Solista - TeSuna",
      "Melhor Instrumental - TeSuna",
      "Tuna mais Tuna - Tufemed",
      "Melhor Banda Sonora - TeSuna",
      "Melhor Tuna - Legislatuna",
    ],
    jury: [
      "Sofia Braga (Sporte)",
      "Cristhian Caldeira",
      "Pedro Matos",
      "Professor Luís Melo",
      "Simão Ribeiro",
    ],
    presentation: "Ensemble Vocal 7ª arte",
    image: xv,
  },
];

const styles = {
  pageTitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "50px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
  },
  eventsList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  eventItem: (isEven) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "100px",
    borderRadius: "10x",
    backgroundColor: isEven ? "#f9f9f9" : "#995345",
    color: isEven ? "#000000" : "#ffffff",
    marginBottom: "20px",
  }),
  eventDetails: {
    flex: 1,
    display: "flex",
    maxHeight: "500px",
    flexDirection: "column",
    justifyContent: "space-between", 
    fontSize: "17px",
    fontFamily: "Source Sans Pro, sans-serif",
  },
  eventPoster: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  eventDetailsText: {
    margin: "4px 0", 
    fontSize: "14px",
  },
  subsectionTitle: {
    marginTop: "10px",
    fontSize: "18px",
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "0", // Remove the bottom margin here
  },
  sectionTitle: {
    textAlign: "left", 
    fontWeight: "500",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "50px",
    marginTop: "20px",
    marginBottom: "150px",
  },
  noBulletPoints: {
    listStyleType: "none",
    paddingLeft: 0,
  },
};


const Events = () => (
  <Layout>
    <Seo title="Tudo Isto é Tuna - Edições" />
    <h1 style={styles.pageTitle}>Tudo Isto é Tuna - Edições</h1>
    <div style={styles.eventsList}>
      {eventsData.map((event, index) => (
        <div
        key={index}
        style={styles.eventItem(index % 2 === 0)}
      >
        <div style={styles.eventPoster}>
          <h2 style={styles.sectionTitle}>{event.edition}</h2>
          <img
            src={event.image}
            style={styles.posterImage}
          />
          <p style={styles.eventDetailsText}><strong>{event.date}</strong></p>
          <p style={styles.eventDetailsText}><strong>{event.location}</strong></p>
        </div>
        <div style={styles.eventDetails}>
          <div>
            <p style={styles.subsectionTitle}>Tunas Participantes:</p>
            <ul style={styles.noBulletPoints}>
              {event.participants.map((participant, i) => (
                <li key={i}>{participant}</li>
              ))}
            </ul>
            <p style={styles.subsectionTitle}>Tunas Extra-Concurso:</p>
            <ul style={styles.noBulletPoints}>
              {event.extraParticipants.map((extra, i) => (
                <li key={i}>{extra}</li>
              ))}
            </ul>
          </div>
          <div>
            <p style={styles.subsectionTitle}>Prémios atribuídos:</p>
            <ul style={styles.noBulletPoints}>
              {event.prizes.map((prize, i) => (
                <li key={i}>{prize}</li>
              ))}
            </ul>
          </div>
          <div>
            <p style={styles.subsectionTitle}>Júri:</p>
            <ul style={styles.noBulletPoints}>
              {event.jury.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
          <p style={styles.subsectionTitle}> Apresentação </p>
            <ul style={styles.noBulletPoints}>
              <li>{event.presentation}</li>
            </ul>
        </div>
      </div>      
      ))}
    </div>
    <Link to="/">Voltar para a página inicial</Link>
  </Layout>
);

export default Events;
