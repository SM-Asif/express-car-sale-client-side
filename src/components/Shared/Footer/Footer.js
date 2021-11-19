import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../logo.png';

const Footer = () => {
    return (
        <footer className="bg-secondary p-4 text-center mt-5">
            <Container>
                <Row className='text-light'>
                    <Col style={{ textAlign: 'left' }} sm={4}>
                    <img className='logo' src={logo} alt="Logo" />
                    <p className='text-light mt-4'>Express Car Sale is a car selling plactform. Here you can choose you favorite car and order them in very cheap rate.</p>
                    </Col>
                    <Col style={{ textAlign: 'left' }} sm={4}>
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Delivery</li>
                    </ul>
                    </Col>
                    <Col style={{ textAlign: 'left' }} sm={4}>
                    <h4>Contact info</h4>
                    <ul type='none'>
                        <li>Email: info@expresscarsale.com</li>
                        <li>Phone: +8801234567899</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                    </Col>
                </Row>
                <p className="text-light">Copyrights © 2021 | All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;