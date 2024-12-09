import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Dashboards from '../assets/svg/dashboards.svg'
import Exterior from '../assets/svg/exterior.svg'
import Interior from '../assets/svg/interior.svg'
import CarEngine from '../assets/svg/car-engine.svg'
import ManualTransmission from '../assets/svg/manual-transmission.svg'
import BrakeDisc from '../assets/svg/brake-disc.svg'
import Electricals from '../assets/svg/electricals.svg'
import Tyre from '../assets/svg/tyre.svg'
import Battery from '../assets/svg/battery.svg'
import Documents from '../assets/svg/documents.svg'
import Aplus from '../assets/svg/aplus.svg'
import Kc8 from '../assets/svg/kc8.svg'
import './panel.css';

const Panel2 = () => {
    return (
        <Card className='card_style'>
            <Row className='m-0'>
                <Col md={{ span: 4, order: 0 }} sm={6} xs={{ span: 12, order: 1 }}>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Dashboards} alt="dashboard" width="50" /> &nbsp;
                                <span className='sub-text v-align'>dashboard</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Exterior} alt="exterior" width="50" /> &nbsp;
                                <span className='sub-text v-align'>exteriors</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                I<img src={Interior} alt="interior" width="30" /> &nbsp;
                                <span className='sub-text v-align'>interiors</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={CarEngine} alt="car engine" width="30" /> &nbsp;
                                <span className='sub-text v-align'>engine</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={ManualTransmission} alt="manual transmission" width="25" />
                                &nbsp;
                                <span className='sub-text v-align'>transmission</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={6} xs={{ span: 12, order: 2 }}>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={BrakeDisc} alt="brake disc" width="30" /> &nbsp;
                                <span className='sub-text v-align'>brakes</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Electricals} alt="electricals" width="20" /> &nbsp;
                                <span className='sub-text v-align'>electricals</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Tyre} alt="tyre" width="30" /> &nbsp;
                                <span className='sub-text v-align'>tyres</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Battery} alt="battery" width="35" /> &nbsp;
                                <span className='sub-text v-align'>battery</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-green'>A+</div>
                            </div>
                        </Card>
                    </Row>
                    <Row className='m-0'>
                        <Card className='sub-card'>
                            <div className=''>
                                <img src={Documents} alt="documents" width="25" /> &nbsp;
                                <span className='sub-text v-align'>documents</span>
                            </div>
                            <div className='text-right'>
                                <div className='small-card sc-blue1'>A</div>
                            </div>
                        </Card>
                    </Row>
                </Col>
                <Col md={{ span: 4, order: 2 }} sm={12} xs={{ span: 12, order: 0 }}>
                    <Card className='mb-2 car-ratings'>
                        <div className='car-grade-ratings'>
                            <img src={Aplus} alt="aplus" width="100%" height="100%" />
                        </div>
                        <div className='car-grade-ratings'>
                            <img src={Kc8} width="100%" height="100%" />
                        </div>
                    </Card>
                    <Card className='pt-1 pb-1'>
                        <Row className='m-0'>
                            <Col sm={3} xs={3}>
                                <div className='grade-ratings'>
                                    <div className='small-card sc-green-sm'>A+</div>
                                    Excellent
                                </div>
                            </Col>
                            <Col sm={3} xs={3}>
                                <div className='grade-ratings'>
                                    <div className='small-card sc-blue'>A</div>
                                    Good
                                </div>
                            </Col>
                            <Col sm={3} xs={3}>
                                <div className='grade-ratings'>
                                    <div className='small-card sc-orange'>B</div>
                                    Fair
                                </div>
                            </Col>
                            <Col sm={3} xs={3}>
                                <div className='grade-ratings'>
                                    <div className='small-card sc-pink'>C</div>
                                    Poor
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default Panel2