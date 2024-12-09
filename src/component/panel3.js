import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Hatchback from '../assets/svg/hatchback.svg'
import SteeringWheel from '../assets/svg/steering-wheel.svg'
import Motor from '../assets/svg/motor.svg'
import Valve from '../assets/svg/valve.svg'
import Agreement from '../assets/svg/agreement.svg'
import WeddingCar from '../assets/svg/wedding-car.svg'
import Tax from '../assets/svg/tax.svg'
import OwnerName from '../assets/svg/owner-name.svg'
import './panel.css';

const Panel3 = () => {
  return (
    <Card className='card_style'>
      <Row className='m-0'>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={Hatchback} alt="hatchback" width="20" className="icon-svg" />&nbsp; Body Type</label>
            <div className='sub-text'>
              STATION WAGON
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={SteeringWheel} alt="steering wheel" width="20"
                className="icon-svg" />&nbsp;vehicle usage</label>
            <div className='sub-text'>
              Private
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={Motor} alt="motor" width="20" className="icon-svg" />&nbsp;Cubic Capacity</label>
            <div className='sub-text'>
              1493 CC
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={Valve} alt="valve" width="20" className="icon-svg" />&nbsp;No. of Cylinders</label>
            <div className='sub-text'>
              4 CYLINDERS
            </div>
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={Agreement} alt="agreement" width="20" className="icon-svg" />&nbsp;HPA</label>
            <div className='sub-text'>
              YES - YES BANK
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={WeddingCar} alt="wedding Car" width="20" className="icon-svg" />&nbsp; RC Fit upto</label>
            <div className='sub-text'>
              2038-01-04
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={Tax} alt="tax" width="20" className="icon-svg" />&nbsp; Tax upto</label>
            <div className='sub-text'>
              1800-01-01
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className='each_content_style'>
            <label className='head-txt'>
              <img src={OwnerName} alt="owner name" width="20" className="icon-svg" />&nbsp; Spouse/Father Name</label>
            <div className='sub-text'>
              SEENIVASAN V
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default Panel3