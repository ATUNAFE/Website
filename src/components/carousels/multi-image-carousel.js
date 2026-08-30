import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import CustomImage from '../images/image';

const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
};

const MultiImageCarousel = ({ images }) => {
    const imageGroups = chunkArray(images, 6);
    const [activeIndex, setActiveIndex] = useState(0);
    const nextIndex = (activeIndex + 1) % imageGroups.length;

    // Load the first, current and next group eagerly; the rest stay lazy.
    const isEager = groupIndex =>
        groupIndex === 0 || groupIndex === activeIndex || groupIndex === nextIndex;

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            interval={3000}
            controls={true}
            indicators={false}
            prevIcon={<FaChevronLeft className="custom-carousel-icon custom-carousel-prev" />}
            nextIcon={<FaChevronRight className="custom-carousel-icon custom-carousel-next" />}
        >
            {imageGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                    <Container>
                        <Row>
                            {group.map((image, i) => (
                                <Col xs={4} md={2} key={i} className="d-flex justify-content-center">
                                    <CustomImage
                                        src={image}
                                        alt=""
                                        loading={isEager(groupIndex) ? "eager" : "lazy"}
                                        sizes="(min-width: 768px) 17vw, 33vw"
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                        }}
                                        imgStyle={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default MultiImageCarousel;
