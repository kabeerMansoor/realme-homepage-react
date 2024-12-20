import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar, Nav, NavbarBrand } from 'react-bootstrap'

const Mynav = () => {
    return (
        <div>
            <Container fluid >
                <Row>
                    <Col>
                        <Navbar expand="md">
                            <NavbarBrand>
                                <h3>realme</h3>
                            </NavbarBrand>
                            <Navbar.Toggle aria-controls='my-nav' />
                            <Navbar.Collapse id='my-nav'>
                                <Nav className='me-auto text-center'>
                                    <Nav.Link>realme smartphone</Nav.Link>
                                    <Nav.Link>nazro smartphone</Nav.Link>
                                    <Nav.Link>Audio</Nav.Link>
                                    <Nav.Link>Accessories</Nav.Link>
                                </Nav>

                                <Navbar.Text className='ms-auto '>
                                    <div className='text-center'>
                                        <span className='mx-2 '>Brand</span>
                                        <span className='mx-2'>Support</span>
                                        <span className='mx-2'>Community</span>
                                    </div>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mynav