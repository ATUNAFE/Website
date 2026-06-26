import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomImage from "./images/image";
import { graphql, useStaticQuery } from "gatsby";

const Banner = ({ id }) => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: {frontmatter: {id: {regex: "/banner/"}}}) {
				nodes {
					frontmatter {
						id
						title {
							text
							icon
						}
						backgroundImage
						sections {
							type
							backgroundColor
							color
							items {
								title
								icon
								link
							}
							text
						}
					}
				}
			}
		}	
	`);

	const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

	if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

	return (
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
					src={content.frontmatter.backgroundImage}
					style={{ height: '100%', width: '100%' }}
					imgStyle={{
						objectFit: 'cover',
						objectPosition: 'bottom',
						height: '100%',
						width: '100%',
					}}
				/>
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
									src={content.frontmatter.title.icon}
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
									{content.frontmatter.title.text}
								</h3>
							</Col>
						</Row>
					</Container>
				</div>
			</div>

			{content.frontmatter.sections.map((section, index) => (
				<Container
					key={index}
					fluid
					className="py-5"
					style={{
						backgroundColor: section.backgroundColor,
						color: section.color,
						overflow: "hidden"
					}}
				>
					{
						section.type === "navigation" ? (
							<Container>
								<style>
									{`
										.nav-scroll-container::-webkit-scrollbar {
											display: none;
										}
										
										/* ESTILOS DESKTOP (ÍCONES MAIORES) */
										@media (min-width: 768px) {
											.nav-scroll-container {
												justify-content: center !important;
												gap: 40px;
											}
											.nav-item-col {
												width: 180px !important;
											}
											.nav-icon-box {
												width: 100px !important;
												height: 100px !important;
											}
											.nav-icon-img {
												width: 80px !important;
												height: 80px !important;
											}
											.nav-title-text {
												font-size: 1.3rem !important;
											}
										}
									`}
								</style>
								<Row 
									className="nav-scroll-container flex-nowrap overflow-auto gx-0 pb-2"
									style={{ 
										justifyContent: "flex-start", 
										WebkitOverflowScrolling: "touch",
										msOverflowStyle: "none",
										scrollbarWidth: "none"
									}}
								>
									{section.items.map((item, idx) => (
										<Col
											key={idx}
											xs="auto"
											className="nav-item-col d-flex flex-column align-items-center px-3"
											onClick={() => {
												const el = document.getElementById(item.link)
												if (el) {
													const yOffset = -75
													const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
													window.scrollTo({ top: y, behavior: "smooth" })
												}
											}}
											style={{ 
												cursor: "pointer", 
												flex: "0 0 auto", 
												width: "125px" 
											}}
										>
											<div className="nav-icon-box mb-2 d-flex align-items-center justify-content-center" 
												 style={{ height: "65px", width: "65px" }}>
												<CustomImage
													src={item.icon}
													className="nav-icon-img"
													style={{ width: "45px", height: "45px" }} // base mobile
													imgStyle={{ objectFit: "contain" }}
												/>
											</div>
											<h4 
												className="nav-title-text mb-0 text-center" 
												style={{ 
													fontSize: "1rem", 
													fontWeight: "600",
													lineHeight: "1.2"
												}}
											>
												{item.title}
											</h4>
										</Col>
									))}
								</Row>
							</Container>
						) :
						section.type === "text" ? (
							<h3 className="text-center">{section.text}</h3>
						) : null
					}
				</Container>
			))}
		</>
	);
};

export default Banner;