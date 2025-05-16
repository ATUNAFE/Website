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
                        <Row>
                            {group.map((image, i) => (
                                <Col xs={4} md={2} key={i} className="d-flex justify-content-center">
                                    <CustomImage
                                        src={image}
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
