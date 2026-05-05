import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "../../style/concept.css";
import Contacts from "./contacts";
import FollowUs from "./follow-us";
import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";
import { useStaticQuery, graphql } from "gatsby";


const Footer = () => {
	const data = useStaticQuery(graphql`
        {
            markdownRemark(frontmatter: {id: {regex: "/footer/"}}) {
                frontmatter {
                    id
                    title {
                        text
                    }
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
    `);

	const content = data.markdownRemark;

	if (!content) return <p>⚠️ Content not found for footer”.</p>;

	return (
        <footer
            id={content.frontmatter.id}
            style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
                padding: "3rem 0",
            }}
        >
            <Container>
                <Row className="justify-content-center g-4">
                    <Col xs={12} md={4} lg={3}>
                        <Contacts
                            magister={content.frontmatter.magister}
                            rp={content.frontmatter.rp}
                            email={content.frontmatter.email}
                            address={content.frontmatter.address}
                        />
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <FollowUs
                            socialMedia={content.frontmatter.socialMedia}
                        />
                    </Col>
                    <Col xs={12} md={4} lg={3} className="d-flex flex-column justify-content-center">
					<div className="d-flex align-items-center mb-4">
						<div style={{ minWidth: "70px" }} className="me-2">
							<CustomImage
								src={IMAGE_FILENAMES.logos.color.tunafe}
								alt="TUNAFE"
								style={{ width: "70px", height: "auto" }}
							/>
						</div>
						<div style={{ fontSize: "12px", lineHeight: "1.2" }}>
							<p className="mb-0">Tuna Feminina de Engenharia</p>
							<p className="mb-0">da Universidade do Porto</p>
						</div>
					</div>
					<div className="mb-4">
						<CustomImage
							src={IMAGE_FILENAMES.logos.white.feup}
							alt="FEUP"
							style={{ width: "160px", height: "auto" }}
						/>
					</div>
					<div>
						<CustomImage
							src={IMAGE_FILENAMES.logos.color.ipdj}
							alt="IPDJ"
							style={{ width: "180px", height: "auto" }}
						/>
					</div>
				</Col>
                </Row>

                <Row className="text-center mt-5">
                    <Col>
                        <small style={{ opacity: 0.7 }}>TUNAFE - Desde 1991+1</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
