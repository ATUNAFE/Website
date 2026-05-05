import React from "react";
import { Container } from "react-bootstrap";
import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const FollowUs = ({ socialMedia }) => {
    const iconStyle = {
        width: "40px",
        height: "auto",
        display: "block"
    };

    return (
        <Container>
            <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
            <div className="d-flex flex-wrap gap-3 justify-content-start">
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
        </Container>
    );
};

export default FollowUs;