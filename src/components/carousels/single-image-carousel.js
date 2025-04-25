import React from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CustomImage from "../images/image";

const SingleImageCarousel = ({ images, withControls = true, withIndicators = false, invertedColors = false }) => (
    <Carousel
        interval={3000}
        controls={withControls}
        indicators={withIndicators}
        prevIcon={<FaChevronLeft style={{ left: "400px" }} className={`custom-carousel-prev ${invertedColors ? "custom-carousel-icon-inverted" : "custom-carousel-icon"}`} />}
        nextIcon={<FaChevronRight style={{ right: "400px" }} className={`custom-carousel-next ${invertedColors ? "custom-carousel-icon-inverted" : "custom-carousel-icon"}`} />}
    >
        {images.map((image, index) => (
            <Carousel.Item key={index} style={{ height: "600px" }}>
                <CustomImage
                    src={image.src}
                    alt={image.alt}
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    imgStyle={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        margin: "auto",
                    }}
                />
            </Carousel.Item>
        ))}
    </Carousel>
);

export default SingleImageCarousel;
