import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

import "../style/concept.css";
import logoFeup from "../images/Logos/LogoFEUPbranco.png";
import logoIPDJ from "../images/Logos/LogoIPDJ.png";
import logoTunafe from "../images/LogoTunafe.png";
import Contacts from "./contacts";
import FollowUs from "./follow-us";

const Footer = () => (
	<footer style={{
		backgroundColor: "var(--dark-neutral)",
		color: "var(--light-neutral)"
	}}>
		<Container className="p-6" style={{ margin: "0", padding: "0", height: "100%" }}>
			{/* Contacts */}
			<Row className="justify-content-md-center">
				<Col>
					<h5>Contactos</h5>
					<Contacts />
				</Col>

				<Col className="d-flex flex-column">
  					<h5>Segue-nos</h5>
  					<div className="d-flex flex-column justify-content-center flex-grow-1">
    					<FollowUs />
  					</div>
				</Col>

				<Col className="d-flex flex-column justify-content-center align-items-start">
					<Row className="mb-2 ms-4">
						<Col xs="6" md="4" className="ps-0 text-start">
							<Image
								src={logoTunafe}
								alt="TUNAFE"
								fluid
								style={{
									maxHeight: "70px",
									height: "auto",
									width: "auto",
									objectFit: "contain",
								}}
							/>
						</Col>
						<Col xs="12" md="8" className="ps-0 text-start">
								<p className="mb-0">Tuna Feminina de Engenharia</p>
								<p className="mb-0">da Universidade do Porto</p>
						</Col>
					</Row>
					<Row className="mb-2 ms-4">
						<Image
							className="ps-0"
							src={logoFeup}
							alt="FEUP"
							fluid
							style={{
								maxHeight: "70px",
								height: "auto",
								width: "auto",
								objectFit: "contain",
							}}
						/>
					</Row>
					<Row className="ms-4">
						<Image
							src={logoIPDJ}
							alt="IPDJ"
							fluid
							style={{
								maxHeight: "70px",
								height: "auto",
								width: "auto",
								objectFit: "contain",
							}}
						/>
					</Row>
				</Col>
			</Row>
			<Row>
				<span>TUNAFE - Desde 1991+1</span>
			</Row>
		</Container>
	</footer>
);

export default Footer;
