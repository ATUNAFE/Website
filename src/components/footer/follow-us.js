import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const FollowUs = ({ socialMedia }) => (
    <Container>
        <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
        <Row className="justify-content-md-start mb-2">
            <Col xs="5" md="3" className="text-center">
                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <CustomImage
                        src={IMAGE_FILENAMES.pages.white.instagram}
                        alt="Instagram"
                    />
                </a>
            </Col>

            <Col xs="5" md="3" className="text-center">
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <CustomImage
                        src={IMAGE_FILENAMES.pages.white.facebook}
                        alt="Facebook"
                    />
                </a>
            </Col>
            <Col xs="5" md="3" className="text-center">
                <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                    <CustomImage
                        src={IMAGE_FILENAMES.pages.white.youtube}
                        alt="Youtube"
                    />
                </a>
            </Col>
        </Row>

        <Row className="justify-content-md-start mt-4 mb-2 my-2">
            <Col xs="5" md="3" className="text-center">
                <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <CustomImage
                        src={IMAGE_FILENAMES.pages.white.linkedin}
                        alt="Linkedin"
                    />
                </a>
            </Col>
            <Col xs="5" md="3" className="text-center">
                <a href={socialMedia.spotify} target="_blank" rel="noopener noreferrer">
                    <CustomImage
                        src={IMAGE_FILENAMES.pages.white.spotify}
                        alt="Spotify"
                    />
                </a>
            </Col>
        </Row>

    </Container>
);

export default FollowUs;