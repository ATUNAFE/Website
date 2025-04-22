import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import instagramIcon from "../../images/Páginas/InstaB.png";
import facebookIcon from "../../images/Páginas/FacebookB.png";
import youtubeIcon from "../../images/Páginas/YoutubeB.png";
import linkedinIcon from "../../images/Páginas/LinkedinB.png";
import spotifyIcon from "../../images/Páginas/SpotifyB.png";

const FollowUs = () => (
    <Container>
        <Row className="justify-content-md-center m-2">
            <Col xs lg="2" className="text-end">
                <Image
                    src={instagramIcon}
                    alt="Instagram"
                    style={{ maxHeight: "40px" }}
                    fluid
                />
            </Col>
            <Col md="auto" className="text-center">
                <Image
                    src={facebookIcon}
                    alt="Facebook"
                    style={{ maxHeight: "40px" }}
                    fluid
                />
            </Col>
            <Col xs lg="2" className="text-start">
                <Image
                    src={youtubeIcon}
                    alt="Youtube"
                    style={{ maxHeight: "40px" }}
                    fluid
                />
            </Col>
        </Row>

        <Row className="justify-content-md-center mt-4 mb-2 my-2">
            <Col xs lg="2" className="text-end">
                <Image
                    src={linkedinIcon}
                    alt="Linkedin"
                    style={{ maxHeight: "40px" }}
                    fluid
                />
            </Col>
            <Col md="auto" className="text-center">
                <Image
                    src={spotifyIcon}
                    alt="Spotify"
                    style={{ maxHeight: "40px" }}
                    fluid
                />
            </Col>
        </Row>

    </Container>
);

export default FollowUs;