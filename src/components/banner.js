import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import CustomImage from "./images/image";

const Banner = ({ title, subtitles, icon, backgroundImage, backgroundColor }) => (
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
				src={backgroundImage.src}
				alt={backgroundImage.alt}
				style={{ height: '100%', width: '100%' }}
				imgStyle={{
					objectFit: 'cover',
					objectPosition: 'bottom',
					height: '100%',
					width: '100%',
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
								src={icon.src}
								alt={icon.alt}
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
			className="d-flex justify-content-center align-items-center py-5"
			style={{
				backgroundColor,
				color: "var(--light-neutral)",
			}}
		>
			{subtitles.map((subtitle, index) => (
				<Row
					key={index}
					className="w-100 align-items-center justify-content-center"
					onClick={() => {
						const el = document.getElementById(subtitle.anchor)
						if (el) {
						  const yOffset = -75 // ajusta conforme a altura do teu header
						  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
					  
						  window.scrollTo({ top: y, behavior: "smooth" })
						}
					  }}
					  
					style={{ cursor: "pointer" }}
				>
					<Col xs="auto" className="d-flex align-items-center justify-content-center">
						<CustomImage
							src={subtitle.icon.src}
							alt={subtitle.icon.alt}
							style={{ width: "40px", height: "40px" }}
							imgStyle={{ objectFit: "cover" }}
						/>
					</Col>
					<Col xs="auto" className="d-flex align-items-center justify-content-center">
						<h4 className="mb-0">{subtitle.text}</h4>
					</Col>
				</Row>
			))}

		</Container>
	</>
);

export default Banner;
