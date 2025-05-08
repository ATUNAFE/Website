import React, { useState } from "react"
import { Dropdown, Col, Row, Container } from "react-bootstrap"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import HeaderLink from "./header-link"
import "../../style/layout.css"
import CustomImage from "../images/image"
import { IMAGE_FILENAMES } from "../../utils/constants"

const backgroundColor = "rgba(245, 245, 245, 0.5)"

const Header = ({ siteTitle = "" }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const toggleDropdown = () => setDropdownOpen(prevState => !prevState) // Toggle dropdown open/close

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
						backgroundColor,
						zIndex: 10,
						transition: "backgroundColor 0.5s ease",
					}}
				>
					<Col></Col>
					<Col
						style={{
							padding: "0.5rem",
							display: "flex",
							alignItems: "center", // vertical
							justifyContent: "center", // horizontal
							height: "77px", // mesmo valor do Row
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
								src={IMAGE_FILENAMES.logos.color.tunafe}
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
						<Dropdown
							show={dropdownOpen} // Controls visibility based on state
							onToggle={toggleDropdown} // Toggle dropdown on click
						>
							<Dropdown.Toggle
								className="dropdown-toggle"
								onClick={toggleDropdown}
							>
								Sobre Nós
							</Dropdown.Toggle>

							<Dropdown.Menu className="dropdown-menu">
								<Dropdown.Item
									className="dropdown-item"
									href="/about-us#historial"
								>
									Historial
								</Dropdown.Item>
								<Dropdown.Item href="/about-us#membros">Membros</Dropdown.Item>
								<Dropdown.Item href="/about-us#padrinhos">Padrinhos</Dropdown.Item>
								<Dropdown.Item href="/about-us#tiet">Tudo Isto É Tuna</Dropdown.Item>
								<Dropdown.Item href="/about-us#ensaios">Ensaios</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<HeaderLink link="/events" context="Eventos" />
						<HeaderLink link="/music" context="Música" />
					</Col>
					<Col id="mobileMenu">
						<Dropdown>
							<Dropdown.Toggle id="menuIcon">
								<FaBars />
							</Dropdown.Toggle>

							<Dropdown.Menu id="menu">
								<HeaderLink link="/about-us" context="Sobre Nós" />
								<HeaderLink link="/events" context="Eventos" />
								<HeaderLink link="/music" context="Música" />
							</Dropdown.Menu>
						</Dropdown>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header;
