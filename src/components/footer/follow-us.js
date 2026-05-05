import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const FollowUs = ({ socialMedia }) => {
    const iconStyle = {
        width: "45px",
        height: "auto",
        display: "block"
    };

    return (
        <Container>
            <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
            
            <Row>
                <Col xs={2} md={2}></Col>
                <Col xs={10} md={10}>
                    <div className="d-flex flex-wrap gap-3">
                        <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <CustomImage src={IMAGE_FILENAMES.pages.white.instagram} alt="Instagram" />
                        </a>

                        <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <CustomImage src={IMAGE_FILENAMES.pages.white.facebook} alt="Facebook" />
                        </a>

                        <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <CustomImage src={IMAGE_FILENAMES.pages.white.youtube} alt="Youtube" />
                        </a>

                        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <CustomImage src={IMAGE_FILENAMES.pages.white.linkedin} alt="Linkedin" />
                        </a>

                        <a href={socialMedia.spotify} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <CustomImage src={IMAGE_FILENAMES.pages.white.spotify} alt="Spotify" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FollowUs;