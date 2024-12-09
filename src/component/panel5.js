import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ESign from '../assets/svg/e-sign.webp'
import QRCode from '../assets/svg/QRCode.jpg'
import './panel.css';

const Panel5 = () => {
    return (
        <Card className='card_style'>
            <Row className='m-0'>
                <Col className='border-right vehicle-summary-lg' lg={6} md={4} sm={12} xs={12}>
                    <div className='mt-2 mb-2'>
                        <label className='head-txt'>vehicle Summary</label>
                        <div className='sub-text pt-2'>Good Condition</div>
                    </div>
                </Col>
                <Col className='p-0' lg={6} md={8} sm={12} xs={12}>
                    <Row className='m-0'>
                        <Col className='border-right' md={5} sm={5} xs={4}>
                            <div className='img-wdth mt-2 mb-2'>
                                <img src={ESign} alt="e sign" width="70px" height="100%" />
                                <div className='esign-txt'>Ashok Kumar Dubey </div>
                            </div>
                        </Col>
                        <Col className='pl-2' md={2} sm={2} xs={3}>
                            <div className='img-wdth mt-2 mb-2'>
                                <img src={QRCode} alt="qr code" width="70px" height="100%" />
                            </div>
                        </Col>
                        <Col className='qr-colmn' md={5} sm={5} xs={5}>
                            <div className='qr-text mt-2'>Use your smart phone to scan the QR Code and get detailed Kuwy Inspection Report
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default Panel5