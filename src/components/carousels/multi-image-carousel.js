import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import CustomImage from '../images/image';

const MultiImageCarousel = ({ images }) => {
    const [chunkSize, setChunkSize] = useState(6);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setChunkSize(3);
            } else {
                setChunkSize(6);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const chunkArray = (arr, size) => {
        const chunked = [];
        for (let i = 0; i < arr.length; i += size) {
            chunked.push(arr.slice(i, i + size));
        }
        return chunked;
    };

    const imageGroups = chunkArray(images, chunkSize);

    return (
        <Carousel
            interval={5000}
            controls={true}
            indicators={false}
            prevIcon={<FaChevronLeft className="custom-carousel-icon text-dark" style={{ fontSize: '2rem' }} />}
            nextIcon={<FaChevronRight className="custom-carousel-icon text-dark" style={{ fontSize: '2rem' }} />}
        >
            {imageGroups.map((group, index) => (
                <Carousel.Item key={index}>
                    <Container className="px-5"> 
                        <Row className="justify-content-center">
                            {group.map((image, i) => (
                                <Col 
                                    key={i} 
                                    xs={4} 
                                    md={2} 
                                    className="d-flex justify-content-center px-1"
                                >
                                    <CustomImage
                                        src={image}
                                        style={{
                                            width: "100%",
                                            height: chunkSize === 3 ? "120px" : "150px",
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
