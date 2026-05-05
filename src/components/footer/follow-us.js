import React from "react";
import { Container } from "react-bootstrap";
import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const FollowUs = ({ socialMedia }) => {
    const iconWrapperStyle = {
        width: "60px",
        height: "60px", 
        marginRight: "15px",
        marginBottom: "15px",
        display: "inline-block"
    };

    return (
        <Container>
            <h5 className="text-start mb-4" style={{ fontWeight: "bold" }}>Segue-nos</h5>
            <div className="d-flex flex-wrap justify-content-start">
                
                <div style={iconWrapperStyle}>
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.instagram} alt="Instagram" />
                    </a>
                </div>

                <div style={iconWrapperStyle}>
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.facebook} alt="Facebook" />
                    </a>
                </div>

                <div style={iconWrapperStyle}>
                    <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.youtube} alt="Youtube" />
                    </a>
                </div>

                <div style={iconWrapperStyle}>
                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.linkedin} alt="Linkedin" />
                    </a>
                </div>

                <div style={iconWrapperStyle}>
                    <a href={socialMedia.spotify} target="_blank" rel="noopener noreferrer">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.spotify} alt="Spotify" />
                    </a>
                </div>

            </div>
        </Container>
    );
};

export default FollowUs;