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
    fontWeight: "bold",
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
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: isEven ? "#f9f9f9" : "#995345",
    color: isEven ? "#000000" : "#ffffff",
  }),
  eventDetails: {
    flex: 1,
    // textAlign: "left",  // Títulos agora alinhados à esquerda
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
  },
  eventPoster: {
    flex: "1 1 300px",
    //marginRight: "5px", // Espaço entre a imagem e o texto
    textAlign: "center",
  },
  posterImage: {
    width: "100%", // Imagem ocupa 100% do seu contêiner, mas com limite de tamanho
    maxWidth: "500px",  // Limita a largura máxima da imagem
    height: "auto",
    borderRadius: "8px",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: "20px",
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
            <img
              src={event.image}
              style={styles.posterImage}
            />
          </div>
          <div style={styles.eventDetails}>
            <h2>{event.edition}</h2>
            <p><strong>Data:</strong> {event.date}</p>
            <p><strong>Local:</strong> {event.location}</p>
            <div>
              <p style={styles.sectionTitle}>Tunas Participantes:</p>
              <ul>
                {event.participants.map((participant, i) => (
                  <li key={i}>{participant}</li>
                ))}
              </ul>
              <p style={styles.sectionTitle}>Tunas Extra-Concurso:</p>
              <ul>
                {event.extraParticipants.map((extra, i) => (
                  <li key={i}>{extra}</li>
                ))}
              </ul>
            </div>
            <div>
              <p style={styles.sectionTitle}>Prémios atribuídos:</p>
              <ul>
                {event.prizes.map((prize, i) => (
                  <li key={i}>{prize}</li>
                ))}
              </ul>
            </div>
            <div>
              <p style={styles.sectionTitle}>Júri:</p>
              <ul>
                {event.jury.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>
            <p style={styles.sectionTitle}>
              Apresentação: {event.presentation}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link to="/">Voltar para a página inicial</Link>
  </Layout>
);

export default Events;
