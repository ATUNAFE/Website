import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CustomImage from "../images/image";

const SingleImageCarousel = ({ images, withControls = true, withIndicators = false, invertedColors = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextIndex = (activeIndex + 1) % images.length;

    // Load the first, current and next slide eagerly; the rest stay lazy.
    const isEager = index => index === 0 || index === activeIndex || index === nextIndex;

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            interval={3000}
            controls={withControls}
            indicators={withIndicators}
            prevIcon={<FaChevronLeft style={{ left: "300px" }} className={`custom-carousel-prev ${invertedColors ? "custom-carousel-icon-inverted" : "custom-carousel-icon"}`} />}
            nextIcon={<FaChevronRight style={{ right: "300px" }} className={`custom-carousel-next ${invertedColors ? "custom-carousel-icon-inverted" : "custom-carousel-icon"}`} />}
        >
            {images.map((image, index) => (
                <Carousel.Item key={index} style={{ height: "600px" }}>
                    <CustomImage
                        src={image}
                        alt=""
                        loading={isEager(index) ? "eager" : "lazy"}
                        sizes="(min-width: 960px) 960px, 100vw"
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
};

export default SingleImageCarousel;
