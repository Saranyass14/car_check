import { Col, Row } from 'react-bootstrap';
import '../footer/footer.css'

const Footer = () => {
    return (
        <>
            <Row className='m-0'>
                <Col md={5} sm={12} xs={12}>
                    <p className='text-case'>Report Generated Date :2023-06-02</p>
                </Col>
                <Col md={2} sm={12} xs={12}>
                    <p className='text-case text-center'>Page 1/3</p>
                </Col>
                <Col md={5} sm={12} xs={12}>
                    <p className='text-case text-center'>report is system generated, physical signature not required</p>
                </Col>
            </Row>
        </>
    )
}

export default Footer;