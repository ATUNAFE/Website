import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/header";
import "../style/layout.css";
import Footer from "./footer/footer";

const layoutQuery = graphql`
	query ContactsQuery {
		contacts: markdownRemark(frontmatter: {fileName: {eq: "contactos"}}) {
			frontmatter {
				rp {
					name
					phone
				}
				magister {
					name
					phone
				}
				email
				address
				socialMedia {
					instagram
					facebook
					youtube
					linkedin
					spotify
				}
			}
		}
	}
`;


const Layout = ({ children }) => {
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 			site {
	// 				siteMetadata {
	// 					title
	// 				}
	// 		}
	// 	}
	// `);

	const { contacts } = useStaticQuery(layoutQuery);

	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
				<main className="flex-grow-1">
					{children}
				</main>
			<Footer
				magister={contacts.frontmatter.magister}
				rp={contacts.frontmatter.rp}
				email={contacts.frontmatter.email}
				address={contacts.frontmatter.address}
				socialMedia={contacts.frontmatter.socialMedia}
			/>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
