import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <section id='faq' className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>FAQ</h1>
                </div>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Are the cars brand new or used?</Accordion.Header>
                                <Accordion.Body>
                                    All the cars are imported and fully brand new
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do I need to pay online?</Accordion.Header>
                                <Accordion.Body>
                                    You need to confirm order and can visit showroom to pay and pickup.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Any extra costing need?</Accordion.Header>
                                <Accordion.Body>
                                    Car tax, registration cost need extra from car price.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Faq;