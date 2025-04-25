import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

import "../../style/concept.css";
import logoFeup from "../../images/logos/feup-white.png";
import logoIPDJ from "../../images/logos/ipdj.png";
import logoTunafe from "../../images/tunafe.png";
import Contacts from "./contacts";
import FollowUs from "./follow-us";

const Footer = () => (
	<footer style={{
		backgroundColor: "var(--dark-neutral)",
		color: "var(--light-neutral)",
		padding: "2rem 0", // adiciona espaço interno
	}}>
	
		<Container>
			{/* Contacts */}
			<Row className="justify-content-md-center">
				<Col xs={1} />
				<Col xs={10} md={3}>
					<Contacts />
				</Col>

				<Col xs={10} md={3} className="d-flex flex-column">
    				<FollowUs />
				</Col>

				<Col xs={10} md={3} className="d-flex flex-column justify-content-center align-items-start">
					<Row className="mb-2 ms-4">
						<Col xs="6" md="4" className="ps-0 text-start">
							<Image
								src={logoTunafe}
								alt="TUNAFE"
								fluid
								style={{
									maxHeight: "60px",
									height: "auto",
									width: "auto",
									objectFit: "contain",
								}}
							/>
						</Col>
						<Col xs="12" md="8" className="ps-0 pb-2 d-flex flex-column justify-content-end text-start" style={{ fontSize: "12px" }}>
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
								maxHeight: "60px",
								height: "auto",
								width: "auto",
								objectFit: "contain",
							}}
						/>
					</Row>
				</Col>
			</Row>
			<Row className="text-center">
				<small>TUNAFE - Desde 1991+1</small>
			</Row>
		</Container>
	</footer>
);

export default Footer;
