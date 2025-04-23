import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import instagramIcon from "../../images/Páginas/InstaB.png";
import facebookIcon from "../../images/Páginas/FacebookB.png";
import youtubeIcon from "../../images/Páginas/YoutubeB.png";
import linkedinIcon from "../../images/Páginas/LinkedinB.png";
import spotifyIcon from "../../images/Páginas/SpotifyB.png";

const FollowUs = () => (
    <Container>
        <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
        <Row className="justify-content-md-start mb-2">
            <Col xs="5" md="3" className="text-center">
                <Image
                    src={instagramIcon}
                    alt="Instagram"
                    style={{ 
                        height: "45px"
                    }}
                    fluid
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <Image
                    src={facebookIcon}
                    alt="Facebook"
                    style={{ maxHeight: "45px" }}
                    fluid
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <Image
                    src={youtubeIcon}
                    alt="Youtube"
                    style={{ maxHeight: "45px" }}
                    fluid
                />
            </Col>
        </Row>

        <Row className="justify-content-md-start mt-4 mb-2 my-2">
            <Col xs="5" md="3" className="text-center">
                <Image
                    src={linkedinIcon}
                    alt="Linkedin"
                    style={{ maxHeight: "45px" }}
                    fluid
                />
            </Col>
            <Col xs="5" md="3" className="text-center">
                <Image
                    src={spotifyIcon}
                    alt="Spotify"
                    style={{ maxHeight: "45px" }}
                    fluid
                />
            </Col>
        </Row>

    </Container>
);

export default FollowUs;