import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "../../style/concept.css";
import Contacts from "./contacts";
import FollowUs from "./follow-us";
import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const Footer = ({ magister, rp, email, address, socialMedia }) => (
	<footer style={{
		backgroundColor: "var(--dark-neutral)",
		color: "var(--light-neutral)",
		padding: "2rem 0",
	}}>

		<Container>
			{/* Contacts */}
			<Row className="justify-content-md-center">
				<Col xs={1} />
				<Col xs={10} md={3}>
					<Contacts
						magister={magister}
						rp={rp}
						email={email}
						address={address}
					/>
				</Col>

				<Col xs={10} md={3} className="d-flex flex-column">
					<FollowUs
						socialMedia={socialMedia}
					/>
				</Col>

				<Col xs={10} md={3} className="d-flex flex-column justify-content-center align-items-start">

					<Row className="mb-3 align-items-center">
						<Col xs="auto" md="auto" className="ps-0 pe-1">
							<CustomImage
								src={IMAGE_FILENAMES.logos.color.tunafe}
								alt="TUNAFE"
								style={{
									width: "70px",
									height: "auto",
								}}
								imgStyle={{
									objectFit: "contain",
								}}
							/>
						</Col>
						<Col xs="auto" md="auto" className="ps-0 text-start" style={{ fontSize: "12px" }}>
							<p className="mb-0">Tuna Feminina de Engenharia</p>
							<p className="mb-0">da Universidade do Porto</p>
						</Col>
					</Row>

					<Row className="mb-3 align-items-center">
						<Col xs="auto" md="auto" className="ps-0">
							<CustomImage
								src={IMAGE_FILENAMES.logos.white.feup}
								alt="FEUP"
								style={{
									width: "160px",
									height: "auto",
								}}
								imgStyle={{
									objectFit: "contain",
								}}
							/>
						</Col>
					</Row>

					<Row className="align-items-center">
						<Col xs="auto" md="auto" className="ps-0">
							<CustomImage
								src={IMAGE_FILENAMES.logos.color.ipdj}
								alt="IPDJ"
								style={{
									width: "200px",
									height: "auto",
								}}
								imgStyle={{
									objectFit: "contain",
								}}
							/>
						</Col>
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
