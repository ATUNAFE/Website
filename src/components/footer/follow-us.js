import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const FollowUs = () => (
    <Container>
        <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
        <Row className="justify-content-md-start mb-2">
            <Col xs="5" md="3" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.instagram}
                    alt="Instagram"
                    // style={{ 
                    //     height: "45px"
                    // }}
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.facebook}
                    alt="Facebook"
                    // style={{ maxHeight: "45px" }}
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.youtube}
                    alt="Youtube"
                    // style={{ maxHeight: "45px" }}
                />
            </Col>
        </Row>

        <Row className="justify-content-md-start mt-4 mb-2 my-2">
            <Col xs="5" md="3" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.linkedin}
                    alt="Linkedin"
                    // style={{ maxHeight: "45px" }}
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.spotify}
                    alt="Spotify"
                    // style={{ maxHeight: "45px" }}
                />
            </Col>
        </Row>

    </Container>
);

export default FollowUs;