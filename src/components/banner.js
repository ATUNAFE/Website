import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import CustomImage from "./images/image";

const Banner = ({ title, subtitle, icon, backgroundImage, backgroundColor }) => (
	<>
		<div
			style={{
				position: "relative",
				height: "50vh",
				overflow: "hidden",
				width: "100%",
			}}
		>
			<CustomImage
				src={backgroundImage}
				alt="Members Background"
				style={{
					objectFit: "cover",
					objectPosition: "bottom",
					height: "100%",
					width: "100%",
				}}
			/>

			{/* Title and Icon Container */}
			<div
				className="position-absolute w-100"
				style={{
					top: "50%",
					transform: "translateY(-50%)",
					padding: "0 20px",
				}}
			>
				<Container>
					<Row className="align-items-center justify-content-center text-center">
						<Col xs="auto" className="d-flex align-items-center gap-3">
							<CustomImage
								src={icon}
								alt="TUNAFE"
								style={{
									width: "100px",
									height: "100px",
									objectFit: "cover",
								}}
							/>
							<h3
								style={{
									fontSize: "3rem",
									fontWeight: "bold",
									color: "var(--light-neutral)",
									margin: 0,
								}}
							>
								{title}
							</h3>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
		<Container
			fluid
			className="d-flex justify-content-center align-items-center p-5"
			style={{
				backgroundColor,
				color: "var(--light-neutral)",
			}}
		>
			<Row className="w-100 text-center">
				<Col>
					<h4>
						{subtitle}
					</h4>
				</Col>
			</Row>
		</Container>
	</>
);

export default Banner;
