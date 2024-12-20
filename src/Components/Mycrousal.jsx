import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

const Mycrousal = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Carousel variant='dark'>
                            <Carousel.Item><img src='https://fdn.gsmarena.com/imgroot/news/19/12/realme-x50-5g-design/-727/gsmarena_001.jpg' className="d-block w-100" />
                            <Carousel.Caption>This is image 1</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item><img src='https://fdn.gsmarena.com/imgroot/news/19/12/realme-x50-5g-design/-727/gsmarena_001.jpg' className="d-block w-100" />
                            <Carousel.Caption>This is image 2</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item><img src='https://fdn.gsmarena.com/imgroot/news/19/12/realme-x50-5g-design/-727/gsmarena_001.jpg' className="d-block w-100" />
                            <Carousel.Caption>This is image 3</Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mycrousal