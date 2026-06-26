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
                    // REMOVIDO: d-flex e justify-content (o Row cuidará disso agora)
					className="py-5" 
					style={{
						backgroundColor: section.backgroundColor,
						color: section.color,
                        overflow: "hidden"
					}}
				>
					{
						section.type === "navigation" ? (
                            // CORREÇÃO: Uma única Row para todos os itens
                            // flex-nowrap + overflow-auto permite scroll no mobile sem sobrepor
							<Row className="flex-nowrap overflow-auto justify-content-md-center gx-4 px-3">
								{
									section.items.map((item, idx) => (
										<Col 
                                            key={idx} 
                                            xs="auto" 
                                            className="d-flex flex-column align-items-center justify-content-center"
											onClick={() => {
												const el = document.getElementById(item.link)
												if (el) {
													const yOffset = -75
													const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
													window.scrollTo({ top: y, behavior: "smooth" })
												}
											}}
											style={{ cursor: "pointer", minWidth: "120px" }}
										>
                                            <div className="mb-2">
                                                <CustomImage
                                                    src={item.icon}
                                                    style={{ width: "50px", height: "50px" }}
                                                    imgStyle={{ objectFit: "contain" }}
                                                />
                                            </div>
											<h4 className="mb-0 text-center" style={{ fontSize: "1.1rem" }}>{item.title}</h4>
										</Col>
									))
								}
							</Row>
						) :
							section.type === "text" ? (
								<h3 className="text-center">{section.text}</h3>
							) : null
					}
				</Container>
			))
			}
		</>
	);
};

export default Banner;
