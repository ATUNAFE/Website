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
					className="d-flex justify-content-center align-items-center py-5"
					style={{
						backgroundColor: section.backgroundColor,
						color: section.color,
					}}
				>
					{
						section.type === "navigation" ? (
							<>
								{
									section.items.map((item, idx) => (
										<Row
											key={idx}
											className="w-100 align-items-center justify-content-center"
											onClick={() => {
												const el = document.getElementById(item.link)
												if (el) {
													const yOffset = -75
													const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

													window.scrollTo({ top: y, behavior: "smooth" })
												}
											}}

											style={{ cursor: "pointer" }}
										>
											<Col xs="auto" className="d-flex align-items-center justify-content-center">
												<CustomImage
													src={item.icon}
													style={{ width: "40px", height: "40px" }}
													imgStyle={{ objectFit: "cover" }}
												/>
											</Col>
											<Col xs="auto" className="d-flex align-items-center justify-content-center">
												<h4 className="mb-0">{item.title}</h4>
											</Col>
										</Row>
									))
								}
							</>
						) :
							section.type === "text" ? (
								<h3>{section.text}</h3>
							) : null
					}
				</Container>
			))
			}
		</>
	);
};

export default Banner;
