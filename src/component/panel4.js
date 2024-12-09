import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './panel.css';

const Panel4 = () => {
  return (
    <Card className='card_style'>
      <Row className='m-0'>
        <Col className='border-solid-right pb-0' md={2} sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>Norms Description</label>
            <div className='sub-text'>BHARAT STAGE VI</div>
          </div>
        </Col>
        <Col className='border-solid-right pb-0' md={3} sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>Certificate Issued By</label>
            <div className='sub-text'>MEENAMBAKKAM RTO</div>
          </div>
        </Col>
        <Col className='border-solid-right pb-0' md={2} sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>Seat Capacity</label>
            <div className='sub-text'>5</div>
          </div>
        </Col>
        <Col className='border-solid-right pb-0' md={3} sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>RC Registered at</label>
            <div className='sub-text'>MEENAMBAKKAM RTO</div>
          </div>
        </Col>
        <Col className='pb-0' md={2} sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>As on Status</label>
            <div className='sub-text'>2023-06-02</div>
          </div>
        </Col>
        <Col className='vehicle-summary-sm pb-0' sm={6} xs={6}>
          <div className='mt-2 mb-2'>
            <label className='head-txt'>vehicle Summary</label>
            <div className='sub-text pt-2'>Good Condition</div>
          </div>
        </Col>
      </Row>
      <hr className='hr-line' />
      <Row className=' m-0'>
        <Col className='border-solid-right' md={6} sm={6} xs={12}>
          <div className='mt-0 mb-0'>
            <label className='head-txt'>Current city</label>
            <div className='sub-text pt-0 m-0'>FLAT NO A2 FLOOR 1 THARSHAN FLATS, PLOT NO 7 AND 8 BALAKRISHNAN STREET, NANMANGALAM,
              Chennai, Tamil Nadu, 600117</div>
          </div>
        </Col>
        <Col md={6} sm={6} xs={12}>
          <div className='mt-0 mb-0'>
            <label className='head-txt'>Permanent city</label>
            <div className='sub-text pt-0 m-0'>FLAT NO A2 FLOOR 1 THARSHAN FLATS, PLOT NO 7 AND 8 BALAKRISHNAN STREET, NANMANGALAM, Chennai, Tamil Nadu, 600117</div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default Panel4