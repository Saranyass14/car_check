import { React, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import S3 from '../assets/svg/s3.svg'
import Money from '../assets/svg/money.svg'
import CarDocuments from '../assets/svg/car-documents.svg'
import BlackList from '../assets/svg/black-list.svg'
import GasStation from '../assets/svg/gas-station.svg'
import Dashboard from '../assets/svg/dashboard.svg'
import PaintBucket from '../assets/svg/paint-bucket.svg'
import CarInsurance from '../assets/svg/car-insurance.svg'
import Transport from '../assets/svg/transport.svg'
import Car1 from '../assets/jpg-images/car1.jpg'
import Car2 from '../assets/jpg-images/car2.jpg'
import Car3 from '../assets/jpg-images/car3.jpg'
import './panel.css';

const Panel1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Card className='mt-0 mb-3 card_style p-0'>
      <Row className='m-0 mb-2'>
        <Col className='p-2' md={{ order: 0 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
          <Row className='m-0'>
            <Col className='border-right' md={2} sm={4} xs={6}>
              <div className=''>
                <label className='head-txt'> Registration Number</label>
                <div className='rn-style'>TN22DY0992</div>
              </div>
            </Col>
            <Col className='border-right' md={2} sm={4} xs={'6'}>
              <div className=''>
                <label className='head-txt'> Manufacture Year</label>
                <div className='txt-styes pt-2'>2022</div>
              </div>
            </Col>
            <Col className='border-right' md={2} sm={4} xs={6}>
              <div className=''>
                <label className='head-txt'> Vehicle Location</label>
                <div className='txt-styes pt-2'>CHENNAI</div>
              </div>
            </Col>
            <Col className='border-right' md={2} sm={4} xs={6}>
              <div className=''>
                <label className='head-txt'> Engine Number</label>
                <div className='txt-styes pt-2'>D4FANM743904</div>
              </div>
            </Col>
            <Col className='border-right' md={2} sm={4} xs={6}>
              <div className=''>
                <label className='head-txt'> chassis Number</label>
                <div
                  className='txt-styes pt-2'>MZBFB813LNN251541</div>
              </div>
            </Col>
            <Col className='border-left' md={2} sm={4} xs={6}>
              <div className=''>
                <label className='head-txt'> Registration Date</label>
                <div
                  className='txt-styes pt-2'>2023-01-05</div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className='p-0' md={{ order: 1 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }}>
          <Row className='hd-box m-0'  >
            <div className='sub_hd_box'>
              KIA SONET HTK PLUS D1.5 6MT
            </div>
          </Row>
        </Col>
        <Col className='p-2' md={{ order: 2 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
          <Row className='car_container m-0'>
            <Col className='sub_car_conatiner1 pt-2' md={{ span: 3, order: 0 }} sm={{ span: 6, order: 1 }} xs={{ span: 6, order: 1 }} >
              <div className="sub_car_conatiner_card">
                <div className='score_card'>
                  <img src={S3} alt="s3" width="100%" />
                  <span className="score">640</span>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={Money} alt="money" width="20px" className="icon-svg-rupee" /> &nbsp;Valuation Price</label>
                  <div className="price_style">
                    10,26,713
                  </div>
                  <div className="small_txt">Powered by Kuwy Car Price</div>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={CarDocuments} alt="car documents" width="20" className="icon-svg" /> &nbsp; RC Status</label>
                  <div className='sub-text'>
                    ACTIVE
                  </div>
                </div>
                <div className=''>
                  <label className='head-txt'>
                    <img src={BlackList} alt="blacklist" width="20" className="icon-svg" /> &nbsp; Black list status </label>
                  <div className='sub-text'>
                    FALSE
                  </div>
                </div>
              </div>
            </Col>
            <Col className='pt-2' md={{ span: 6, order: 1 }} sm={{ order: 0 }} xs={{ span: 12, order: 0 }}>
              <Carousel className='slider-car' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item width="100%">
                  <img src={Car1} alt="car1" width="100%" height="100%" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Car2} alt="car2" width="100%" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Car3} alt="car3" width="100%" />
                </Carousel.Item>
              </Carousel>

            </Col>
            <Col className='pt-2' md={{ span: 3, order: 2 }} sm={{ span: 6, order: 1 }} xs={{ span: 6, order: 1 }} >
              <div className="">
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={GasStation} alt="gas station" width="20" className="icon-svg" />&nbsp; Fuel type</label> <div className='sub-text'>
                    DIESEL
                  </div>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={Dashboard} alt="dashboard" width="20" className="icon-svg-rupee" /> &nbsp;Kilometers Driven</label>
                  <div className='sub-text'>
                    8719 km
                  </div>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={PaintBucket} alt="paint bucket" width="20" className="icon-svg" />&nbsp; Vehicle Color</label>
                  <div className='sub-text'> AURORA
                    BLACK PEARL
                  </div>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={CarInsurance} alt="car insurance" width="20" className="icon-svg" />&nbsp; Insurance Validity
                  </label>
                  <div className='sub-text'>
                    upto 2026-01-03 <small className="small-txt d-block">THE NEW INDIA ASSURANCE CO.
                      LTD.</small>
                  </div>
                </div>
                <div className='each_content_style'>
                  <label className='head-txt'>
                    <img src={Transport} alt="transport" width="20" className="icon-svg" />&nbsp; Owner Details
                  </label>
                  <div className='sub-text'>
                    ANAND RAJ V S
                    <small className="small-txt d-block">NO of Owners -1</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Panel1