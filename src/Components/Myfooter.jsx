import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Myfooter = () => {
  return (
    <div>
      <Container fluid className='bg-black text-white mt-4 py-5'>
        <Row className='py-2'>
          <Col md={3}>
            <p className='fw-bold'>Recommended</p>

            <div style={{ lineHeight: "0.7", fontSize: "12px" }}>
              <p className='mt-4'>realme c25s</p>
              <p>realme c75</p>
              <p>realme c61s</p>
              <p>realme c65</p>
              <p>realme c12</p>
              <p>realme c25</p>
              <p>realme c60</p>
            </div>
          </Col>

          <Col md={2}>
            <p className='fw-bold'>Support</p>
            <div style={{ lineHeight: "0.7", fontSize: "12px" }}>
              <p className='mt-4'>FAQ</p>
              <p>Troubleshooting</p>
            </div>
          </Col>

          <Col md={2}>
            <p className='fw-bold'>About realme</p>
            <div style={{ lineHeight: "0.7", fontSize: "12px" }}>
              <p className='mt-4'>Our brand</p>
              <p>Newsrooms</p>
            </div>
          </Col>

          <Col md={2}>
            <p className='fw-bold'>Contact realme</p>
            <div style={{ lineHeight: "0.7", fontSize: "12px" }}>
              <p className='mt-4'>whatsapp</p>
              <p>service.pk@realme.com</p>
            </div>
          </Col>

          <Col md={3}>
          <div className='text-center'>
              <p className='fw-bold'>04238048018</p>
            <div style={{ lineHeight: "0.9", fontSize: "12px" }}>
              <p>9:30-18:00, MON-SAT Exclude Holiday</p>
            </div>
          </div>
          </Col>
        </Row>
        <hr/>
       <div className='d-flex justify-content-between'>
       <div className='d-flex gap-3' style={{fontSize: "12px" }}>
          <p className='fw-bold'>Pakistan (English/PKR)</p>
          <p>© 2019-2024 realme. All Rights Reserved.</p>
        </div>
        <div className='d-flex gap-3' style={{fontSize: "12px" }}>
            <p>User Agreement |</p>
            <p>Privacy Policy |</p>
            <p>Terms of Sales |</p>
            <p>Warranty</p>
        </div>
       </div>
      </Container>
    </div>
  )
}

export default Myfooter;