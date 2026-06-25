import React from "react";
import { Dropdown, Col, Row, Container } from "react-bootstrap";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FaBars } from "react-icons/fa";

import HeaderLink from "./header-link";
import "../../style/layout.css";
import CustomImage from "../images/image";

const Header = () => {
	const data = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: {id: {regex: "/header/"}}) {
				frontmatter {
					id
					title {
						text
					}
					image
					backgroundColor
					color
					menu {
						type
						text
						link
						items {
							text
							link
						}
					}
				}
			}
		}
	`);

	const content = data.markdownRemark;

	if (!content) return <p>⚠️ Content not found for header.</p>;

	return (
		<header>
			<Container fluid style={{ margin: "0", padding: "0", width: "100%" }}>
				<Row
					style={{
						margin: "0",
						padding: "0",
						height: "77px",
						width: "100%",
						position: "fixed",
						backgroundColor: content.frontmatter.backgroundColor,
						color: content.frontmatter.color,
						zIndex: 1100,
						transition: "backgroundColor 0.5s ease",
					}}
				>
					<Col></Col>
					<Col
						style={{
							padding: "0.5rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "77px",
						}}
					>
						<Link
							to="/"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<CustomImage
								src={content.frontmatter.image}
								alt="TUNAFE"
								style={{
									width: "100px",
									margin: "auto"
								}}
								imgStyle={{
									objectFit: "contain",
									height: "100%",
									width: "100%"
								}}
							/>


						</Link>
					</Col>
					<Col id="siteMenu">
						{content.frontmatter.menu.map((section, index) => (
							section.type === "link" ?
								(
									<HeaderLink key={index} link={section.link} context={section.text} />
								) :
								section.type === "dropdown" ?
									(
										<Dropdown className="siteDropdown">
											<Dropdown.Toggle
												key={index}
												className="dropdown-toggle"
											>
												{section.text}
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu">
												{section.items.map((item, idx) => (
													<Dropdown.Item
														key={idx}
														className="dropdown-item"
														href={item.link}
													>
														{item.text}
													</Dropdown.Item>
												))}
											</Dropdown.Menu>
										</Dropdown>
									) : null
						))}
					</Col>
					<Col id="mobileMenu">
						<Dropdown>
							<Dropdown.Toggle id="menuIcon">
								<FaBars />
							</Dropdown.Toggle>

							<Dropdown.Menu id="menu" align="end">
								{content.frontmatter.menu.map((section, index) =>
									<HeaderLink key={index} link={section.link} context={section.text} />
								)}
							</Dropdown.Menu>
						</Dropdown>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header;
