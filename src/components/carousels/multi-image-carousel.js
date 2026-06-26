import React from 'react';
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

    return (
        <Carousel
            interval={3000}
            controls={true}
            indicators={false}
            prevIcon={<FaChevronLeft className="custom-carousel-icon custom-carousel-prev" />}
            nextIcon={<FaChevronRight className="custom-carousel-icon custom-carousel-next" />}
        >
            {imageGroups.map((group, index) => (
                <Carousel.Item key={index}>
                    <Container>
                        {/* flex-nowrap ensures they stay on one line even on the smallest screens */}
                        <Row className="flex-nowrap">
                            {group.map((image, i) => (
                                // xs={2} means 12/2 = 6 images per row on mobile
                                // px-1 reduces horizontal padding so images don't get too tiny
                                <Col xs={2} md={2} key={i} className="d-flex justify-content-center px-1">
                                    <CustomImage
                                        src={image}
                                        style={{
                                            width: '100%',
                                            height: '150px',
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
