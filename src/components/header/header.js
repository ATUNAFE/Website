import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Col, Row, Container } from "react-bootstrap";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FaBars } from "react-icons/fa";

import HeaderLink from "./header-link";
import CustomImage from "../images/image";
import * as styles from "../../style/header.module.css";

const Header = () => {
	const [openDropdown, setOpenDropdown] = useState(null);
	const closeDropdownTimeout = useRef(null);

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

	const openDropdownMenu = (link) => {
		clearTimeout(closeDropdownTimeout.current);
		setOpenDropdown(link);
	};

	const scheduleDropdownClose = () => {
		clearTimeout(closeDropdownTimeout.current);
		closeDropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
	};

	const toggleDropdown = (link, show) => {
		clearTimeout(closeDropdownTimeout.current);
		setOpenDropdown(show ? link : null);
	};

	useEffect(() => () => clearTimeout(closeDropdownTimeout.current), []);

	if (!content) return <p>⚠️ Content not found for header.</p>;

	return (
		<header className={styles.header}>
			<Container fluid style={{ margin: "0", padding: "0", width: "100%" }}>
				<Row
					style={{
						margin: "0",
						padding: "0",
						height: "77px",
						width: "100%",
						position: "fixed",
						backgroundColor: content.frontmatter.backgroundColor,
						"--header-background": content.frontmatter.backgroundColor,
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
							onClick={(event) => {
								if (
									event.button !== 0 ||
									event.metaKey ||
									event.ctrlKey ||
									event.shiftKey ||
									event.altKey ||
									window.location.pathname !== "/"
								) {
									return;
								}

								event.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
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
					<Col id="siteMenu" className={styles.siteMenu}>
						{content.frontmatter.menu.map((section, index) => (
							section.type === "link" ?
								(
									<HeaderLink key={index} link={section.link} context={section.text} />
								) :
								section.type === "dropdown" ?
									(
										<Dropdown
											key={section.link}
											show={openDropdown === section.link}
											onToggle={(show) => toggleDropdown(section.link, show)}
											onMouseEnter={() => openDropdownMenu(section.link)}
											onMouseLeave={scheduleDropdownClose}
										>
											<Dropdown.Toggle
												className={styles.dropdownToggle}
											>
												{section.text}
											</Dropdown.Toggle>
											<Dropdown.Menu
												className={styles.dropdownMenu}
												onMouseEnter={() => openDropdownMenu(section.link)}
												onMouseLeave={scheduleDropdownClose}
											>
												{section.items.map((item) => (
													<Dropdown.Item
														key={item.link}
														className={styles.dropdownItem}
														as={Link}
														to={item.link}
													>
														{item.text}
													</Dropdown.Item>
												))}
											</Dropdown.Menu>
										</Dropdown>
									) : null
						))}
					</Col>
					<Col id="mobileMenu" className={styles.mobileMenu}>
						<Dropdown>
							<Dropdown.Toggle id="menuIcon" variant="link" className={styles.menuIcon}>
								<FaBars />
							</Dropdown.Toggle>

							<Dropdown.Menu id="menu" align="end" className={styles.mobileMenuDropdown}>
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
