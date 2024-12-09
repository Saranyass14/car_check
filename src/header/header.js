import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CarCheck from '../assets/svg/kuwy-car-check-new-logo.svg'
import '../header/header.css'

const Header = () => {
    return (
        <>
            <Navbar className="nav-head">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home">
                        <img
                            src={CarCheck}
                            width="150px"
                            height="100%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end report-text-id">
                        <Navbar.Text>
                            report id : CC230602181034948960
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;